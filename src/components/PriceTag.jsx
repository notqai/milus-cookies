// Kraft price tag with a punched hole, like the ones tied to a basket.
export default function PriceTag({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-lg bg-cream py-1 pl-2 pr-3 font-display text-base font-bold text-maroon ring-2 ring-maroon/80 sticker ${className}`}>
      <span aria-hidden="true" className="size-2 rounded-full bg-kraft ring-2 ring-maroon/80" />
      {children}
    </span>
  )
}
