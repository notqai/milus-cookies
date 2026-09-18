import Pic from './Pic.jsx'
import Todo from './Todo.jsx'
import Wave from './Wave.jsx'
import Button from './Button.jsx'
import { Sticker } from './SectionHead.jsx'
import { copy, links } from '../data/site.js'

// croissant + cookie = Crookie, spelled out as an equation.
export default function CrookieFeature() {
  const c = copy.crookie
  return (
    <section id="crookie" className="relative scroll-mt-16 bg-maroon text-warm">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-10 pt-8 md:grid-cols-2 md:gap-14 md:py-16">
        <div className="flex flex-col items-start gap-5">
          <Sticker tone="dark">{c.eyebrow}</Sticker>
          <h2 className="leading-[1.05]">
            <span className="block font-serif-display text-5xl font-medium italic text-warm/90 md:text-7xl">{c.words[0]}</span>
            <span className="block font-display text-5xl font-bold md:text-7xl">
              <span className="mr-3 text-sun">+</span>
              {c.words[1]}
            </span>
            <span className="mt-2 block font-serif-display text-6xl text-sun md:text-8xl">
              <span className="mr-3 font-display text-warm">=</span>
              {c.words[2]}
            </span>
          </h2>
          <p className="max-w-md text-lg text-warm/80">{c.sub}</p>
          <p className="text-sm text-warm/60">
            <Todo>{c.priceNote}</Todo>
          </p>
          <Button href={links.whatsapp(`Hi Milus! Is the Crookie (${c.price}) available today?`)} target="_blank" rel="noopener" variant="light">
            {c.cta}
          </Button>
        </div>
        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <Pic
            name={c.image}
            alt={c.imageAlt}
            sizes="(min-width: 768px) 45vw, 92vw"
            className="clip-blob-c aspect-square w-full object-cover"
          />
          <span className="sticker absolute left-2 top-2 -rotate-12 rounded-full bg-sun px-4 py-2 font-display text-2xl font-bold text-cocoa md:text-3xl">
            {c.price}
          </span>
        </div>
      </div>
      <Wave fill="fill-cream" />
    </section>
  )
}
