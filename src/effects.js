const GLYPHS = '!@#$%^&*()[]{}<>?/\\|;:~+=-_'
const FRAME_MS = 40

export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const randomGlyph = () => GLYPHS[(Math.random() * GLYPHS.length) | 0]

// Scrambles text into random glyphs, then settles it left to right.
function scramble(node, text, duration) {
  const start = performance.now()
  let last = 0
  const frame = now => {
    const p = Math.min((now - start) / duration, 1)
    if (now - last >= FRAME_MS || p === 1) {
      last = now
      const settled = Math.floor(p * text.length)
      let out = text.slice(0, settled)
      for (let i = settled; i < text.length; i++) out += /\s/.test(text[i]) ? text[i] : randomGlyph()
      node.textContent = out
    }
    if (p < 1) requestAnimationFrame(frame)
  }
  requestAnimationFrame(frame)
}

// v-scramble: plays when the element scrolls into view; v-scramble.load plays on mount.
// Screen readers get the real text from an sr-only copy; the animated copy is aria-hidden.
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
    const run = () => scramble(visible, text, duration)
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
