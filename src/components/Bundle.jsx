import Pic from './Pic.jsx'
import Todo from './Todo.jsx'
import Button, { WhatsAppIcon } from './Button.jsx'
import Wave from './Wave.jsx'
import { bundle, currency } from '../data/menu.js'
import { copy, links } from '../data/site.js'

// "4 for RM30" as one big orange blob sticker slapped on the tray.
export default function Bundle() {
  const c = copy.bundle
  return (
    <section aria-labelledby="bundle-heading" className="overflow-hidden bg-kraft-paper px-4 pb-4 pt-6 md:pt-10">
      <div className="mx-auto max-w-5xl">
        {/* The blob sits behind the content and overshoots it, so nothing gets clipped. */}
        <div className="relative grid items-center gap-6 px-4 py-12 text-center md:grid-cols-[1.2fr_1fr] md:px-16 md:py-20 md:text-left">
          <div aria-hidden="true" className="clip-blob-b absolute -inset-x-10 -inset-y-6 -z-0 bg-orange md:-inset-x-16 md:-inset-y-10" />
          <div className="relative flex flex-col items-center gap-3 md:items-start">
            <p className="font-display text-lg font-semibold text-cocoa">{c.kicker}</p>
            <h2 id="bundle-heading" className="font-display font-bold leading-none text-white">
              <span className="text-8xl md:text-[10rem]">{bundle.size}</span>
              <span className="mx-2 font-serif-display text-3xl italic text-cocoa md:text-5xl">{c.mid}</span>
              <span className="text-6xl md:text-8xl">
                {currency}
                {bundle.price}
              </span>
            </h2>
            <p className="max-w-sm text-cocoa">{c.sub}</p>
            <p className="text-sm text-cocoa">
              <Todo>{c.note}</Todo>
            </p>
            <Button href={links.whatsapp()} target="_blank" rel="noopener" variant="light" size="lg" className="mt-2">
              <WhatsAppIcon className="size-6" /> {c.cta}
            </Button>
          </div>
          <div className="relative mx-auto w-3/4 max-w-xs md:w-full md:max-w-none">
            <Pic
              name={c.image}
              alt={c.imageAlt}
              sizes="(min-width: 768px) 30vw, 60vw"
              className="clip-bite aspect-square w-full object-cover"
            />
          </div>
        </div>
      </div>
      <Wave fill="fill-cream" className="mt-6" />
    </section>
  )
}
