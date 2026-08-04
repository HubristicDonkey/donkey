import Link from "next/link";
import Reveal from "@/components/home/Reveal";
import type { Album } from "@/lib/albums";

export default function AlbumCard({ album, delay = 0 }: { album: Album; delay?: number }) {
  return (
    <Reveal size="small" delay={delay}>
      <Link href={`/work/${album.slug}`} className="group block">
        <div className="relative overflow-hidden bg-ink-soft">
          {/* Plain img rather than next/image: masonry needs each cover to render at
              its own natural aspect ratio, which next/image's fill mode (needing a
              pre-sized parent) can't give us without hardcoding per-image dimensions. */}
          <img
            src={album.cover}
            alt={album.title}
            loading="lazy"
            className="block w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
        <div className="mt-4.5 flex items-baseline justify-between gap-4">
          <h3 className="font-display font-light text-xl leading-[1.15] text-parchment sm:text-2xl">
            {album.title}
          </h3>
          <span className="shrink-0 text-xs tracking-[0.18em] uppercase text-stone-dim">
            {album.photos.length} photos
          </span>
        </div>
        <p className="font-lora mt-2 max-w-[42ch] text-[1.02rem] leading-[1.8] text-stone text-pretty">
          {album.blurb}
        </p>
      </Link>
    </Reveal>
  );
}
