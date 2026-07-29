import Image from "next/image";
import Reveal from "./Reveal";

const ETSY_SHOP_URL = "#";

const PRINTS = [
  {
    src: "/images/print-peak.jpg",
    alt: "Ridge line lit gold at sunset with cloud resting on the summit",
    flex: "flex-[1_1_min(100%,520px)]",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/print-macro.jpg",
    alt: "Close study of a passion flower, blue and violet against dark leaves",
    flex: "flex-[1_1_min(100%,280px)]",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/print-ridge.jpg",
    alt: "Snow-capped peak breaking through low fog",
    flex: "flex-[1_1_100%] mt-3 sm:mt-10",
    aspect: "aspect-[21/9]",
  },
];

export default function PrintsTeaser() {
  return (
    <section
      id="prints"
      className="scroll-mt-[100px] border-t border-parchment/[0.08] px-5 py-20 sm:px-8 sm:py-28 lg:px-[88px] lg:py-36"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 sm:mb-16">
          <Reveal size="small">
            <p className="mb-6.5 text-xs tracking-[0.32em] uppercase text-sage">
              Also available
            </p>
            <h2 className="font-display font-light text-[2rem] leading-[1.06] tracking-[-0.015em] sm:text-5xl lg:text-[3.8rem]">
              Fine art prints —
              <br />
              landscape &amp; wildlife.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-[420px]">
            <p className="text-[1.02rem] font-light leading-[1.8] text-stone text-pretty">
              No filters. No AI. Just light, patience, and a donkey-headed
              refusal to settle for ordinary. A small run of prints from the
              mountains and the quieter corners, available on Etsy.
            </p>
            <a
              href={ETSY_SHOP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full border border-parchment/30 px-9 py-4 text-xs tracking-[0.2em] uppercase text-parchment transition-all duration-700 hover:-translate-y-1 hover:bg-parchment/[0.08] hover:border-parchment/60"
            >
              Shop the prints
            </a>
          </Reveal>
        </div>

        <div className="flex flex-wrap items-end gap-6 sm:gap-10">
          {PRINTS.map((p, i) => (
            <Reveal key={p.src} className={p.flex} delay={i * 0.08}>
              <div className={`relative overflow-hidden bg-ink-soft ${p.aspect}`}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
