interface SectionBadgeProps {
  number: string // e.g. "01"
}

/**
 * Subtle section-journey number shown in the top-left of major sections.
 * Purely decorative — tells the user where they are in the page story.
 */
export default function SectionBadge({ number }: SectionBadgeProps) {
  return (
    <span
      className="mb-8 inline-block select-none font-mono text-[11px] font-semibold uppercase tracking-[0.22em] opacity-30"
      aria-hidden="true"
    >
      {number} ——
    </span>
  )
}
