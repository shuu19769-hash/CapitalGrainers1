"use client";

import { motion, useReducedMotion } from "framer-motion";

const CHART_PATH =
  "M 24 220 C 60 200, 80 205, 110 175 S 170 140, 200 130 S 260 90, 290 70 S 330 45, 376 32";

const BARS = [
  { x: 48, h: 72, delay: 0.5 },
  { x: 88, h: 95, delay: 0.65 },
  { x: 128, h: 58, delay: 0.8 },
  { x: 168, h: 110, delay: 0.95 },
  { x: 208, h: 78, delay: 1.1 },
];

const FLOATING = [
  { label: "ROAS +24%", className: "left-[4%] top-[8%] max-sm:max-w-[42%]", delay: 0.9 },
  { label: "5M+ Sessions", className: "right-[3%] top-[20%] max-sm:max-w-[46%]", delay: 1.1 },
  { label: "SEO · Paid · AI", className: "left-[4%] bottom-[14%] max-sm:hidden", delay: 1.25 },
];

export function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto w-full min-w-0 max-w-lg aspect-[4/3] max-h-[min(72vw,320px)] sm:max-h-[360px] lg:max-h-none lg:max-w-none">
      {/* Ambient glow */}
      <motion.div
        className="absolute -inset-2 rounded-full bg-copper/10 blur-2xl sm:-inset-4 sm:blur-3xl"
        animate={reduce ? undefined : { opacity: [0.4, 0.7, 0.4], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 32, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full overflow-hidden border border-copper/25 bg-white shadow-[0_24px_60px_-20px_rgba(7,59,58,0.25)]"
      >
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(7,59,58,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(7,59,58,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />

        <svg viewBox="0 0 400 260" className="relative z-[1] h-full w-full" role="presentation">
          <defs>
            <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B87345" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#B87345" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="heroLine" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#073B3A" />
              <stop offset="100%" stopColor="#B87345" />
            </linearGradient>
          </defs>

          {/* Bars */}
          {BARS.map((bar) => (
            <motion.rect
              key={bar.x}
              x={bar.x}
              width={28}
              rx={2}
              fill="#E8E4DC"
              initial={reduce ? { y: 220 - bar.h, height: bar.h } : { y: 220, height: 0 }}
              animate={{ y: 220 - bar.h, height: bar.h }}
              transition={{ duration: 0.9, delay: bar.delay, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
          {BARS.map((bar) => (
            <motion.rect
              key={`${bar.x}-fill`}
              x={bar.x}
              width={28}
              rx={2}
              fill="#B87345"
              fillOpacity={0.55}
              initial={reduce ? { y: 220 - bar.h * 0.65, height: bar.h * 0.65 } : { y: 220, height: 0 }}
              animate={{ y: 220 - bar.h * 0.65, height: bar.h * 0.65 }}
              transition={{ duration: 1, delay: bar.delay + 0.1, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}

          {/* Area under curve */}
          <motion.path
            d={`${CHART_PATH} L 376 220 L 24 220 Z`}
            fill="url(#heroArea)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          />

          {/* Growth line */}
          <motion.path
            d={CHART_PATH}
            fill="none"
            stroke="url(#heroLine)"
            strokeWidth={3}
            strokeLinecap="round"
            initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.35, ease: "easeInOut" }}
          />

          {/* Data points */}
          {[
            [110, 175],
            [200, 130],
            [290, 70],
            [376, 32],
          ].map(([cx, cy], i) => (
            <motion.g key={i}>
              <motion.circle
                cx={cx}
                cy={cy}
                r={14}
                fill="#B87345"
                fillOpacity={0.15}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + i * 0.15, type: "spring", stiffness: 200 }}
              />
              <motion.circle
                cx={cx}
                cy={cy}
                r={5}
                fill="#B87345"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.85 + i * 0.15, type: "spring" }}
              />
            </motion.g>
          ))}
        </svg>

        {/* Floating metric pills */}
        {FLOATING.map((item) => (
          <motion.div
            key={item.label}
            className={`absolute z-[2] border border-sand bg-white/95 px-2 py-1.5 text-[0.65rem] font-semibold leading-tight text-teal shadow-sm backdrop-blur-sm sm:px-3 sm:py-2 sm:text-xs md:text-sm ${item.className}`}
            initial={reduce ? false : { opacity: 0, y: 16, scale: 0.9 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{ duration: 0.55, delay: item.delay, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              animate={reduce ? undefined : { y: [0, -5, 0] }}
              transition={{ duration: 4 + item.delay, repeat: Infinity, ease: "easeInOut" }}
              className="block"
            >
              {item.label}
            </motion.span>
          </motion.div>
        ))}

        {/* Scan line */}
        {!reduce && (
          <motion.div
            className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-px bg-gradient-to-r from-transparent via-copper/60 to-transparent"
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            aria-hidden
          />
        )}
      </motion.div>

      {/* Orbit accent */}
      <motion.div
        className="pointer-events-none absolute -right-1 -top-1 hidden h-16 w-16 border border-copper/50 sm:block md:h-24 md:w-24"
        animate={reduce ? undefined : { rotate: [0, 90, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
    </div>
  );
}
