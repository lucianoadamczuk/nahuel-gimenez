export default function IconArrow({ className }: { className: string }) {
  return (
    <svg
      className={className}
      data-testid="geist-icon"
      fill="none"
      height="24"
      shape-rendering="geometricPrecision"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M7 7l10 10" />
      <path d="M17 7v10H7" />
    </svg>
  );
}
