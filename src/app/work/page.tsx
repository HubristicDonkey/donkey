import type { Metadata } from "next";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import Reveal from "@/components/home/Reveal";
import AlbumCard from "@/components/work/AlbumCard";
import { ALBUMS } from "@/lib/albums";

const TITLE = "Albums — Hubristic Donkey";
const DESCRIPTION = "Full nights, one gig at a time — browse the complete albums.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/work" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function WorkIndexPage() {
  return (
    <div className="relative w-full bg-ink">
      <Header />

      <section className="px-5 pb-24 pt-[150px] sm:px-8 sm:pb-32 sm:pt-[170px] lg:px-[88px] lg:pb-40 lg:pt-[200px]">
        <div className="mx-auto max-w-[1320px]">
          <Reveal size="small" className="mb-16 max-w-[640px] sm:mb-20">
            <p className="mb-6.5 text-xs tracking-[0.32em] uppercase text-sage">
              Albums
            </p>
            <h1 className="font-display font-light text-[2.4rem] leading-[1.04] tracking-[-0.018em] text-parchment sm:text-6xl lg:text-[3.6rem]">
              Full nights, not
              <br />
              highlight reels.
            </h1>
          </Reveal>

          <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16 lg:grid-cols-3">
            {ALBUMS.map((album, i) => (
              <AlbumCard key={album.slug} album={album} delay={(i % 3) * 0.06} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
