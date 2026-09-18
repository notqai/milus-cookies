// Circular text badge that slowly spins (still under reduced motion).
export default function RotatingBadge({ text, className = '' }) {
  return (
    <div role="img" aria-label={text.replaceAll('·', ',')} className={`relative grid place-items-center rounded-full bg-cream shadow-lift ${className}`}>
      <svg viewBox="0 0 100 100" aria-hidden="true" className="absolute inset-0 size-full motion-safe:animate-spin-slow">
        <defs>
          <path id="badge-circle" d="M50 50 m-35 0 a35 35 0 1 1 70 0 a35 35 0 1 1 -70 0" />
        </defs>
        <text className="fill-maroon font-display font-bold" fontSize="10.4" letterSpacing="0.5">
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <span aria-hidden="true" className="size-[26%] rounded-full bg-sun" />
    </div>
  )
}
