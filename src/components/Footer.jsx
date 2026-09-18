import Wordmark from './Wordmark.jsx'
import Todo from './Todo.jsx'
import { InstagramIcon, WhatsAppIcon } from './Button.jsx'
import { nav, links, copy, contact } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="bg-maroon text-warm">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-12 md:pt-16">
        <p className="font-serif-display text-5xl italic text-sun md:text-7xl">{copy.footer.signoff}</p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div>
            <span className="sticker inline-block -rotate-2 rounded-2xl bg-orange px-3 py-1.5">
              <Wordmark className="text-3xl" />
            </span>
            <p className="mt-4 max-w-xs text-warm/80">{copy.footer.blurb}</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-col gap-2 font-display text-lg font-semibold">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="rounded hover:text-sun">{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-3">
            <a href={links.whatsapp()} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded hover:text-sun">
              <WhatsAppIcon /> WhatsApp {!contact.whatsappNumber && <Todo>TODO: number</Todo>}
            </a>
            <a href={links.instagram()} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded hover:text-sun">
              <InstagramIcon /> @{contact.instagramHandle}
            </a>
          </div>
        </div>
      </div>
      <div className="bg-wicker-weave h-2" aria-hidden="true" />
      <p className="px-4 py-4 text-center text-sm text-warm/70">{copy.footer.credit}</p>
    </footer>
  )
}
