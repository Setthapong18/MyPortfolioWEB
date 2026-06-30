import { useEffect, useRef } from 'react'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px 0px -50px 0px',
      }
    )

    const el = ref.current
    if (el) {
      const revealElements = el.querySelectorAll(
        '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right'
      )
      revealElements.forEach((element) => observer.observe(element))
    }

    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return ref
}
