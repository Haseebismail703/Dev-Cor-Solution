export function LogoSVG({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path d="M18 20L18 80L42 80C58 80 70 68 70 50C70 32 58 20 42 20Z M30 32L40 32C50 32 57 40 57 50C57 60 50 68 40 68L30 68Z" fill="white" />
      <path d="M88 35C82 27 73 22 63 22C47 22 38 34 38 50C38 66 47 78 63 78C73 78 82 73 88 65L78 60C75 65 69 68 63 68C53 68 50 60 50 50C50 40 53 32 63 32C69 32 75 35 78 40Z" fill="#38bdf8" />
    </svg>
  );
}
