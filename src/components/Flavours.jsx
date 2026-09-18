import Pic from './Pic.jsx'
import Dot from './Dot.jsx'
import PriceTag from './PriceTag.jsx'
import SectionHead from './SectionHead.jsx'
import Wave from './Wave.jsx'
import { flavours, currency } from '../data/menu.js'
import { copy } from '../data/site.js'

// "The tray": round cookies on kraft paper inside a wicker rim, staggered
// like they were set down by hand.
export default function Flavours() {
  const c = copy.flavours
  return (
    <section id="flavours" className="relative scroll-mt-16 bg-kraft-paper pt-14 md:pt-24">
      <div aria-hidden="true" className="bg-wicker-weave absolute inset-x-0 top-0 h-3" />
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <SectionHead eyebrow={c.eyebrow} heading={c.heading} highlight={c.highlight} sub={c.sub} />
          <span aria-hidden="true" className="hidden font-serif-display text-8xl leading-none text-orange/70 md:block">
            {String(flavours.length).padStart(2, '0')}
          </span>
        </div>

        <ol className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 pb-20 md:grid-cols-4 md:gap-x-8" aria-label="Cookie flavours">
          {flavours.map((f, i) => (
            <li key={f.id} className={i % 2 ? 'translate-y-8 md:translate-y-12' : ''}>
              <article className="group flex flex-col items-start gap-3">
                <div className="relative w-full">
                  <Pic
                    name={f.image}
                    alt={f.imageAlt}
                    sizes="(min-width: 768px) 22vw, 45vw"
                    className="aspect-square w-full rounded-full border-[6px] border-cream object-cover shadow-lift motion-safe:transition motion-safe:duration-500 motion-safe:group-hover:-rotate-6 motion-safe:group-hover:scale-[1.03]"
                  />
                  {f.featured && (
                    <span className="sticker absolute -left-1 -top-2 -rotate-12 rounded-full bg-sun px-2.5 py-1 font-display text-xs font-bold text-cocoa">
                      ✦ {c.featuredLabel}
                    </span>
                  )}
                  <PriceTag className="absolute -bottom-3 right-1 rotate-6">
                    {currency}
                    {f.price}
                  </PriceTag>
                </div>
                <h3 className="mt-2 font-serif-display text-xl leading-tight text-maroon md:text-2xl">{f.name}</h3>
                <p className="text-sm leading-snug text-cocoa/80 md:text-base">{f.description}</p>
                {f.allergens?.includes('hazelnuts') && (
                  <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-maroon">
                    <Dot className="size-1.5" /> Contains hazelnuts
                  </p>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
