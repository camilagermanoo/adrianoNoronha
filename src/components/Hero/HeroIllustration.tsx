import styles from './Hero.module.css'

export function HeroIllustration() {
  return (
    <svg
      className={styles.illustration}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b3d5c" />
          <stop offset="55%" stopColor="#14608a" />
          <stop offset="85%" stopColor="#f2a27a" />
          <stop offset="100%" stopColor="#f6c99a" />
        </linearGradient>
        <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1fb5a8" />
          <stop offset="100%" stopColor="#072a40" />
        </linearGradient>
        <linearGradient id="hill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2f6b4f" />
          <stop offset="100%" stopColor="#173d2e" />
        </linearGradient>
        <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#fff1d6" />
          <stop offset="60%" stopColor="#f6c99a" />
          <stop offset="100%" stopColor="#f2795b" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1440" height="900" fill="url(#sky)" />
      <circle cx="1080" cy="560" r="150" fill="url(#sun)" />

      <path
        d="M520 640 C 600 640 640 420 700 360 C 740 320 770 360 790 430 C 800 470 810 500 830 500 C 850 500 870 360 920 330 C 970 300 1000 420 1030 520 C 1050 590 1100 640 1180 640 Z"
        fill="url(#hill)"
      />
      <path d="M0 660 C 120 600 220 610 300 640 L 300 660 Z" fill="#173d2e" opacity="0.8" />

      <rect y="630" width="1440" height="270" fill="url(#sea)" />

      <g className={styles.waves} fill="none" stroke="#7fdcd1" strokeLinecap="round" opacity="0.5">
        <path d="M80 700 q 30 -10 60 0 t 60 0" strokeWidth="3" />
        <path d="M420 740 q 30 -10 60 0 t 60 0" strokeWidth="3" />
        <path d="M900 690 q 30 -10 60 0 t 60 0" strokeWidth="3" />
        <path d="M1200 760 q 30 -10 60 0 t 60 0" strokeWidth="3" />
        <path d="M640 800 q 30 -10 60 0 t 60 0" strokeWidth="3" />
      </g>

      <g
        className={styles.birds}
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <path d="M1000 200 q 12 -12 24 0 q 12 -12 24 0" />
        <path d="M1060 160 q 9 -9 18 0 q 9 -9 18 0" />
        <path d="M1180 260 q 10 -10 20 0 q 10 -10 20 0" />
      </g>
    </svg>
  )
}
