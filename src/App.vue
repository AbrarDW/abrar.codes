<template>
  <div class="min-h-screen bg-ink-950 text-ink-text">
    <!-- Navbar -->
    <nav class="fixed top-0 w-full z-50 bg-ink-950/80 backdrop-blur-xl border-b border-ink-line">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between font-mono text-sm">
        <a href="#" class="flex items-center gap-2 hover:text-accent transition-colors">
          <span class="text-accent">~/</span>abrar<span class="cursor-blink inline-block w-2 h-4 bg-accent"></span>
        </a>
        <div class="hidden sm:flex items-center gap-6 text-ink-muted">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" class="hover:text-accent transition-colors">{{ link.label }}</a>
        </div>
        <button @click="menuOpen = !menuOpen" class="sm:hidden p-2 -mr-2 text-ink-muted hover:text-accent" :aria-expanded="menuOpen" aria-label="Toggle menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <!-- Mobile menu -->
      <div v-if="menuOpen" class="sm:hidden border-t border-ink-line px-4 py-4 space-y-3 font-mono text-sm text-ink-muted">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" @click="menuOpen = false" class="block py-1 hover:text-accent transition-colors">{{ link.label }}</a>
      </div>
    </nav>

    <main class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Hero -->
      <section class="pt-36 sm:pt-44 pb-24">
        <p class="font-mono text-ink-muted mb-5"><span class="text-accent">$</span> whoami</p>
        <h1 class="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter">Abrar Dhalwala</h1>
        <p class="mt-7 text-xl sm:text-2xl text-ink-soft leading-snug max-w-3xl">
          Senior software engineer. 10+ years shipping full-stack web apps with Node, TypeScript, Go and Vue — fast, secure and easy to use.
        </p>
        <div class="flex flex-wrap gap-3 mt-12 font-mono text-sm">
          <a href="#contact" class="inline-flex items-center min-h-[48px] px-5 rounded-md bg-accent text-ink-950 font-semibold hover:brightness-110 transition">./get-in-touch</a>
          <a href="#experience" class="inline-flex items-center min-h-[48px] px-5 rounded-md border border-ink-border hover:border-accent hover:text-accent transition-colors">git log --career</a>
        </div>
        <div class="flex flex-wrap gap-3 mt-16 font-mono text-xs sm:text-sm">
          <span class="px-3 py-2 rounded-md border border-ink-border text-ink-muted">status: <span class="text-accent">open to opportunities</span></span>
          <span class="px-3 py-2 rounded-md border border-ink-border text-ink-muted">now: <span class="text-ink-text">{{ experience[0].company }}</span></span>
          <span class="px-3 py-2 rounded-md border border-ink-border text-ink-muted">since: <span class="text-ink-text">2015</span></span>
        </div>
      </section>

      <!-- Experience -->
      <section id="experience" class="py-16 scroll-mt-20">
        <p class="font-mono text-ink-muted mb-8"><span class="text-accent">$</span> git log --career --oneline</p>
        <ol class="rounded-xl border border-ink-border bg-ink-900 overflow-hidden">
          <li v-for="(job, i) in experience" :key="job.company"
              class="flex flex-wrap items-center gap-x-6 gap-y-2 px-5 sm:px-7 py-6 border-b border-ink-line last:border-b-0 hover:bg-white/[0.02] transition-colors">
            <span :class="i === 0 ? 'bg-accent' : 'border-2 border-ink-muted'" class="w-3 h-3 rounded-full shrink-0"></span>
            <span class="font-mono text-sm text-ink-muted w-44">{{ job.period }}</span>
            <span class="w-full sm:w-72 text-xl sm:text-2xl font-semibold">{{ job.company }}</span>
            <span class="flex-1 text-ink-soft">{{ job.role }}</span>
            <span v-if="i === 0" class="font-mono text-xs px-2 py-1 rounded border border-accent text-accent">HEAD → main</span>
            <span v-else-if="i === experience.length - 1" class="font-mono text-xs text-ink-muted">initial commit</span>
          </li>
        </ol>
      </section>

      <!-- Skills -->
      <section id="skills" class="py-16 scroll-mt-20">
        <p class="font-mono text-ink-muted mb-8"><span class="text-accent">$</span> cat stack.json</p>
        <pre class="p-6 sm:p-8 rounded-xl border border-ink-border bg-ink-900 font-mono text-sm sm:text-[15px] leading-loose text-ink-soft overflow-x-auto">{<template v-for="(category, i) in skillCategories" :key="category.key">
  <span class="text-syntax-key">"{{ category.key }}"</span>:{{ ' '.repeat(keyWidth - category.key.length) }}[<template v-for="(skill, j) in category.items" :key="skill"><span class="text-syntax-string">"{{ skill }}"</span><template v-if="j < category.items.length - 1">, </template></template>]<template v-if="i < skillCategories.length - 1">,</template></template>
}</pre>
      </section>

      <!-- About -->
      <section id="about" class="py-16 scroll-mt-20">
        <p class="font-mono text-ink-muted mb-8"><span class="text-accent">$</span> cat about.md</p>
        <div class="grid lg:grid-cols-5 gap-10">
          <p class="lg:col-span-3 text-2xl sm:text-3xl leading-snug tracking-tight">
            I turn smart ideas into elegant web applications — for small startups and established teams — with an eye on usability, performance and clean code.
          </p>
          <ul class="lg:col-span-2 space-y-4 text-ink-soft leading-relaxed">
            <li v-for="point in aboutPoints" :key="point" class="flex gap-3">
              <span class="font-mono text-accent">→</span>{{ point }}
            </li>
          </ul>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="py-16 pb-24 scroll-mt-20">
        <p class="font-mono text-ink-muted mb-8"><span class="text-accent">$</span> ping abrar</p>
        <div class="rounded-2xl border border-ink-border bg-ink-900 p-8 sm:p-14 flex flex-wrap items-end justify-between gap-8">
          <div class="flex-[1_1_420px]">
            <h2 class="text-4xl sm:text-6xl font-bold leading-none tracking-tight mb-4">Let’s build something.</h2>
            <p class="text-ink-soft text-lg leading-relaxed max-w-xl">Send a direct question by email or DM and I’ll reply when I can. No soliciting, please.</p>
          </div>
          <div class="flex flex-wrap gap-3">
          <a href="mailto:abrardw2@gmail.com"
             class="inline-flex items-center min-h-[48px] px-5 rounded-md border border-ink-border font-mono text-sm hover:border-accent hover:text-accent transition-colors">
            email
          </a>
          <a href="https://www.linkedin.com/in/abrardw/" target="_blank" rel="noopener"
             class="inline-flex items-center min-h-[48px] px-5 rounded-md border border-ink-border font-mono text-sm hover:border-accent hover:text-accent transition-colors">
            linkedin
          </a>
          <a href="https://www.instagram.com/abrar.codes" target="_blank" rel="noopener"
             class="inline-flex items-center gap-2 min-h-[48px] px-5 rounded-md bg-accent text-ink-950 font-mono text-sm font-semibold hover:brightness-110 transition">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            @abrar.codes
          </a>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="border-t border-ink-line">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-ink-muted">
        <p>&copy; {{ new Date().getFullYear() }} Abrar Dhalwala</p>
        <p>exit 0 — built with Vue + Tailwind</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const navLinks = [
  { href: '#experience', label: './experience' },
  { href: '#skills', label: './stack' },
  { href: '#about', label: './about' },
  { href: '#contact', label: './contact' },
]

const experience = [
  { company: 'MyWhoosh', role: 'Senior Software Engineer', period: 'Aug 2022 → now' },
  { company: 'Bacancy Technology', role: 'Senior Software Engineer', period: 'Jan 2022 → Jul 2022' },
  { company: 'Aecor Digital', role: 'Senior Software Engineer', period: 'Mar 2020 → Dec 2021' },
  { company: 'Netweb Software', role: 'Software Engineer', period: 'Feb 2017 → Mar 2020' },
  { company: 'Pixel Perfection', role: 'Software Engineer', period: 'Aug 2015 → Aug 2016' },
]

const skillCategories = [
  { key: 'languages', items: ['TypeScript', 'JavaScript', 'PHP', 'Python', 'Go'] },
  { key: 'frameworks', items: ['Vue', 'React', 'Next.js', 'NestJS', 'Laravel', 'FastAPI', 'Iris'] },
  { key: 'data', items: ['Node', 'MySQL', 'MongoDB', 'Redis', 'RabbitMQ'] },
  { key: 'cloud', items: ['AWS S3', 'AWS Lambda', 'AWS EC2', 'Vercel'] },
  { key: 'quality', items: ['Jest', 'SonarQube', 'Jira', 'GitHub', 'GitLab'] },
]

// Pads keys so the arrays in stack.json line up
const keyWidth = Math.max(...skillCategories.map(c => c.key.length)) + 1

const aboutPoints = [
  'Full-stack apps, from backend services to interactive front-ends.',
  'Close collaboration with clients and teams to build solutions that stay intuitive and maintainable.',
  'Diploma in Computer Engineering, M S University, Vadodara (2010–2014).',
]
</script>
