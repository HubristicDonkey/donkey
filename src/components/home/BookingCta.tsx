import Link from "next/link";
import Reveal from "./Reveal";

export default function BookingCta() {
  return (
    <section id="book" className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-[88px] lg:py-[180px]">
      <div className="absolute inset-0 bg-gradient-to-b from-ink from-0% via-[#101a16] via-[42%] to-[#0c120f]" />
      <div className="absolute inset-0 [background:radial-gradient(110%_70%_at_20%_10%,rgba(28,58,46,.55),rgba(10,12,11,0)_70%)]" />

      <div className="relative mx-auto max-w-[1180px]">
        <Reveal className="mb-11 max-w-[620px] sm:mb-16 lg:mb-20">
          <p className="mb-6.5 text-xs tracking-[0.32em] uppercase text-sage">
            Book an event
          </p>
          <h2 className="mb-5.5 font-display font-light text-[2.2rem] leading-[1.04] tracking-[-0.018em] sm:text-6xl lg:text-[4.4rem]">
            Tell me about
            <br />
            the evening.
          </h2>
          <p className="text-[1.02rem] font-light leading-[1.8] text-parchment-dim/90 text-pretty">
            A few details are enough to start. I reply to every enquiry
            personally, usually within two days, and I only take on what I
            can shoot properly.
          </p>
        </Reveal>

        <Reveal className="flex flex-wrap gap-4">
          <Link
            href="/book"
            className="inline-block whitespace-nowrap rounded-full bg-parchment px-11 py-[19px] text-xs tracking-[0.2em] uppercase text-ink transition-all duration-700 hover:-translate-y-1 hover:bg-white"
          >
            Start an enquiry
          </Link>
          <a
            href="mailto:hello@hubristicdonkey.com"
            className="inline-block whitespace-nowrap rounded-full border border-parchment/30 px-11 py-[19px] text-xs tracking-[0.2em] uppercase text-parchment transition-all duration-700 hover:-translate-y-1 hover:bg-parchment/[0.08] hover:border-parchment/60"
          >
            Email instead
          </a>
        </Reveal>
      </div>
    </section>
  );
}
