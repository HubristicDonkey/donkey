"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.16, 0.8, 0.24, 1] as const;

const variants: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

const variantsSmall: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const variantsFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Reveal({
  children,
  className,
  size = "default",
  delay = 0,
  duration = 1.1,
  role,
  "aria-live": ariaLive,
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "small" | "fade";
  delay?: number;
  duration?: number;
  role?: string;
  "aria-live"?: "polite" | "assertive" | "off";
}) {
  const set =
    size === "small" ? variantsSmall : size === "fade" ? variantsFade : variants;

  return (
    <motion.div
      className={className}
      role={role}
      aria-live={ariaLive}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={set}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
