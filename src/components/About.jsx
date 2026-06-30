import { useLanguage } from '../hooks/useLanguage'

export default function About() {
  const { t } = useLanguage()

  const stats = [
    { value: '4+', label: 'Apps Built at Bridgestone' },
    { value: '5+', label: 'Projects Completed' },
    { value: '3.16', label: 'GPA' },
  ]

  return (
    <section id="about" className="py-20 bg-surface-alt dark:bg-gray-900">
      <div className="section-container">
        <div className="mb-12 scroll-reveal">
          <span className="section-subtitle">{t('about.label')}</span>
          <h2 className="section-title mt-2 dark:text-gray-100">{t('about.title')}</h2>
          <div className="w-16 h-1 bg-primary-500 mt-4" />
        </div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start">
          <div className="space-y-5 scroll-reveal">
            <p className="text-lg leading-relaxed text-body dark:text-gray-400">{t('about.p1')}</p>
            <p className="text-lg leading-relaxed text-body dark:text-gray-400">{t('about.p2')}</p>
            <p className="text-lg leading-relaxed text-body dark:text-gray-400">{t('about.p3')}</p>
          </div>

          <div className="flex lg:flex-col gap-4 scroll-reveal-right">
            {stats.map((stat, i) => (
              <div key={i} className="card flex-1 lg:w-48 text-center hover:border-primary-400
                                     dark:bg-gray-800 dark:border-gray-700 dark:hover:border-primary-500">
                <div className="text-3xl font-black text-primary-600 dark:text-primary-400 font-mono mb-1">{stat.value}</div>
                <div className="text-xs text-muted dark:text-gray-500 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
