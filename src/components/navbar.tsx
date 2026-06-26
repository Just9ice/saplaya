"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Download, Menu, X } from "lucide-react";

const links = [
  { label: "RESIDENCES", href: "#residences" },
  { label: "LOCATION", href: "#location" },
  { label: "AMENITIES", href: "#amenities" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
          scrolled || menuOpen
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

        {/* Nav links (Desktop) */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm tracking-wide transition-colors text-navy hover:text-navy/60`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA (Desktop) */}
        <a
          href="#contact"
          className="group hidden items-center rounded-full bg-[#081a2f] px-6 py-2.5 text-sm tracking-wide text-white transition-all hover:bg-navy-light active:scale-95 md:inline-flex"
        >
          Download Prospectus
          <Download className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
        </a>

        {/* Hamburger (Mobile) */}
        <button
          className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#081a2f] text-white transition-transform active:scale-95 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-20 flex flex-col gap-6 rounded-[32px] border border-white/40 bg-white/95 p-6 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-navy/5 pb-3 text-lg font-medium tracking-wide text-navy"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="group flex w-full items-center justify-center rounded-full bg-[#081a2f] px-6 py-4 text-sm font-semibold tracking-wide text-white transition-all hover:bg-navy-light active:scale-95"
            >
              Download Prospectus
              <Download className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
