"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* Background */}
      <Image
        src="/images/hero.jpg"
        alt="Saplaya Residency building facade on the Lagos waterfront"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Gradient overlay — darker at bottom where text lives */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20"
        aria-hidden
      />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 lg:px-14 lg:pb-20">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-gold/90"
        >
          Saplaya Residency
        </motion.p>

        {/* Headline */}
        <div className="max-w-3xl">
          {[
            { text: "Mediterranean life,", delay: 0.45 },
            { text: "on the Lagos waterfront.", delay: 0.58, italic: true },
          ].map(({ text, delay, italic }) => (
            <motion.h1
              key={text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
              className={`block font-display leading-[1.05] text-cream ${
                italic
                  ? "text-4xl italic text-gold sm:text-5xl lg:text-[3.8rem]"
                  : "text-4xl sm:text-5xl lg:text-[3.8rem] font-semibold"
              }`}
            >
              {text}
            </motion.h1>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8"
        >
          <a
            href="#contact"
            className="group inline-flex items-center rounded-full bg-[#00152c] px-6 py-3 text-xs text-white font-semibold uppercase tracking-wider transition-all hover:bg-gold-dark"
          >
            Send an enquiry
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
