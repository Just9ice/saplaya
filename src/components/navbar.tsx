"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";

const links = [
  { label: "RESIDENCES", href: "#residences" },
  { label: "LOCATION", href: "#location" },
  { label: "AMENITIES", href: "#amenities" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-4 left-1/2 z-50 w-[95%] max-w-[1000px] -translate-x-1/2 transition-all duration-500`}
    >
      <div
        className={`flex h-16 w-full items-center justify-between rounded-full border px-2 shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-colors duration-500 ${
          scrolled
            ? "border-white/40 bg-white/70 backdrop-blur-xl"
            : "border-white/20 bg-white/30 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Saplaya Residency"
          className="flex items-center"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm overflow-hidden">
            <Image
              src="/Logo.png"
              alt="Saplaya Residency"
              width={48}
              height={48}
              className="object-contain p-1"
            />
          </div>
        </Link>

        {/* Nav links */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm tracking-wide transition-colors ${scrolled ? "text-navy hover:text-navy/60" : "text-navy hover:text-navy/60"}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="group inline-flex items-center rounded-full bg-[#081a2f] px-6 py-2.5 text-sm tracking-wide text-white transition-all hover:bg-navy-light active:scale-95"
        >
          Download Prospectus
          <Download className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
        </a>
      </div>
    </motion.header>
  );
}
