"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

const GALLERY = [
  {
    src: "/images/work-guitarist.jpg",
    alt: "Guitarist lit in green and red, reaching up the fretboard",
    cap: "01 — Second set, O'Shea's",
    tag: "Live music",
    aspect: "aspect-[4/5]",
    flex: "flex-[1_1_min(100%,520px)]",
  },
  {
    src: "/images/work-portrait.jpg",
    alt: "Black and white profile of a performer under a wide brimmed hat",
    cap: "02 — Between songs",
    tag: "Portrait",
    aspect: "aspect-[3/4]",
    flex: "flex-[1_1_min(100%,340px)]",
  },
  {
    src: "/images/work-stage-hats.jpg",
    alt: "Two performers trading a look mid-song, one on acoustic guitar, under a chandelier's red light",
    cap: "03 — Watching for the cue",
    tag: "Live events · Nightlife",
    aspect: "aspect-video",
    flex: "flex-[1_1_100%] mt-3 sm:mt-14",
  },
  {
    src: "/images/work-motion-vocal.jpg",
    alt: "Long exposure of a singer mid-shout, features blurred with motion",
    cap: "04 — Every word felt",
    tag: "Long exposure",
    aspect: "aspect-[3/4]",
    flex: "flex-[1_1_min(100%,380px)] mt-3 sm:mt-14",
  },
];

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + GALLERY.length) % GALLERY.length)),
    []
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, close, step]);

  return (
    <section id="work" className="scroll-mt-[100px] pb-20 sm:pb-32 lg:pb-40">
      <div className="flex flex-wrap items-baseline justify-between gap-6 px-5 pb-12 sm:px-8 sm:pb-16 lg:px-[88px] lg:pb-24">
        <Reveal size="small">
          <h2 className="font-display font-light text-[2.2rem] leading-[1.06] tracking-[-0.015em] sm:text-6xl lg:text-[4.4rem]">
            Selected work
          </h2>
        </Reveal>
        <p className="text-xs tracking-[0.24em] uppercase text-stone-dim">
          Four of many nights
        </p>
      </div>

      <div className="flex flex-wrap items-end gap-6 px-5 sm:gap-12 sm:px-8 lg:gap-[72px] lg:px-[88px]">
        {GALLERY.map((item, i) => (
          <Reveal key={item.src} className={item.flex} delay={i * 0.08}>
            <figure className="m-0 cursor-zoom-in" onClick={() => setIndex(i)}>
              <div className={`relative overflow-hidden bg-ink-soft ${item.aspect}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <figcaption className="flex flex-wrap justify-between gap-5 pt-4.5 text-[12.5px] tracking-[0.16em] uppercase text-stone">
                <span>{item.cap}</span>
                <span className="text-stone-dim">{item.tag}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal size="small" className="mt-12 px-5 sm:mt-16 sm:px-8 lg:px-[88px]">
        <Link
          href="/work"
          className="inline-block border-b border-parchment/25 pb-1.5 text-xs tracking-[0.2em] uppercase text-parchment transition-colors duration-500 hover:border-parchment/50"
        >
          Browse the full albums →
        </Link>
      </Reveal>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-90 flex flex-col bg-[#060807]/97"
          >
            <div className="flex items-center justify-between gap-6 px-5 py-[22px] text-[11.5px] tracking-[0.2em] uppercase text-stone-dim sm:px-8 lg:px-12">
              <span>
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(GALLERY.length).padStart(2, "0")}
              </span>
              <span className="text-stone">{GALLERY[index].cap}</span>
              <button
                type="button"
                onClick={close}
                className="bg-transparent border-0 cursor-pointer text-[11.5px] tracking-[0.24em] uppercase text-stone"
              >
                Close · Esc
              </button>
            </div>
            <div className="flex min-h-0 flex-1 items-center justify-center px-5 pb-3 sm:px-8 lg:px-20">
              <div className="relative h-full w-full max-h-full max-w-full">
                <Image
                  src={GALLERY[index].src}
                  alt={GALLERY[index].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-4.5 px-6 pb-7.5 pt-3">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous"
                className="rounded-full border border-parchment/22 bg-transparent px-7 py-3.5 text-[11.5px] tracking-[0.2em] uppercase text-parchment transition-colors duration-500 hover:bg-parchment/[0.09]"
              >
                ← Prev
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next"
                className="rounded-full border border-parchment/22 bg-transparent px-7 py-3.5 text-[11.5px] tracking-[0.2em] uppercase text-parchment transition-colors duration-500 hover:bg-parchment/[0.09]"
              >
                Next →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
