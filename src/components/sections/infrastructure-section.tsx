"use client";
import Image from "next/image";
import { useRef } from "react";
import { Reveal } from "@/components/reveal";
import {
  motion,
  useAnimationControls,
  useScroll,
  useTransform,
  type AnimationDefinition,
} from "framer-motion";
import {
  Battery,
  Power,
  Wifi,
  Droplets,
  ShieldCheck,
  Flame,
  Home,
  Recycle,
} from "lucide-react";

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

const features = [
  { icon: Battery, label: "Solar + Battery Backup", hoverAnim: "zap" },
  { icon: Power, label: "Dual Generators", hoverAnim: "pulse" },
  { icon: Wifi, label: "Building-Wide Connectivity", hoverAnim: "wave" },
  { icon: Droplets, label: "Private Water Treatment", hoverAnim: "slide" },
  { icon: ShieldCheck, label: "Integrated Security", hoverAnim: "sway" },
  { icon: Flame, label: "Engineered Fire Safety", hoverAnim: "bounce" },
  { icon: Home, label: "Smart Home Automation", hoverAnim: "lift" },
  { icon: Recycle, label: "On-Site Sewage Treatment", hoverAnim: "spin" },
];

function FeatureCell({
  feature,
  idx,
}: {
  feature: (typeof features)[0];
  idx: number;
}) {
  const controls = useAnimationControls();
  const Icon = feature.icon;

  return (
    <Reveal
      delay={0.1 * (idx % 4)}
      className="group relative flex items-center gap-4 p-8 border-b border-line/60 overflow-hidden transition-colors duration-300 hover:bg-cream-dark last:border-b-0 sm:border-r sm:even:border-r-0 lg:border-r lg:[&:nth-child(4n)]:border-r-0 lg:[&:nth-last-child(-n+4)]:border-b-0"
    >
      <div
        className="absolute inset-0 z-20"
        onMouseEnter={() => controls.start(iconVariants[feature.hoverAnim])}
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-none opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at center, rgba(201,169,110,0.12) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={controls}
        className="flex-shrink-0 text-gold/70 transition-colors duration-200 group-hover:text-gold z-10 pointer-events-none"
      >
        <Icon strokeWidth={1.25} className="w-6 h-6" />
      </motion.div>
      <span className="text-sm font-medium text-mist transition-colors duration-200 group-hover:text-[#083d80] z-10 pointer-events-none">
        {feature.label}
      </span>
    </Reveal>
  );
}

function CourtyardImage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Image drifts up slightly as you scroll past
  const y = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <div ref={ref} className="mt-16 lg:mt-24">
      <motion.div
        className="relative w-full h-[380px] lg:h-[520px] overflow-hidden rounded-3xl"
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-8% 0px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="absolute inset-0"
          style={{ y }}
        >
          <Image
            src="/images/parkinglot.png"
            alt="Saplaya Residency courtyard with landscaping, parking and resident amenities"
            fill
            sizes="(min-width:1440px) 1440px, 100vw"
            className="object-cover scale-110"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function InfrastructureSection() {
  return (
    <section id="infrastructure" className="w-full bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 max-w-lg">
            <Reveal>
              <h3 className="text-lg font-medium tracking-[0.2em] uppercase text-mist">
                INFRASTRUCTURE
              </h3>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="text-5xl leading-[1.1] lg:text-6xl text-[#083d80]"
                style={{
                  fontFamily: "Instrument Serif",
                }}
              >
                Always{" "}
                <span className="font-display italic text-gold">Powered.</span>
                <br />
                Always{" "}
                <span className="font-display italic text-gold">
                  Protected.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-base leading-relaxed text-mist">
                Dedicated infrastructure ensures reliable power, water,
                security, and smart living from day one.
              </p>
            </Reveal>
          </div>

          {/* Right Image */}
          <Reveal
            delay={0.3}
            className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-3xl"
          >
            <Image
              src="/images/infrastructure.png"
              alt="Saplaya Residency infrastructure aerial view"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        {/* Features Grid */}
        <div className="mt-16 lg:mt-24 rounded-3xl border border-line/60 bg-cream/50 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => (
              <FeatureCell key={feature.label} feature={feature} idx={idx} />
            ))}
          </div>
        </div>

        {/* Courtyard Image — parallax + scale-in */}
        <CourtyardImage />
      </div>
    </section>
  );
}
