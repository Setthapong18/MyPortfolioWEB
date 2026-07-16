import { useLanguage } from '../hooks/useLanguage'

const DevIcon = ({ name, type = 'original', className = "w-7 h-7", invertDark = false }) => (
  <img 
    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${type}.svg`} 
    alt={name} 
    className={`${className} ${invertDark ? 'dark:invert opacity-80 dark:opacity-100' : ''}`} 
    onError={(e) => {
      // Fallback if devicon doesn't have the icon
      e.target.style.display = 'none';
    }}
  />
)

const techIcons = {
  JavaScript: <DevIcon name="javascript" />,
  HTML5: <DevIcon name="html5" />,
  CSS: <DevIcon name="css3" />,
  Dart: <DevIcon name="dart" />,
  SQL: (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#4479A1">
      <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2zm6 12c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V17zm0-5c0 .5-2.13 2-6 2s-6-1.5-6-2V9.77C7.61 10.55 9.72 11 12 11s4.39-.45 6-1.23V12z"/>
    </svg>
  ),
  PHP: <DevIcon name="php" />,
  'React.js': <DevIcon name="react" />,
  'Tailwind CSS': <DevIcon name="tailwindcss" />,
  'Node.js': <DevIcon name="nodejs" />,
  'Express.js': <DevIcon name="express" invertDark={true} className="w-10 h-7 object-contain" />,
  Flutter: <DevIcon name="flutter" />,
  'SQL Server': <DevIcon name="microsoftsqlserver" />,
  MySQL: <DevIcon name="mysql" />,
  Firebase: <DevIcon name="firebase" />,
  Supabase: <DevIcon name="supabase" />,
  Git: <DevIcon name="git" />,
  GitHub: <DevIcon name="github" invertDark={true} />,
  Figma: <DevIcon name="figma" />,
  Postman: <DevIcon name="postman" />,
  'VS Code': <DevIcon name="vscode" />,
}

const skillData = {
  languages: ['JavaScript', 'HTML5', 'CSS', 'Dart', 'SQL', 'PHP'],
  frontend: ['React.js', 'Tailwind CSS'],
  backend: ['Node.js', 'Express.js'],
  mobile: ['Flutter'],
  database: ['SQL Server', 'MySQL', 'Firebase', 'Supabase'],
  tools: ['Git', 'GitHub', 'Figma', 'Postman', 'VS Code'],
}

const categoryMeta = {
  languages: { label: 'languages', color: 'from-amber-500 to-orange-500' },
  frontend: { label: 'frontend', color: 'from-cyan-500 to-blue-500' },
  backend: { label: 'backend', color: 'from-green-500 to-emerald-500' },
  mobile: { label: 'mobile', color: 'from-blue-500 to-indigo-500' },
  database: { label: 'database', color: 'from-red-500 to-pink-500' },
  tools: { label: 'tools', color: 'from-gray-500 to-slate-600' },
}

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-24 dark:bg-gray-950">
      <div className="section-container">
        <div className="section-header scroll-reveal">
          <span className="section-subtitle">{t('skills.label')}</span>
          <h2 className="section-title">{t('skills.title')}</h2>
          <div className="section-line mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skillData).map(([category, skills], i) => (
            <div
              key={category}
              className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-6 scroll-reveal
                         hover:shadow-lg hover:shadow-gray-100/80 dark:hover:shadow-gray-900/50 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
                <div className={`w-1.5 h-8 rounded-full bg-gradient-to-b ${categoryMeta[category].color}`} />
                <h3 className="font-bold text-heading dark:text-gray-100 text-sm uppercase tracking-wider">
                  {t(`skills.categories.${category}`)}
                </h3>
              </div>

              {/* Skills list */}
              <div className="grid grid-cols-2 gap-2.5">
                {skills.map((skillName) => (
                  <div
                    key={skillName}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-gray-50/80 dark:bg-gray-700/50
                               hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors duration-200 group/skill"
                  >
                    <span className="shrink-0 opacity-75 group-hover/skill:opacity-100 transition-opacity">
                      {techIcons[skillName]}
                    </span>
                    <span className="text-[13px] font-medium text-heading dark:text-gray-300 leading-tight">
                      {skillName}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
