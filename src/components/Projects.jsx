import { useLanguage } from '../hooks/useLanguage'

// Shield icon for KidGuard
function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

// External link icon
function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

// GitHub icon
function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function KidGuardCard({ project, t }) {
  return (
    <div className="md:col-span-2 scroll-reveal group relative overflow-hidden
                    rounded-xl border border-primary-100 dark:border-primary-900/50
                    bg-gradient-to-br from-white via-primary-50/30 to-white
                    dark:from-gray-800 dark:via-primary-950/30 dark:to-gray-800
                    shadow-sm hover:shadow-xl hover:shadow-primary-100/40
                    dark:hover:shadow-primary-900/30 transition-all duration-500">

      {/* Top gradient stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400" />

      <div className="p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left — info */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-start gap-4 mb-5">
              {/* App icon */}
              <div className="shrink-0 w-14 h-14 rounded-2xl overflow-hidden shadow-lg shadow-primary-200 dark:shadow-primary-900/50">
                <img src="/kidguard-logo.png" alt="KidGuard Logo"
                     className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-2xl font-black text-heading dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold
                                   bg-primary-600 text-white shadow-sm">
                    ✦ {project.badge}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-2 py-0.5 rounded-sm border border-primary-100 dark:border-primary-800">
                    {project.type}
                  </span>
                  <span className="text-xs font-mono text-muted dark:text-gray-500">{project.period}</span>
                </div>
              </div>
            </div>

            <p className="text-body dark:text-gray-400 mb-5 leading-relaxed">{project.description}</p>

            {/* Highlights */}
            <ul className="space-y-2 mb-6">
              {project.highlights.map((h, j) => (
                <li key={j} className="flex items-center gap-2.5 text-sm text-body dark:text-gray-400">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary-500 shrink-0">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                  {h}
                </li>
              ))}
            </ul>

            {/* Tools */}
            <div className="flex flex-wrap gap-2 pb-6 border-b border-border/40 dark:border-gray-700 mb-6">
              {project.tools.map((tool) => (
                <span key={tool} className="tag dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">{tool}</span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              {/* Live Demo / Website */}
              <a href={project.website}
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 px-5 py-2.5
                            bg-primary-600 hover:bg-primary-700 text-white
                            text-sm font-semibold rounded-lg shadow-md shadow-primary-200/50
                            dark:shadow-primary-900/30 transition-all duration-200 hover:shadow-lg
                            active:scale-[0.98] cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
                {t('projects.liveDemo')}
                <ExternalIcon />
              </a>

              {/* GitHub */}
              <a href={project.github}
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 px-5 py-2.5
                            border-2 border-gray-200 dark:border-gray-600
                            text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800
                            hover:border-primary-400 dark:hover:border-primary-500
                            hover:text-primary-600 dark:hover:text-primary-400
                            text-sm font-semibold rounded-lg transition-all duration-200
                            active:scale-[0.98] cursor-pointer">
                <GithubIcon />
                {t('projects.viewCode')}
              </a>
            </div>
          </div>

          {/* Right — visual panel */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="h-full min-h-40 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800
                            dark:from-primary-800 dark:to-primary-950
                            flex flex-col items-center justify-center gap-4 p-6 text-white
                            shadow-inner relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }} />
              {/* App icon large */}
              <div className="relative w-24 h-24 rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20">
                <img src="/kidguard-logo.png" alt="KidGuard"
                     className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <div className="font-black text-lg tracking-wide">KidGuard</div>
                <div className="text-xs text-primary-100 mt-1">Parental Control App</div>
              </div>
              {/* Visit site link */}
              <a href={project.website} target="_blank" rel="noopener noreferrer"
                 className="relative flex items-center gap-1.5 text-xs font-medium text-white/80
                            hover:text-white border border-white/30 hover:border-white/60
                            px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer">
                Visit Site <ExternalIcon />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

function DefaultProjectCard({ project, i, t }) {
  return (
    <div className="card group scroll-reveal dark:bg-gray-800 dark:border-gray-700"
         style={{ transitionDelay: `${i * 0.1}s` }}>
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-xl font-bold text-heading dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {project.title}
            </h3>
            {project.badge && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold
                               bg-amber-500 text-white shadow-sm shrink-0">
                {project.badge}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-2 py-0.5 rounded-sm border border-primary-100 dark:border-primary-800">
              {project.type}
            </span>
            <span className="text-xs font-mono text-muted dark:text-gray-500">{project.period}</span>
          </div>
        </div>
        <a href={project.github} target="_blank" rel="noopener noreferrer"
           className="shrink-0 p-2 text-muted dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700 rounded-sm transition-all duration-200 cursor-pointer"
           aria-label={`View ${project.title} on GitHub`}>
          <GithubIcon />
        </a>
      </div>

      <p className="text-body dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>

      <ul className="space-y-1.5 mb-5">
        {project.highlights.map((h, j) => (
          <li key={j} className="flex items-center gap-2 text-sm text-body dark:text-gray-400">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-500 shrink-0">
              <polyline points="20,6 9,17 4,12" />
            </svg>
            {h}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50 dark:border-gray-700">
        {project.tools.map((tool) => (
          <span key={tool} className="tag dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">{tool}</span>
        ))}
      </div>

      {(project.website || project.demo) && (
        <div className="mt-4 pt-4 border-t border-border/50 dark:border-gray-700 flex flex-wrap gap-3">
          {project.website && (
            <a href={project.website} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-1.5 text-sm text-primary-600 dark:text-primary-400 font-medium hover:underline cursor-pointer">
              {t('projects.liveDemo')} <ExternalIcon />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-1.5 text-sm text-amber-600 dark:text-amber-400 font-medium hover:underline cursor-pointer">
              🎬 View Demo <ExternalIcon />
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  const { t } = useLanguage()
  const items = t('projects.items')
  if (!Array.isArray(items)) return null

  return (
    <section id="projects" className="py-20 dark:bg-gray-950">
      <div className="section-container">
        <div className="mb-12 scroll-reveal">
          <span className="section-subtitle">{t('projects.label')}</span>
          <h2 className="section-title mt-2 dark:text-gray-100">{t('projects.title')}</h2>
          <div className="w-16 h-1 bg-primary-500 mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((project, i) =>
            project.website && i === 0
              ? <KidGuardCard key={i} project={project} t={t} />
              : <DefaultProjectCard key={i} project={project} i={i} t={t} />
          )}
        </div>
      </div>
    </section>
  )
}
