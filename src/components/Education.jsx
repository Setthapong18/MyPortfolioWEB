import { useLanguage } from '../hooks/useLanguage'

export default function Education() {
  const { t } = useLanguage()

  return (
    <section id="education" className="py-20 bg-surface-alt dark:bg-gray-900">
      <div className="section-container">
        <div className="mb-12 scroll-reveal">
          <span className="section-subtitle">{t('education.label')}</span>
          <h2 className="section-title mt-2 dark:text-gray-100">{t('education.title')}</h2>
          <div className="w-16 h-1 bg-primary-500 mt-4" />
        </div>

        <div className="card max-w-2xl scroll-reveal dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-start gap-5">
            <div className="shrink-0 w-14 h-14 bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800 rounded-sm flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 dark:text-primary-400">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-heading dark:text-gray-100 mb-1">{t('education.university')}</h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">{t('education.degree')}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted dark:text-gray-500">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span className="font-mono">{t('education.period')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted dark:text-gray-500">GPA:</span>
                  <span className="font-bold font-mono text-primary-600 dark:text-primary-400">{t('education.gpa')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
