import { useLanguage } from '../hooks/useLanguage'

export default function Contact() {
  const { t } = useLanguage()

  const contactLinks = [
    { label: 'Email', value: t('contact.email'), href: `mailto:${t('contact.email')}`,
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" /></svg> },
    { label: 'Phone', value: t('contact.phone'), href: `tel:${t('contact.phone')}`,
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg> },
    { label: 'GitHub', value: 'Setthapong18', href: t('contact.github'),
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
    { label: 'Location', value: t('contact.address'), href: null,
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg> },
  ]

  return (
    <section id="contact" className="py-20 dark:bg-gray-950">
      <div className="section-container">
        <div className="mb-12 scroll-reveal">
          <span className="section-subtitle">{t('contact.label')}</span>
          <h2 className="section-title mt-2 dark:text-gray-100">{t('contact.title')}</h2>
          <div className="w-16 h-1 bg-primary-500 mt-4" />
        </div>

        <div className="max-w-3xl">
          <p className="text-lg text-body dark:text-gray-400 mb-10 leading-relaxed scroll-reveal">{t('contact.description')}</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {contactLinks.map((c, i) => {
              const W = c.href ? 'a' : 'div'
              const p = c.href
                ? { href: c.href, target: c.href.startsWith('http') ? '_blank' : undefined, rel: c.href.startsWith('http') ? 'noopener noreferrer' : undefined }
                : {}
              return (
                <W key={i} {...p}
                   className={`card flex items-center gap-4 scroll-reveal
                               dark:bg-gray-800 dark:border-gray-700
                               ${c.href ? 'hover:border-primary-400 dark:hover:border-primary-500' : ''}`}
                   style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="shrink-0 w-12 h-12 bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800 rounded-sm flex items-center justify-center text-primary-600 dark:text-primary-400">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted dark:text-gray-500 uppercase tracking-wider mb-0.5">{c.label}</div>
                    <div className="font-medium text-heading dark:text-gray-100">{c.value}</div>
                  </div>
                </W>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
