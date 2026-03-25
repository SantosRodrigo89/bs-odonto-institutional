type IconProps = {
  size?: number
  color?: string
}

export const BruxismoIcon = ({ size = 24, color = "#6B8E8E" }: IconProps) => (
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
    <path d="M20 10 C10 20, 10 40, 20 50 C25 55, 35 55, 40 50 C50 40, 50 20, 40 10 Z" />
    <path d="M28 30 L32 35 L36 30" />
  </svg>
)

