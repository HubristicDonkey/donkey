"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { AlbumPhoto } from "@/lib/albums";
import Reveal from "@/components/home/Reveal";

export default function AlbumLightboxGrid({ photos }: { photos: AlbumPhoto[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [photos.length]
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
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 lg:gap-8">
        {photos.map((photo, i) => (
          <Reveal key={photo.src} delay={(i % 8) * 0.05}>
            <figure
              className="relative aspect-[4/5] cursor-zoom-in overflow-hidden bg-ink-soft"
              onClick={() => setIndex(i)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 23vw, (min-width: 640px) 31vw, 47vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.04]"
              />
            </figure>
          </Reveal>
        ))}
      </div>

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
                {String(photos.length).padStart(2, "0")}
              </span>
              <span className="max-w-[50vw] truncate text-stone">{photos[index].caption}</span>
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
                  src={photos[index].src}
                  alt={photos[index].alt}
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
    </>
  );
}
