type IconProps = {
  size?: number
  color?: string
}

export const DtmIcon = ({ size = 24, color = "#6B8E8E" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ color }}
    aria-hidden="true"
    focusable="false"
  >
    <path d="M20 15 C10 25, 10 45, 20 50 C30 55, 45 50, 50 40 C55 30, 45 15, 30 15 Z" />
    <path d="M35 20 A10 10 0 0 1 45 30" />
    <path d="M38 15 L42 10" />
  </svg>
)

