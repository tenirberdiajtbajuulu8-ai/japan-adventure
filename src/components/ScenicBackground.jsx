// Нарисованный SVG-пейзаж: рассвет, Фудзи, ворота тории, холмы.
// Не требует внешних картинок, поэтому всегда загружается.
export default function ScenicBackground({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2b1b5a" />
          <stop offset="55%" stopColor="#d4506b" />
          <stop offset="100%" stopColor="#ffb36b" />
        </linearGradient>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff1c9" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#fff1c9" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1600" height="900" fill="url(#sky)" />

      {/* солнце */}
      <circle cx="1130" cy="380" r="260" fill="url(#sunGlow)" />
      <circle cx="1130" cy="380" r="105" fill="#ff4d4d" />

      {/* облака */}
      <ellipse cx="300" cy="190" rx="170" ry="26" fill="#fff" opacity="0.22" />
      <ellipse cx="420" cy="215" rx="130" ry="20" fill="#fff" opacity="0.18" />
      <ellipse cx="1300" cy="150" rx="190" ry="24" fill="#fff" opacity="0.2" />
      <ellipse cx="780" cy="120" rx="140" ry="18" fill="#fff" opacity="0.16" />

      {/* Фудзи */}
      <polygon points="200,740 690,320 760,262 830,320 1320,740" fill="#3b4478" />
      <polygon points="760,262 830,320 800,336 775,314 750,340 722,316 690,320" fill="#f4f6ff" />

      {/* дальние холмы */}
      <path
        d="M0 730 Q200 630 420 710 T860 700 T1300 690 T1600 710 L1600 900 L0 900Z"
        fill="#2a2f5a"
        opacity="0.9"
      />

      {/* ворота тории */}
      <g fill="#c62828">
        <rect x="262" y="650" width="18" height="190" />
        <rect x="422" y="650" width="18" height="190" />
        <path d="M222 650 Q351 622 480 650 L472 668 L230 668Z" />
        <rect x="256" y="702" width="190" height="13" />
      </g>

      {/* передний холм */}
      <path
        d="M0 810 Q300 730 600 800 T1200 790 T1600 780 L1600 900 L0 900Z"
        fill="#141a38"
      />
    </svg>
  )
}
