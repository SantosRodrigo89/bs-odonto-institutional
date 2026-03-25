type IconProps = {
  size?: number
  color?: string
}

export const OrtodontiaIcon = ({ size = 24, color = "#6B8E8E" }: IconProps) => (
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
    <rect x="10" y="20" width="12" height="20" rx="6" />
    <rect x="26" y="20" width="12" height="20" rx="6" />
    <rect x="42" y="20" width="12" height="20" rx="6" />
    <line x1="10" y1="30" x2="54" y2="30" />
  </svg>
)

