import { useState, useEffect, useCallback } from 'react'
import { useLanguage } from '../hooks/useLanguage'

// ข้อมูล 4 ระบบ Bridgestone พร้อม screenshots
const BRIDGESTONE_SYSTEMS = [
  {
    id: 'itstock',
    name: 'IT Stock',
    desc: 'ระบบจัดการคลังอุปกรณ์ IT — Mat In/Out, ยืม-คืน, Balance Stock, Dashboard',
    color: 'from-blue-500 to-blue-700',
    screenshots: [
      { src: '/bridgestone/itstock-home.png', label: 'Home' },
      { src: '/bridgestone/itstock-in.png', label: 'Mat In' },
      { src: '/bridgestone/itstock-out.png', label: 'Mat Out' },
      { src: '/bridgestone/itstock-balance.png', label: 'Balance' },
    ],
  },
  {
    id: 'ip',
    name: 'IP Status Dashboard',
    desc: 'ตรวจสอบสถานะ Online/Offline ของอุปกรณ์ในระบบ Network แบบ Real-time',
    color: 'from-indigo-500 to-indigo-700',
    screenshots: [
      { src: '/bridgestone/ip-status.png', label: 'Dashboard' },
    ],
  },
  {
    id: 'disposal',
    name: 'Disposal System',
    desc: 'ระบบจัดการของเก่า/ชำรุด รองรับ Upload รูปภาพ, Export รายงาน',
    color: 'from-rose-500 to-rose-700',
    screenshots: [
      { src: '/bridgestone/disposal-home.png', label: 'Home' },
      { src: '/bridgestone/disposal-scan.png', label: 'Scan' },
    ],
  },
  {
    id: 'kkstock',
    name: 'KK Stock',
    desc: 'ระบบ Stock วัสดุสิ้นเปลือง Mat In/Out พร้อม Balance Report',
    color: 'from-emerald-500 to-emerald-700',
    screenshots: [
      { src: '/bridgestone/kkstock-home.png', label: 'Home' },
      { src: '/bridgestone/kkstock-balance.png', label: 'Balance' },
    ],
  },
]

/* ── Lightbox Modal ── */
function Lightbox({ images, startIndex, onClose }) {
  const [idx, setIdx] = useState(startIndex)

  const prev = useCallback(() => setIdx(i => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setIdx(i => (i + 1) % images.length), [images.length])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
      style={{ animation: 'fadeIn 0.2s ease' }}
    >
      {/* Image container */}
      <div
        className="relative max-w-5xl w-full mx-4 rounded-xl overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-gray-900/90 backdrop-blur">
          <span className="text-white/70 text-sm font-medium">
            {images[idx].label} <span className="text-white/40 ml-2">{idx + 1} / {images.length}</span>
          </span>
          <button onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Image */}
        <img key={idx} src={images[idx].src} alt={images[idx].label}
             className="w-full max-h-[80vh] object-contain bg-gray-950"
             style={{ animation: 'fadeIn 0.25s ease' }} />

        {/* Prev / Next (only if multiple) */}
        {images.length > 1 && (
          <>
            <button onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70
                         text-white flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15,18 9,12 15,6" />
              </svg>
            </button>
            <button onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70
                         text-white flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9,18 15,12 9,6" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  )
}

/* ── System Gallery Card ── */
function SystemGallery({ system }) {
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(null) // null | startIndex

  return (
    <div className="rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700
                    bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Header strip */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${system.color}`} />

      <div className="p-4">
        {/* System name */}
        <div className="flex items-center gap-2.5 mb-3">
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${system.color}
                          flex items-center justify-center flex-shrink-0`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white"
                 strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-sm text-heading dark:text-gray-100">{system.name}</h4>
            <p className="text-xs text-muted dark:text-gray-500 leading-snug mt-0.5">{system.desc}</p>
          </div>
        </div>

        {/* Screenshot viewer */}
        <div className="relative rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900
                        border border-gray-100 dark:border-gray-700">
          {/* Browser bar mockup */}
          <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            <div className="ml-2 flex-1 bg-white dark:bg-gray-700 rounded text-[10px]
                            text-gray-400 dark:text-gray-500 px-2 py-0.5 font-mono truncate">
              thai-bridgestone.internal
            </div>
          </div>

          {/* Screenshot image — click to expand */}
          <div className="aspect-video overflow-hidden relative group/img">
            <img
              key={active}
              src={system.screenshots[active].src}
              alt={`${system.name} - ${system.screenshots[active].label}`}
              className="w-full h-full object-cover object-top transition-opacity duration-300 cursor-zoom-in"
              style={{ animation: 'fadeIn 0.3s ease' }}
              onClick={() => setLightbox(active)}
            />
            {/* Expand hint */}
            <div className="absolute inset-0 flex items-center justify-center
                            opacity-0 group-hover/img:opacity-100 transition-opacity duration-200
                            bg-black/20 pointer-events-none">
              <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
                <span className="text-white text-xs font-medium">ขยาย</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <Lightbox
            images={system.screenshots}
            startIndex={lightbox}
            onClose={() => setLightbox(null)}
          />
        )}

        {/* Tab buttons (only if multiple screenshots) */}
        {system.screenshots.length > 1 && (
          <div className="flex gap-1.5 mt-3 flex-wrap">
            {system.screenshots.map((shot, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all duration-150 cursor-pointer ${
                  active === i
                    ? `bg-gradient-to-r ${system.color} text-white shadow-sm`
                    : 'bg-gray-100 dark:bg-gray-700 text-muted dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {shot.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Experience() {
  const { t } = useLanguage()
  const items = t('experience.items')
  if (!Array.isArray(items)) return null

  return (
    <section id="experience" className="py-20 bg-surface-alt dark:bg-gray-900">
      <div className="section-container">
        <div className="mb-12 scroll-reveal">
          <span className="section-subtitle">{t('experience.label')}</span>
          <h2 className="section-title mt-2 dark:text-gray-100">{t('experience.title')}</h2>
          <div className="w-16 h-1 bg-primary-500 mt-4" />
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-primary-200 dark:bg-primary-900" />

          {items.map((item, i) => (
            <div key={i} className="relative pl-8 md:pl-20 pb-12 last:pb-0 scroll-reveal">
              <div className="absolute left-0 md:left-8 top-1 -translate-x-1/2 w-4 h-4
                              bg-primary-500 border-4 border-surface-alt dark:border-gray-900 rounded-full z-10" />

              <div className="hidden md:block absolute left-0 top-0 -translate-x-1 font-mono text-xs text-primary-500 dark:text-primary-400 font-bold">
                {item.period}
              </div>

              {/* Experience card */}
              <div className="card dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-heading dark:text-gray-100">{item.role}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">{item.company}</p>
                  </div>
                  <span className="md:hidden font-mono text-xs text-primary-500 bg-primary-50 dark:bg-primary-900/30 dark:text-primary-400 px-2 py-1 rounded-sm font-bold">
                    {item.period}
                  </span>
                </div>

                <ul className="space-y-2 mb-5">
                  {item.description.map((desc, j) => (
                    <li key={j} className="flex gap-3 text-body dark:text-gray-400">
                      <span className="text-primary-400 mt-1.5 shrink-0">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tools.map((tool) => (
                    <span key={tool} className="tag dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">{tool}</span>
                  ))}
                </div>

                {/* ── Bridgestone Systems Gallery ── */}
                <div className="border-t border-border/50 dark:border-gray-700 pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-5 bg-primary-500 rounded-full" />
                    <h4 className="font-bold text-sm text-heading dark:text-gray-100 uppercase tracking-wider">
                      Systems Developed
                    </h4>
                    <span className="text-xs font-mono text-muted dark:text-gray-500 ml-auto">4 internal apps</span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {BRIDGESTONE_SYSTEMS.map((sys) => (
                      <SystemGallery key={sys.id} system={sys} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
