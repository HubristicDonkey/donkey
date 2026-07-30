"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#motion", label: "Approach" },
  { href: "/#about", label: "About" },
  { href: "/#prints", label: "Prints" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-60 flex items-center justify-between gap-8 px-5 py-[22px] backdrop-blur-xl [backdrop-filter:blur(18px)_saturate(1.1)] bg-gradient-to-b from-ink/72 to-ink/28 border-b border-parchment/[0.07] sm:px-8 lg:px-14">
        <a href="/#top" className="flex items-center gap-3.5">
          <Image
            src="/images/logo.png"
            alt="Hubristic Donkey"
            width={68}
            height={68}
            className="h-10 w-10 object-contain mix-blend-screen lg:h-[68px] lg:w-[68px]"
            priority
          />
          <span className="font-display text-[19px] tracking-[0.16em] uppercase text-parchment whitespace-nowrap lg:text-[34px] lg:tracking-[0.14em]">
            Hubristic Donkey
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[12.5px] tracking-[0.2em] uppercase text-stone">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-parchment transition-colors duration-500">
              {link.label}
            </a>
          ))}
          <a href="/#contact" className="hover:text-parchment transition-colors duration-500">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/book"
            className="hidden sm:inline-block rounded-full border border-parchment/28 px-6 py-3 text-xs tracking-[0.2em] uppercase whitespace-nowrap text-parchment transition-colors duration-500 hover:bg-parchment/[0.09] hover:border-parchment/55"
          >
            Book Now
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex flex-col gap-[5px] p-2.5 bg-transparent border-0 cursor-pointer"
          >
            <span
              className={`block h-px w-[22px] bg-parchment transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-[22px] bg-parchment transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-80 flex flex-col justify-center bg-[#080a09]/96 backdrop-blur-[26px] px-7 py-8 sm:px-16 lg:px-24"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-5 top-6 bg-transparent border-0 cursor-pointer text-xs tracking-[0.24em] uppercase text-stone sm:right-8 lg:right-14"
            >
              Close
            </button>

            <div className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 34 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.05 + i * 0.07, ease: [0.16, 0.8, 0.24, 1] }}
                  className="font-display font-light text-[2.6rem] leading-[1.12] text-parchment sm:text-6xl lg:text-8xl"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.26, ease: [0.16, 0.8, 0.24, 1] }}
              >
                <Link
                  href="/book"
                  onClick={() => setOpen(false)}
                  className="font-display font-light text-[2.6rem] leading-[1.12] text-parchment sm:text-6xl lg:text-8xl"
                >
                  Book an event
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="mt-14 flex flex-wrap gap-7 text-xs tracking-[0.2em] uppercase text-stone-dim"
            >
              <a href="https://www.instagram.com/hubristic_donkey/" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="mailto:hello@hubristicdonkey.com">hello@hubristicdonkey.com</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
