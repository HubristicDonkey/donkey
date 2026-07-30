import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import Reveal from "@/components/home/Reveal";
import AlbumLightboxGrid from "@/components/work/AlbumLightboxGrid";
import { ALBUMS } from "@/lib/albums";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return ALBUMS.map((album) => ({ slug: album.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const album = ALBUMS.find((a) => a.slug === slug);
  if (!album) return {};
  const title = `${album.title} — Hubristic Donkey`;
  return {
    title,
    description: album.blurb,
    openGraph: {
      title,
      description: album.blurb,
      url: `/work/${album.slug}`,
      images: [{ url: album.cover, width: 1200, height: 1500 }],
    },
    twitter: {
      title,
      description: album.blurb,
      images: [album.cover],
    },
  };
}

export default async function AlbumPage({ params }: { params: Params }) {
  const { slug } = await params;
  const album = ALBUMS.find((a) => a.slug === slug);
  if (!album) notFound();

  return (
    <div className="relative w-full bg-ink">
      <Header />

      <section className="px-5 pb-24 pt-[150px] sm:px-8 sm:pb-32 sm:pt-[170px] lg:px-[88px] lg:pb-40 lg:pt-[200px]">
        <div className="mx-auto max-w-[1320px]">
          <Link
            href="/work"
            className="mb-10 inline-block border-b border-parchment/20 pb-1.5 text-xs tracking-[0.2em] uppercase text-stone-dim transition-colors duration-500 hover:border-parchment/40 hover:text-parchment"
          >
            ← All albums
          </Link>

          <Reveal size="small" className="mb-14 max-w-[720px] sm:mb-20">
            <h1 className="mb-5 font-display font-light text-[2.2rem] leading-[1.06] tracking-[-0.015em] text-parchment sm:text-6xl lg:text-[3.8rem]">
              {album.title}
            </h1>
            <p className="font-lora text-[1.02rem] leading-[1.8] text-stone text-pretty">
              {album.blurb}
            </p>
          </Reveal>

          <AlbumLightboxGrid photos={album.photos} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
