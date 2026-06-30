import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 bg-primary-600 dark:bg-primary-700 text-white
                 rounded-sm shadow-lg shadow-primary-200 dark:shadow-primary-900/50 flex items-center justify-center
                 hover:bg-primary-700 dark:hover:bg-primary-600 hover:shadow-xl transition-all duration-200
                 active:scale-95 cursor-pointer animate-fade-in"
      aria-label="Scroll to top"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18,15 12,9 6,15" />
      </svg>
    </button>
  )
}
