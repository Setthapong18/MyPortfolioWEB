import { useState, useEffect, useCallback } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { useDarkMode } from '../hooks/useDarkMode'

const navLinks = ['about', 'skills', 'experience', 'projects', 'education', 'contact']

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage()
  const { isDark, toggle: toggleDark } = useDarkMode()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      const sections = navLinks.map(id => document.getElementById(id))
      const scrollPos = window.scrollY + 120
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = useCallback((id) => {
    setIsMobileMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm shadow-sm border-b border-border dark:border-gray-800'
        : 'bg-transparent'
    }`}>
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <div />

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button key={link} onClick={() => handleNavClick(link)}
                className={`px-3 py-2 text-sm font-medium rounded-sm transition-all duration-200 cursor-pointer ${
                  activeSection === link
                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30'
                    : 'text-body dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50/50 dark:hover:bg-gray-800/50'
                }`}>
                {t(`nav.${link}`)}
              </button>
            ))}

            {/* Language toggle */}
            <button onClick={toggleLanguage}
              className="ml-2 px-3 py-1.5 border-2 border-primary-200 dark:border-gray-600
                         text-primary-600 dark:text-gray-300 font-mono text-xs font-bold rounded-sm
                         hover:bg-primary-50 dark:hover:bg-gray-800 hover:border-primary-400 dark:hover:border-primary-500
                         transition-all duration-200 cursor-pointer"
              aria-label="Toggle language">
              {language === 'en' ? 'TH' : 'EN'}
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={toggleDark}
              className="ml-1 w-9 h-9 flex items-center justify-center rounded-sm
                         border-2 border-primary-200 dark:border-gray-600
                         text-primary-600 dark:text-yellow-400
                         hover:bg-primary-50 dark:hover:bg-gray-800 hover:border-primary-400
                         transition-all duration-200 cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                /* Sun icon */
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                /* Moon icon */
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button onClick={toggleLanguage}
              className="px-2 py-1 border-2 border-primary-200 dark:border-gray-600 text-primary-600 dark:text-gray-300 font-mono text-xs font-bold rounded-sm cursor-pointer">
              {language === 'en' ? 'TH' : 'EN'}
            </button>
            <button onClick={toggleDark}
              className="w-8 h-8 flex items-center justify-center border-2 border-primary-200 dark:border-gray-600
                         text-primary-600 dark:text-yellow-400 rounded-sm cursor-pointer
                         hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode">
              {isDark ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-body dark:text-gray-400 hover:text-primary-600 transition-colors cursor-pointer"
              aria-label="Toggle menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isMobileMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border dark:border-gray-800 py-3 bg-white dark:bg-gray-950 animate-fade-in">
            {navLinks.map((link) => (
              <button key={link} onClick={() => handleNavClick(link)}
                className={`block w-full text-left px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer ${
                  activeSection === link
                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                    : 'text-body dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50/50 dark:hover:bg-gray-800/50'
                }`}>
                {t(`nav.${link}`)}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
