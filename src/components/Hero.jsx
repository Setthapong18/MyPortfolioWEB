import { useEffect, useRef } from 'react'
import { useLanguage } from '../hooks/useLanguage'

export default function Hero() {
  const { t } = useLanguage()
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const id = requestAnimationFrame(() => {
      el.querySelectorAll('[data-hero-item]').forEach((node, i) => {
        setTimeout(() => node.classList.add('hero-item--visible'), i * 100)
      })
    })
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden
                        bg-surface dark:bg-[#0a0f1e]">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-100/30 dark:bg-primary-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary-50/50 dark:bg-primary-800/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="section-container w-full pt-28 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16" ref={heroRef}>

          {/* Left — text content */}
          <div className="flex-1 max-w-2xl">

            {/* Greeting */}
            <div data-hero-item className="hero-item flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-primary-400" />
              <span className="font-mono text-sm text-primary-600 dark:text-primary-400 tracking-wider">
                {t('hero.greeting')}
              </span>
            </div>

            {/* Name */}
            <h1
              data-hero-item
              className="hero-item text-5xl sm:text-6xl md:text-7xl font-black
                         text-heading dark:text-gray-50
                         leading-[0.95] tracking-tight mb-6"
            >
              <span className="block">SETTHAPONG</span>
              <span className="block text-gradient">POMRUNG</span>
            </h1>

            {/* Role title — static */}
            <div data-hero-item className="hero-item flex items-center gap-3 mb-6">
              <span className="font-mono text-primary-400 text-lg">{'>'}</span>
              <h2 className="text-xl sm:text-2xl font-semibold text-primary-600 dark:text-primary-400 font-mono">
                Fullstack Developer
              </h2>
            </div>

            {/* Description */}
            <p
              data-hero-item
              className="hero-item text-lg text-body dark:text-gray-400 max-w-xl mb-10 leading-relaxed"
            >
              {t('hero.description')}
            </p>

            {/* Buttons */}
            <div data-hero-item className="hero-item flex flex-wrap gap-4">
              <a href="/resume.pdf" download className="btn-primary">
                <svg
                  width="20" height="20" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7,10 12,15 17,10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {t('hero.downloadResume')}
              </a>
              <a
                href="https://github.com/Setthapong18"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline dark:bg-gray-900 dark:border-gray-500 dark:text-gray-200 dark:hover:border-primary-400 dark:hover:bg-gray-800"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                {t('hero.viewGitHub')}
              </a>
            </div>
          </div>

          {/* Right — profile photo */}
          <div data-hero-item className="hero-item flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary-200 via-primary-100 to-transparent dark:from-primary-900/40 dark:via-primary-800/20 opacity-60" />
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-primary-500 rounded-full border-2 border-white dark:border-gray-900 shadow-md" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary-300 rounded-full border-2 border-white dark:border-gray-900" />
              <img
                src="/profile.png"
                alt="Setthapong Pomrung"
                className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full object-cover object-top
                           border-4 border-white dark:border-gray-800
                           shadow-xl shadow-primary-100/60 dark:shadow-primary-900/30"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
