const GLYPHS = '!@#$%^&*()[]{}<>?/\\|;:~+=-_'
const FRAME_MS = 40

export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// For each character, the glyphs whose width in this font is close to its own,
// so a scrambled line keeps roughly the same length.
function glyphsByWidth(el, text) {
  const ctx = document.createElement('canvas').getContext('2d')
  const style = getComputedStyle(el)
  ctx.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`
  const widths = [...GLYPHS].map(g => [g, ctx.measureText(g).width])
  const cache = {}
  return ch => {
    if (!cache[ch]) {
      const w = ctx.measureText(ch).width
      // never noticeably wider than the original, so a line can't outgrow its box
      const close = widths.filter(([, gw]) => gw <= w * 1.05 && gw >= w * 0.7).map(([g]) => g)
      const narrower = widths.filter(([, gw]) => gw <= w * 1.05).sort((x, y) => y[1] - x[1]).map(([g]) => g)
      cache[ch] = close.length >= 3 ? close : narrower.length ? narrower.slice(0, 3) : [ch]
    }
    const options = cache[ch]
    return options[(Math.random() * options.length) | 0]
  }
}

// Indexes where the browser wrapped the text node onto a new line.
function lineBreaks(textNode) {
  const range = document.createRange()
  const breaks = []
  let top = null
  for (let i = 0; i < textNode.length; i++) {
    range.setStart(textNode, i)
    range.setEnd(textNode, i + 1)
    const rect = range.getClientRects()[0]
    if (!rect) continue
    if (top !== null && rect.top > top + 1) breaks.push(i)
    top = rect.top
  }
  return breaks
}

// Scrambles text into random glyphs, then settles it left to right.
// The real text keeps its place in the layout (hidden) while the scrambled
// copy is drawn on top of it, so the page never shifts.
function scramble(el, visible, text, duration) {
  const pick = glyphsByWidth(el, text)
  const overlay = document.createElement('span')
  overlay.setAttribute('aria-hidden', 'true')
  // white-space: pre with the real text's own line breaks, so the scrambled copy
  // can never wrap differently and spill over the content below
  overlay.style.cssText = 'position:absolute;inset:0;white-space:pre;font-variant-ligatures:none;pointer-events:none'
  const breaks = new Set(lineBreaks(visible.firstChild))
  if (getComputedStyle(el).position === 'static') el.style.position = 'relative'
  visible.style.visibility = 'hidden'
  el.append(overlay)

  const start = performance.now()
  let last = 0
  const frame = now => {
    const p = Math.min((now - start) / duration, 1)
    if (p === 1) {
      overlay.remove()
      visible.style.visibility = ''
      return
    }
    if (now - last >= FRAME_MS) {
      last = now
      const settled = Math.floor(p * text.length)
      let out = ''
      for (let i = 0; i < text.length; i++) {
        if (breaks.has(i)) out = out.trimEnd() + '\n'
        if (breaks.has(i) && /\s/.test(text[i])) continue
        out += i < settled || /\s/.test(text[i]) ? text[i] : pick(text[i])
      }
      overlay.textContent = out
    }
    requestAnimationFrame(frame)
  }
  requestAnimationFrame(frame)
}

// v-scramble: plays when the element scrolls into view; v-scramble.load plays on mount.
// Screen readers get the real text from an sr-only copy; the visible copies are aria-hidden.
export const vScramble = {
  mounted(el, binding) {
    const text = el.textContent
    const sr = document.createElement('span')
    sr.className = 'sr-only'
    sr.textContent = text
    const visible = document.createElement('span')
    visible.setAttribute('aria-hidden', 'true')
    visible.textContent = text
    el.replaceChildren(sr, visible)

    if (prefersReducedMotion()) return
    const duration = binding.value?.duration ?? Math.min(900, 300 + text.length * 25)
    // wait for web fonts so glyph widths are measured in the real font
    const run = () => document.fonts.ready.then(() => scramble(el, visible, text, duration))
    if (binding.modifiers.load) return run()

    el._scrambleObserver = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      el._scrambleObserver.disconnect()
      run()
    }, { threshold: 0.6 })
    el._scrambleObserver.observe(el)
  },
  unmounted(el) {
    el._scrambleObserver?.disconnect()
  },
}

const escapeHtml = c => (c === '&' ? '&amp;' : c === '<' ? '&lt;' : c === '>' ? '&gt;' : c)

// Builds ASCII art top to bottom: each character appears around the moving
// front (with jitter), starts in the accent colour and fades to the text colour.
// Returns a function that cancels the animation.
export function revealAscii(pre, text, { sweep = 1100, jitter = 450, fade = 700, levels = 5 } = {}) {
  const rows = text.split('\n')
  const cells = rows.map((row, r) =>
    [...row].map(ch => (ch === ' ' ? null : { ch: escapeHtml(ch), t: (r / rows.length) * sweep + Math.random() * jitter })),
  )
  const end = sweep + jitter + fade
  const start = performance.now()
  let raf

  const frame = now => {
    const elapsed = now - start
    if (elapsed >= end) {
      pre.textContent = text
      return
    }
    pre.innerHTML = cells
      .map(row => {
        let html = ''
        let run = ''
        let level = null
        const flush = () => {
          if (!run) return
          html += level === null || level >= levels ? run : `<span class="ascii-l${level}">${run}</span>`
          run = ''
        }
        for (const cell of row) {
          const shown = cell && elapsed >= cell.t
          const next = shown ? Math.min(levels, Math.floor(((elapsed - cell.t) / fade) * levels)) : null
          if (next !== level) {
            flush()
            level = next
          }
          run += shown ? cell.ch : ' '
        }
        flush()
        return html
      })
      .join('\n')
    raf = requestAnimationFrame(frame)
  }

  raf = requestAnimationFrame(frame)
  return () => cancelAnimationFrame(raf)
}
