"use client";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const offsets: Record<string, object> = {
  up:    { y: 30 },
  down:  { y: -30 },
  left:  { x: 30 },
  right: { x: -30 },
  none:  {},
};

export function Reveal({ children, delay = 0, className, from = "up" }: {
  children: React.ReactNode; delay?: number; className?: string; from?: "up"|"down"|"left"|"right"|"none";
}) {
  const variants: Variants = {
    hidden:  { opacity: 0, ...offsets[from] },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] } },
  };
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-8% 0px" }} variants={variants} className={cn(className)}>
      {children}
    </motion.div>
  );
}

export function RevealGroup({ children, className, stagger = 0.1 }: {
  children: React.ReactNode; className?: string; stagger?: number;
}) {
  return (
    <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-8% 0px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
