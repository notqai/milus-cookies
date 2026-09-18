import Pic from './Pic.jsx'
import Todo from './Todo.jsx'
import Wave from './Wave.jsx'
import Button, { WhatsAppIcon, InstagramIcon } from './Button.jsx'
import { Highlighted } from './SectionHead.jsx'
import { copy, links, contact } from '../data/site.js'

function MapPinIcon({ className = 'size-5' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

// A kraft takeaway bag holding the where/when, with a sticker on top.
export default function FindUs() {
  const c = copy.findUs
  return (
    <section id="find-us" className="scroll-mt-16 bg-cream pt-10">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 pb-12 md:grid-cols-2 md:gap-14 md:pb-20">
        <div className="relative pt-5 drop-shadow-[0_18px_28px_rgba(42,15,15,0.25)]">
          <span className="sticker absolute left-1/2 top-0 z-10 -translate-x-1/2 -rotate-3 rounded-full bg-sun px-5 py-2 font-display text-lg font-bold text-cocoa">
            {c.sticker}
          </span>
          <div className="zigzag-top bg-kraft-paper rounded-b-[2rem] px-6 pb-8 pt-12 md:px-10 md:pb-10">
            <h2 className="font-serif-display text-4xl leading-[1.02] text-maroon md:text-5xl">
              <Highlighted text={c.heading} word={c.highlight} />
            </h2>
            <p className="mt-3 text-cocoa/80">{c.sub}</p>
            <dl className="mt-6 grid gap-5 border-t-2 border-dashed border-maroon/30 pt-6">
              <div>
                <dt className="font-display text-sm font-bold uppercase tracking-[0.18em] text-orange-deep">Where</dt>
                <dd className="mt-1 text-cocoa">
                  <Todo>{contact.address}</Todo>
                  {contact.mapsUrl && (
                    <a href={contact.mapsUrl} target="_blank" rel="noopener" className="mt-2 inline-flex items-center gap-1.5 rounded font-display font-semibold text-maroon underline decoration-sun decoration-4 underline-offset-4">
                      <MapPinIcon /> {c.ctaMaps}
                    </a>
                  )}
                </dd>
              </div>
              <div>
                <dt className="font-display text-sm font-bold uppercase tracking-[0.18em] text-orange-deep">When</dt>
                <dd className="mt-1">
                  <ul className="flex flex-col gap-1 text-cocoa">
                    {contact.hours.map((h) => (
                      <li key={h.days} className="flex justify-between gap-4">
                        <span>{h.days}</span>
                        <span><Todo>{h.time}</Todo></span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href={links.whatsapp()} target="_blank" rel="noopener" className="w-full sm:w-auto">
                <WhatsAppIcon /> {c.ctaWhatsapp}
              </Button>
              <Button href={links.instagram()} target="_blank" rel="noopener" variant="outline" className="w-full shadow-none sm:w-auto">
                <InstagramIcon /> {c.ctaInstagram}
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:pt-6">
          <Pic
            name={c.image}
            alt={c.imageAlt}
            sizes="(min-width: 768px) 45vw, 92vw"
            className="clip-blob-a aspect-[5/4] w-full object-cover"
          />
          {contact.mapEmbedUrl ? (
            <iframe title="Map to Milus Cookies" src={contact.mapEmbedUrl} loading="lazy" className="aspect-[5/3] w-full rounded-[1.75rem] border-0 shadow-lift" />
          ) : (
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener"
              className="grid aspect-[5/2] place-items-center rounded-[1.75rem] border-2 border-dashed border-maroon/40 text-center motion-safe:transition hover:bg-maroon/5"
            >
              <span className="inline-flex flex-col items-center gap-1 font-display font-semibold text-maroon">
                <MapPinIcon className="size-7 text-orange" />
                {c.ctaMaps}
                <span className="font-mono text-[11px] font-normal text-maroon/70">TODO: paste the embed URL into contact.mapEmbedUrl for an inline map</span>
              </span>
            </a>
          )}
        </div>
      </div>
      <Wave fill="fill-maroon" />
    </section>
  )
}
