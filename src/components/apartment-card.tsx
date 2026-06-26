"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface ApartmentCardProps {
  image: string;
  imageAlt: string;
  type: string;
  size: string;
  price: string;
  features: string[];
  index?: number;
  hoverImage?: string;
}

/**
 * Hover animation: the inner track (image stacked above info panel) slides
 * upward, uncovering the info panel that lives below the image in the same
 * overflow:hidden clip container. The image also subtly scales up while
 * sliding, adding depth to the reveal.
 */
export function ApartmentCard({ image, hoverImage, imageAlt, type, size, price, features, index = 0 }: ApartmentCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-6% 0px" }}
      transition={{ duration: 0.7, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col"
    >
      {/* ── Clip wrapper ───────────────────────────────────────── */}
      <div className="relative overflow-hidden rounded-2xl">
        <motion.div
          className="flex flex-col"
          initial={false}
          whileHover="hovered"
          animate="idle"
          variants={{
            idle:    { y: 0,     transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] } },
            hovered: { y: "-36%",transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          {/* Photo */}
          <div className="relative aspect-[3/4] w-full shrink-0 bg-navy/5">
            <Image
              src={image} alt={imageAlt} fill
              sizes="(min-width:1024px) 32vw, 90vw"
              className={`absolute inset-0 object-cover transition-all duration-700 ease-out group-hover:scale-[1.04] ${hoverImage ? 'group-hover:opacity-0' : ''}`}
            />
            {hoverImage && (
              <Image
                src={hoverImage} alt={`${imageAlt} interior view`} fill
                sizes="(min-width:1024px) 32vw, 90vw"
                className="absolute inset-0 object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-100"
              />
            )}
          </div>

          {/* Info panel — hidden below until image retreats */}
          <div className="shrink-0 bg-cream px-5 pb-6 pt-5">
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-2xl font-semibold italic text-navy">{type}</h3>
              <span className="text-[10px] font-semibold tracking-widest text-mist">{size}</span>
            </div>

            <ul className="mt-3 space-y-1.5">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-mist">
                  <span className="mt-0.5 text-gold">–</span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex items-center justify-between">
              <span className="font-display text-2xl font-semibold text-navy">{price}</span>
              <motion.button
                className="rounded border border-navy/25 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-navy transition-all hover:bg-navy hover:text-cream"
                variants={{
                  idle:    { opacity: 0.4, x: 4 },
                  hovered: { opacity: 1,   x: 0, transition: { delay: 0.12 } },
                }}
              >
                View Guide
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}
