import Wordmark from './Wordmark.jsx'
import Pic from './Pic.jsx'
import Todo from './Todo.jsx'
import RotatingBadge from './RotatingBadge.jsx'
import Button, { WhatsAppIcon } from './Button.jsx'
import { copy, links, brand } from '../data/site.js'

export default function Hero() {
  const h = copy.hero
  return (
    <section className="relative overflow-hidden bg-cream">
      <Crumbs />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-6 md:grid-cols-2 md:items-center md:gap-8 md:pb-24 md:pt-12">
        {/* Logo blob + bitten cookie + spinning badge */}
        <div className="relative mx-auto w-full max-w-md md:order-2 md:max-w-none">
          <div className="clip-blob-a grid aspect-[5/4] w-[92%] place-items-center bg-orange">
            <h1 className="-translate-y-4 -rotate-3 leading-none">
              <Wordmark className="text-[clamp(4rem,19vw,8.5rem)]" />
            </h1>
          </div>
          <div className="absolute -bottom-8 right-0 w-[56%] motion-safe:animate-float">
            <Pic
              name={h.image}
              alt={h.imageAlt}
              priority
              sizes="(min-width: 768px) 28vw, 52vw"
              className="clip-bite aspect-square w-full object-cover"
            />
          </div>
          <RotatingBadge text={h.badge} className="absolute -left-1 bottom-2 size-28 md:size-36" />
        </div>

        <div className="flex flex-col items-start gap-5 md:order-1">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-maroon">
            {brand.name} · <Todo>{brand.location}</Todo>
          </p>
          <p className="text-5xl leading-[0.95] md:text-7xl">
            <span className="block font-display font-bold text-maroon">{h.headlineA}</span>
            <span className="block font-serif-display font-medium italic text-orange">{h.headlineB}</span>
          </p>
          <p className="max-w-md text-lg text-cocoa/80">{h.sub}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Button href={links.whatsapp()} target="_blank" rel="noopener" size="lg">
              <WhatsAppIcon className="size-6" /> {h.primary}
            </Button>
            <a href="#flavours" className="group inline-flex items-center gap-2 rounded-full font-display text-lg font-semibold text-maroon underline decoration-sun decoration-4 underline-offset-4">
              {h.secondary}
              <span aria-hidden="true" className="motion-safe:transition motion-safe:group-hover:translate-y-0.5">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Scattered chocolate-chip "crumbs" and yellow dots. Decorative.
function Crumbs() {
  const crumbs = [
    ['left-[6%] top-[8%]', 'bg-maroon', 'size-2.5 rotate-12'],
    ['left-[14%] top-[30%]', 'bg-sun', 'size-2'],
    ['right-[8%] top-[6%]', 'bg-maroon', 'size-3 rounded-[40%] -rotate-12'],
    ['right-[22%] bottom-[10%]', 'bg-sun', 'size-2.5'],
    ['left-[45%] bottom-[6%]', 'bg-maroon', 'size-2 rotate-45'],
    ['right-[40%] top-[14%]', 'bg-maroon', 'size-1.5'],
  ]
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {crumbs.map(([pos, color, size], i) => (
        <span key={i} className={`absolute rounded-full opacity-80 ${pos} ${color} ${size}`} />
      ))}
    </div>
  )
}
