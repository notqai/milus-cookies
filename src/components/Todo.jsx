// Visible placeholder for an unknown fact. Searchable as "TODO:" in src/data.
// Once the real value is filled in (no "TODO" in the text) it renders as
// plain text, so nothing needs to change in the components.
export default function Todo({ children }) {
  const text = typeof children === 'string' ? children : ''
  if (text && !text.includes('TODO')) return <>{children}</>
  return (
    <span
      title="Placeholder: replace in src/data/site.js"
      className="rounded-md border border-dashed border-maroon/60 bg-cream px-1.5 py-0.5 font-mono text-[0.8em] text-maroon"
    >
      {children}
    </span>
  )
}
