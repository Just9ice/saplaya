"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface ApartmentCardProps {
  image: string;
  imageAlt: string;
  type: string;
  heading: string;
  size: string;
  features: string[];
  index?: number;
  hoverImage?: string;
}

/**
 * Hover animation: the info panel rises up as a solid overlay from the bottom
 * of the card. The image stays fixed and subtly scales. No vertical track shift —
 * feels premium and directionally neutral regardless of where the cursor enters.
 * whileHover is on the parent article so Framer Motion propagates the "hovered"
 * variant to all child motion elements.
 */
export function ApartmentCard({
  image,
  hoverImage,
  imageAlt,
  type,
  heading,
  size,
  features,
  index = 0,
}: ApartmentCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-6% 0px" }}
      whileHover="hovered"
      animate="idle"
      transition={{
        duration: 0.7,
        delay: index * 0.13,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex flex-col"
    >
      {/* ── Clip wrapper ─────────────────────────────────────── */}
      <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
        {/* Photo (stays fixed, subtly scales on hover via Tailwind group-hover) */}
        <Image
          src={image}
          alt={imageAlt}
          fill
          quality={99}
          sizes="(min-width:1024px) 32vw, 90vw"
          className={`absolute inset-0 object-cover transition-all duration-700 ease-out group-hover:scale-[1.06] ${hoverImage ? "group-hover:opacity-0" : ""}`}
        />
        {hoverImage && (
          <Image
            src={hoverImage}
            alt={`${imageAlt} interior view`}
            fill
            quality={99}
            sizes="(min-width:1024px) 32vw, 90vw"
            className="absolute inset-0 object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-[1.06] group-hover:opacity-100"
          />
        )}

        {/* Info overlay — rises from the bottom; variant propagated from parent */}
        <motion.div
          className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/85 to-white/60 backdrop-blur-md px-5 pb-6 pt-5 will-change-transform"
          variants={{
            idle: {
              y: "100%",
              transition: { duration: 0.48, ease: [0.32, 0, 0.67, 0] },
            },
            hovered: {
              y: 0,
              transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          <div className="flex items-baseline justify-between">
            <h3 className="font-display text-2xl text-[#083d80]">{type}</h3>
            <span className="text-[10px] tracking-widest text-mist">
              {size}
            </span>
          </div>

          {heading && (
            <p className="mt-1 text-sm font-medium text-[#6d7288]">{heading}</p>
          )}

          <ul className="mt-3 space-y-1.5">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-xs text-mist">
                <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-[3px]"></div>
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Persistent label — fades out as overlay rises; variant propagated from parent */}
        <motion.div
          className="absolute inset-x-0 bottom-0 px-5 pb-5"
          variants={{
            idle: {
              opacity: 1,
              transition: { duration: 0.2 },
            },
            hovered: {
              opacity: 0,
              transition: { duration: 0.15 },
            },
          }}
        >
          <div className="flex items-end justify-between">
            <h3 className="font-display text-2xl text-white drop-shadow-md">
              {type}
            </h3>
            <span className="text-[10px] tracking-widest text-white/70 drop-shadow">
              {size}
            </span>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}
