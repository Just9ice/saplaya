"use client";
import Image from "next/image";
import {
  motion,
  useAnimationControls,
  type AnimationDefinition,
} from "framer-motion";
import { Reveal } from "@/components/reveal";

/* ── Custom thin-line SVG icons ────────────────────────────────────────────── */
const s = "1.5"; // stroke width shared across all icons

const Icons = {
  Pool: () => (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={s}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-9 w-9"
    >
      <path d="M8 26c2.5-2 5-2 7.5 0s5 2 7.5 0 5-2 7.5 0" />
      <path d="M8 31c2.5-2 5-2 7.5 0s5 2 7.5 0 5-2 7.5 0" />
      <path d="M18 10v10M22 10v10" />
      <path d="M15 10h10" />
      <circle cx="20" cy="7" r="2.5" />
    </svg>
  ),
  Gym: () => (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={s}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-9 w-9"
    >
      <rect x="5" y="17" width="5" height="6" rx="1.5" />
      <rect x="30" y="17" width="5" height="6" rx="1.5" />
      <rect x="10" y="14" width="5" height="12" rx="1.5" />
      <rect x="25" y="14" width="5" height="12" rx="1.5" />
      <line x1="15" y1="20" x2="25" y2="20" />
    </svg>
  ),
  Padel: () => (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={s}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-9 w-9"
    >
      <path d="M10 8h20v16a10 10 0 01-20 0V8z" />
      <line x1="10" y1="16" x2="30" y2="16" />
      <line x1="10" y1="12" x2="30" y2="12" />
      <line x1="20" y1="8" x2="20" y2="24" />
    </svg>
  ),
  Restaurant: () => (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={s}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-9 w-9"
    >
      <path d="M14 8v8a4 4 0 008 0V8" />
      <line x1="18" y1="16" x2="18" y2="32" />
      <line x1="28" y1="8" x2="28" y2="32" />
      <path d="M25 8c0 0 3 3 3 8s-3 4-3 4" />
    </svg>
  ),
  Workspace: () => (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={s}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-9 w-9"
    >
      <rect x="7" y="14" width="26" height="18" rx="2" />
      <path d="M15 14v-3a2 2 0 012-2h6a2 2 0 012 2v3" />
      <line x1="7" y1="22" x2="33" y2="22" />
    </svg>
  ),
  Courtyard: () => (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={s}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-9 w-9"
    >
      <line x1="20" y1="32" x2="20" y2="12" />
      <path d="M20 20 C13 18 10 12 13 8 C16 4 20 8 20 12" />
      <path d="M20 16 C27 14 30 8 27 5 C24 2 20 6 20 10" />
      <path d="M16 32h8" />
    </svg>
  ),
  Parking: () => (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={s}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-9 w-9"
    >
      <path d="M8 26h24" />
      <path d="M10 26l2-8h16l2 8" />
      <path d="M10 26v4m20-4v4" />
      <circle cx="14" cy="28" r="2" />
      <circle cx="26" cy="28" r="2" />
      <line x1="16" y1="20" x2="24" y2="20" />
    </svg>
  ),
  Security: () => (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={s}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-9 w-9"
    >
      <path d="M20 6l11 4v9c0 7-5 12-11 14C14 31 9 26 9 19V10z" />
      <path d="M15 20l3.5 3.5L25 16" />
    </svg>
  ),
  Supermarket: () => (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={s}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-9 w-9"
    >
      <path d="M8 10h4l3 14h14l3-10H14" />
      <circle cx="17" cy="28" r="2" />
      <circle cx="27" cy="28" r="2" />
    </svg>
  ),
  Concierge: () => (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={s}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-9 w-9"
    >
      <circle cx="16" cy="20" r="6" />
      <path d="M20.5 15.5l10 10" />
      <path d="M27 22l3 3-2 2-3-3" />
      <path d="M30 25l2 2-2 2" />
    </svg>
  ),
  Bar: () => (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={s}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-9 w-9"
    >
      <path d="M14 10l-4 12h20l-4-12" />
      <path d="M10 22l10 10 10-10" />
      <line x1="20" y1="32" x2="20" y2="35" />
      <line x1="15" y1="35" x2="25" y2="35" />
    </svg>
  ),
  Power: () => (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={s}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-9 w-9"
    >
      <path d="M22 8l-6 12h8l-6 12" />
    </svg>
  ),
};

const amenities = [
  { key: "Pool", label: "Swimming Pool", Icon: Icons.Pool, hoverAnim: "wave" },
  { key: "Gym", label: "Fitness Gym", Icon: Icons.Gym, hoverAnim: "lift" },
  {
    key: "Padel",
    label: "Padel Court",
    Icon: Icons.Padel,
    hoverAnim: "bounce",
  },
  {
    key: "Restaurant",
    label: "Restaurant",
    Icon: Icons.Restaurant,
    hoverAnim: "spin",
  },
  {
    key: "Workspace",
    label: "Workspace",
    Icon: Icons.Workspace,
    hoverAnim: "pulse",
  },
  {
    key: "Courtyard",
    label: "Courtyards",
    Icon: Icons.Courtyard,
    hoverAnim: "sway",
  },
  {
    key: "Parking",
    label: "Secure Parking",
    Icon: Icons.Parking,
    hoverAnim: "slide",
  },
  {
    key: "Security",
    label: "24-Hour Security",
    Icon: Icons.Security,
    hoverAnim: "pulse",
  },
  {
    key: "Supermarket",
    label: "Supermarket",
    Icon: Icons.Supermarket,
    hoverAnim: "bounce",
  },
  {
    key: "Concierge",
    label: "Concierge Living",
    Icon: Icons.Concierge,
    hoverAnim: "spin",
  },
  { key: "Bar", label: "Bar & Lounge", Icon: Icons.Bar, hoverAnim: "sway" },
  { key: "Power", label: "24-Hour Power", Icon: Icons.Power, hoverAnim: "zap" },
];

/* Per-amenity hover animation variants for the icon */
const iconVariants: Record<string, AnimationDefinition> = {
  wave: {
    y: [0, -6, 2, -3, 0],
    transition: { duration: 0.7, ease: "easeInOut" },
  },
  lift: {
    scaleY: [1, 1.3, 0.85, 1.1, 1],
    scaleX: [1, 0.9, 1.1, 0.95, 1],
    transition: { duration: 0.6 },
  },
  bounce: {
    y: [0, -10, 2, -5, 0],
    transition: { duration: 0.55, ease: "easeOut" },
  },
  spin: { rotate: [0, 20, -10, 5, 0], transition: { duration: 0.5 } },
  pulse: { scale: [1, 1.18, 0.9, 1.08, 1], transition: { duration: 0.55 } },
  sway: {
    rotate: [0, -8, 6, -4, 0],
    transition: { duration: 0.65, ease: "easeInOut" },
  },
  slide: {
    x: [0, 8, -4, 3, 0],
    transition: { duration: 0.55, ease: "easeInOut" },
  },
  zap: {
    opacity: [1, 0.3, 1, 0.5, 1],
    scale: [1, 1.2, 1, 1.15, 1],
    transition: { duration: 0.45 },
  },
};

function AmenityCell({
  amenity,
  rowIdx,
  colIdx,
}: {
  amenity: (typeof amenities)[0];
  rowIdx: number;
  colIdx: number;
}) {
  const controls = useAnimationControls();
  const diagDelay = (rowIdx + colIdx) * 0.07;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.82 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{
        duration: 0.55,
        delay: diagDelay,
        ease: [0.22, 1, 0.36, 1],
      }}
      onHoverStart={() => controls.start(iconVariants[amenity.hoverAnim])}
      className="group relative flex flex-col items-center justify-center gap-3 border-r border-b border-line/60 py-8 transition-colors duration-300 last:border-r-0 hover:bg-cream-dark"
    >
      {/* Radial gold sweep on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background:
            "radial-gradient(circle at center, rgba(201,169,110,0.12) 0%, transparent 70%)",
        }}
      />

      <motion.div
        animate={controls}
        className="text-gold/70 transition-colors duration-200 group-hover:text-gold"
      >
        <amenity.Icon />
      </motion.div>

      <motion.span
        className="text-xs font-medium tracking-wide text-mist transition-colors duration-200 group-hover:text-navy"
        initial={{ opacity: 0.7 }}
        whileHover={{ opacity: 1 }}
      >
        {amenity.label}
      </motion.span>
    </motion.div>
  );
}

export function AmenitiesSection() {
  return (
    <section id="amenities" className="w-full bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <Reveal className="max-w-sm">
            <h2 className="text-4xl font-semibold leading-tight lg:text-5xl">
              <span className="font-display italic text-navy">
                A residency that{" "}
              </span>
              <br />
              <span className="font-display italic text-gold">looks</span>{" "}
              <span className="font-display italic text-navy">
                after its residents.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.12} from="right" className="max-w-sm">
            <p className="text-sm leading-relaxed text-mist">
              Every amenity at Saplaya is staffed, serviced, and quietly
              maintained — the kind of effortlessness one finds at a private
              resort.
            </p>
          </Reveal>
        </div>

        {/* Two lifestyle images */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-12 lg:gap-6">
          {[
            {
              src: "/images/hero.jpg",
              alt: "Saplaya Residency landscaped courtyard and swimming pool with residents",
              delay: 0,
              colSpan: "sm:col-span-7",
            },
            {
              src: "/images/pool.png",
              alt: "Saplaya Residency building exterior with terrace and secure parking",
              delay: 0.1,
              colSpan: "sm:col-span-5",
            },
          ].map(({ src, alt, delay, colSpan }) => (
            <Reveal
              key={src}
              delay={delay}
              className={`relative w-full ${colSpan} h-[350px] sm:h-[450px] lg:h-[600px] overflow-hidden rounded-2xl`}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width:1024px) 60vw, 100vw"
                className="object-cover"
              />
            </Reveal>
          ))}
        </div>

        {/* 4×3 Amenities grid */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-line/60">
          <div className="grid grid-cols-2 sm:grid-cols-4 [&>*:nth-child(4n)]:border-r-0">
            {amenities.map((amenity, i) => {
              const rowIdx = Math.floor(i / 4);
              const colIdx = i % 4;
              return (
                <AmenityCell
                  key={amenity.key}
                  amenity={amenity}
                  rowIdx={rowIdx}
                  colIdx={colIdx}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
