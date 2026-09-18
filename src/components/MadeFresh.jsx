import Pic from './Pic.jsx'
import SectionHead from './SectionHead.jsx'
import Wave from './Wave.jsx'
import { copy } from '../data/site.js'

// raw -> baked -> gooey as a dotted timeline of round tray shots.
export default function MadeFresh() {
  const c = copy.madeFresh
  return (
    <section aria-labelledby="fresh-heading" className="bg-cream pt-10 md:pt-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHead eyebrow={c.eyebrow} heading={c.heading} highlight={c.highlight} sub={c.sub} align="center" />
        <ol className="relative mt-12 grid grid-cols-3 gap-3 md:mt-16 md:gap-12">
          <svg aria-hidden="true" className="absolute inset-x-[16%] top-[27%] h-2 w-[68%] md:top-[31%]" viewBox="0 0 100 4" preserveAspectRatio="none">
            <path d="M0 2 H100" stroke="var(--color-maroon)" strokeWidth="2" strokeDasharray="1 3" strokeLinecap="round" fill="none" opacity="0.5" />
          </svg>
          {c.steps.map((s, i) => (
            <li key={s.label} className="relative flex flex-col items-center gap-2 text-center">
              <div className="relative w-full max-w-[220px]">
                <span className="absolute -left-1 -top-4 z-10 font-serif-display text-3xl text-orange md:-left-3 md:-top-6 md:text-5xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <Pic
                  name={s.image}
                  alt={s.alt}
                  aspect="1 / 1"
                  sizes="(min-width: 768px) 220px, 30vw"
                  className="aspect-square w-full rounded-full border-4 border-white object-cover shadow-lift"
                />
              </div>
              <p className="mt-2 font-display text-lg font-bold text-maroon md:text-2xl">{s.label}</p>
              <p className="text-xs text-cocoa/70 md:text-base">{s.caption}</p>
            </li>
          ))}
        </ol>
      </div>
      <Wave fill="fill-maroon" className="mt-10 md:mt-16" />
    </section>
  )
}
