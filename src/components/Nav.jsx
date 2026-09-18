import { Link } from 'react-router-dom'
import Wordmark from './Wordmark.jsx'
import Button, { WhatsAppIcon } from './Button.jsx'
import { nav, links, copy } from '../data/site.js'

// Top bar: the logo as an orange sticker on cream. Section links live here
// on desktop and in the bottom Dock on phones.
export default function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-cream/85 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5">
        <Link to="/" aria-label="Milus Cookies home" className="rounded-2xl">
          <span className="sticker inline-block -rotate-2 rounded-2xl bg-orange px-3 py-1.5 motion-safe:transition motion-safe:hover:rotate-0">
            <Wordmark className="text-2xl md:text-3xl" />
          </span>
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="rounded-full px-4 py-2 font-display text-lg font-semibold text-maroon motion-safe:transition hover:bg-maroon/10">
                {item.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <Button href={links.whatsapp()} target="_blank" rel="noopener" size="sm">
              <WhatsAppIcon /> {copy.hero.primary}
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
