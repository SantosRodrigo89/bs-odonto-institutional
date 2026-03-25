type IconProps = {
  size?: number
  color?: string
}

export const ImplantIcon = ({ size = 24, color = "#6B8E8E" }: IconProps) => (
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
    <path d="M20 10 C15 10, 10 20, 20 30 C25 35, 35 35, 40 30 C50 20, 45 10, 40 10 Z" />
    <line x1="30" y1="30" x2="30" y2="50" />
    <line x1="25" y1="35" x2="35" y2="35" />
    <line x1="25" y1="40" x2="35" y2="40" />
    <line x1="25" y1="45" x2="35" y2="45" />
  </svg>
)

