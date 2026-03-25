type IconProps = {
  size?: number
  color?: string
}

export const ExtracaoSisoIcon = ({ size = 24, color = "#6B8E8E" }: IconProps) => (
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
    <path d="M20 15 C10 25, 10 45, 20 50 C30 55, 40 55, 50 50 C60 40, 60 25, 50 15 Z" />
    <path d="M10 20 Q20 30 30 25" />
    <path d="M25 30 L30 35" />
  </svg>
)

