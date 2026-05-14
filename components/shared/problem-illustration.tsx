/**
 * Extracted from problem-solution-section.tsx.
 * Pure presentational component — no state, no effects.
 */
export default function ProblemIllustration() {
  return (
    <svg
      viewBox="0 0 480 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Circular bottle ecosystem illustration"
      className="h-full w-full"
    >
      <circle cx="240" cy="240" r="220" fill="#1a2e24" />
      <circle cx="240" cy="240" r="170" stroke="#2a7a4f" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.5" />
      <path d="M 240 70 A 170 170 0 0 1 410 240" stroke="hsl(156 61% 28%)" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M 410 240 A 170 170 0 0 1 155 385" stroke="hsl(156 61% 38%)" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M 155 385 A 170 170 0 0 1 240 70" stroke="hsl(48 100% 65%)" strokeWidth="3" strokeLinecap="round" fill="none" />
      <polygon points="420,230 405,248 395,228" fill="hsl(156 61% 28%)" />
      <polygon points="145,393 162,380 168,402" fill="hsl(156 61% 38%)" />
      <polygon points="248,62 232,62 238,80" fill="hsl(48 100% 65%)" />
      <rect x="218" y="175" width="44" height="8" rx="4" fill="hsl(156 61% 28%)" />
      <rect x="222" y="183" width="36" height="100" rx="12" fill="hsl(156 61% 38%)" opacity="0.9" />
      <rect x="226" y="283" width="28" height="22" rx="6" fill="hsl(156 61% 28%)" />
      <rect x="228" y="168" width="24" height="9" rx="4" fill="hsl(156 61% 28%)" />
      <rect x="228" y="192" width="6" height="50" rx="3" fill="white" opacity="0.18" />
      <circle cx="240" cy="70" r="12" fill="hsl(48 100% 65%)" opacity="0.9" />
      <circle cx="410" cy="240" r="12" fill="hsl(156 61% 28%)" opacity="0.9" />
      <circle cx="155" cy="385" r="12" fill="hsl(156 61% 38%)" opacity="0.9" />
      <text x="240" y="47" textAnchor="middle" fill="white" fontSize="11" fontWeight="600" opacity="0.8">BUY</text>
      <text x="436" y="244" textAnchor="start" fill="white" fontSize="11" fontWeight="600" opacity="0.8">RETURN</text>
      <text x="118" y="408" textAnchor="middle" fill="white" fontSize="11" fontWeight="600" opacity="0.8">EARN</text>
      <ellipse cx="335" cy="140" rx="18" ry="8" fill="hsl(156 61% 38%)" opacity="0.3" transform="rotate(-40 335 140)" />
      <ellipse cx="148" cy="180" rx="14" ry="6" fill="hsl(48 100% 65%)" opacity="0.25" transform="rotate(30 148 180)" />
    </svg>
  )
}
