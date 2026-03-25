type IconProps = {
  size?: number
  color?: string
}

export const EsteticaIcon = ({ size = 24, color = "#6B8E8E" }: IconProps) => (
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
    <path d="M20 10 C10 20, 10 40, 20 50 C30 55, 40 55, 50 50 C60 40, 60 20, 50 10 Z" />
    <path d="M45 15 L48 18 M48 15 L45 18" />
  </svg>
)

