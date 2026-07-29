import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-[100px] overflow-hidden px-5 py-16 pb-24 sm:px-8 sm:py-24 sm:pb-32 lg:px-[88px] lg:py-[120px] lg:pb-[180px]"
    >
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-start gap-14 lg:gap-24">
        <Reveal className="relative flex-[1_1_min(100%,360px)]">
          <div className="relative aspect-[4/5] overflow-hidden bg-ink-soft">
            <Image
              src="/images/about-portrait.jpg"
              alt="Portrait of a singer lit in deep blue at the microphone"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="animate-breathe-slow object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-[1_1_min(100%,480px)] flex-col gap-7">
          <p className="text-xs tracking-[0.32em] uppercase text-stone-dim">
            About
          </p>
          <h2 className="font-display font-light text-[2rem] leading-[1.06] tracking-[-0.015em] sm:text-5xl lg:text-[3.8rem]">
            I learned to wait
            <br />
            before I learned to shoot.
          </h2>
          <p className="text-[1.02rem] font-light leading-[1.85] text-parchment-dim/90 text-pretty">
            Long before any of this, I was standing on ridgelines waiting for
            a cloud to move a shadow off a rock face — landscape and wildlife
            photography, where patience is the entire method. That habit
            never left. It just found new places to work.
          </p>
          <p className="text-[1.02rem] font-light leading-[1.85] text-stone text-pretty">
            The event side of it came out of nowhere in particular. I was
            going to shows because I loved live music, not because it was a
            job — and at some point I started bringing a camera along out of
            personal interest. The two instincts collided fast: read the
            room&apos;s light before you raise a camera, find where the night
            is going to break, and wait there.
          </p>
          <p className="text-[1.02rem] font-light leading-[1.85] text-stone text-pretty">
            In the edit I pull everything back toward earth: soft greens,
            blue-grey shadow, warm stone in the highlights, black that still
            holds detail. No saturation for its own sake. The photographs
            should look like the moment felt, not like a filter.
          </p>
          <p className="text-[1.02rem] font-light leading-[1.85] text-stone text-pretty">
            The landscape and wildlife work is still very much alive — a
            small collection of fine art prints, for anyone who wants a
            slower kind of image on their wall.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-7">
            <Link
              href="/book"
              className="self-start border-b border-parchment/30 pb-1.5 text-xs tracking-[0.2em] uppercase text-parchment"
            >
              Commission a story
            </Link>
            <a
              href="#prints"
              className="self-start border-b border-parchment/10 pb-1.5 text-xs tracking-[0.2em] uppercase text-stone-dim transition-colors duration-500 hover:border-parchment/30 hover:text-parchment"
            >
              See the prints
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
