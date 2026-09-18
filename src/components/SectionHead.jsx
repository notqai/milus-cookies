// Sticker eyebrow + serif heading with a yellow squiggle under one word.
// tone: 'light' (cream/kraft) | 'dark' (maroon)
export default function SectionHead({ eyebrow, heading, highlight, sub, tone = 'light', align = 'left', className = '' }) {
  const headingColor = tone === 'dark' ? 'text-warm' : 'text-maroon'
  const subColor = tone === 'dark' ? 'text-warm/80' : 'text-cocoa/75'
  const alignCls = align === 'center' ? 'items-center text-center' : 'items-start'
  return (
    <div className={`flex flex-col gap-3 ${alignCls} ${className}`}>
      {eyebrow && <Sticker tone={tone}>{eyebrow}</Sticker>}
      <h2 className={`font-serif-display text-4xl leading-[1.02] md:text-6xl ${headingColor}`}>
        <Highlighted text={heading} word={highlight} />
      </h2>
      {sub && <p className={`max-w-prose text-base md:text-lg ${subColor}`}>{sub}</p>}
    </div>
  )
}

export function Sticker({ children, tone = 'light', rotate = '-rotate-3', className = '' }) {
  const look = tone === 'dark' ? 'border-sun text-sun' : 'border-maroon text-maroon bg-cream'
  return (
    <span className={`inline-block rounded-full border-2 px-3 py-1 font-display text-sm font-bold uppercase tracking-wider ${look} ${rotate} ${className}`}>
      {children}
    </span>
  )
}

export function Highlighted({ text, word }) {
  if (!word || !text.includes(word)) return text
  const [before, after] = text.split(word)
  return (
    <>
      {before}
      <span className="relative inline-block whitespace-nowrap">
        {word}
        <svg aria-hidden="true" viewBox="0 0 100 10" preserveAspectRatio="none" className="absolute -bottom-1 left-0 h-[0.18em] w-full">
          <path d="M1 6 Q 13 1 25 6 T 50 6 T 75 6 T 99 6" fill="none" stroke="var(--color-sun)" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </span>
      {after}
    </>
  )
}
