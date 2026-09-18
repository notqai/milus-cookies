import { WhatsAppIcon } from './Button.jsx'
import { nav, links, copy } from '../data/site.js'

// Floating thumb-zone dock on phones: section links + the order button.
export default function Dock() {
  return (
    <nav aria-label="Quick links" className="pb-safe fixed inset-x-3 bottom-3 z-40 md:hidden">
      <div className="flex items-center justify-between gap-1 rounded-full bg-maroon p-1.5 pl-3 shadow-lift">
        {nav.map((item) => (
          <a key={item.href} href={item.href} className="rounded-full px-2 py-2 font-display text-sm font-semibold text-warm">
            {item.label}
          </a>
        ))}
        <a
          href={links.whatsapp()}
          target="_blank"
          rel="noopener"
          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-orange px-4 font-display text-base font-bold text-cocoa motion-safe:transition motion-safe:active:scale-95"
        >
          <WhatsAppIcon className="size-5" /> {copy.dock.label}
        </a>
      </div>
    </nav>
  )
}
