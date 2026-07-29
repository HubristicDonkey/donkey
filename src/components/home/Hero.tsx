import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[620px] w-full overflow-hidden"
    >
      <Image
        src="/images/long-exposure-crowd.jpg"
        alt="Performer on stage under green light, crowd reaching upward"
        fill
        priority
        sizes="100vw"
        className="animate-breathe object-cover object-[50%_45%] [filter:saturate(.86)_contrast(1.03)_brightness(.82)]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/68 from-0% via-ink/22 via-[34%] to-ink/86" />
      <div className="absolute inset-0 [background:radial-gradient(120%_80%_at_50%_40%,rgba(0,0,0,0)_40%,rgba(6,8,7,.72)_100%)]" />

      <div className="relative flex h-full flex-col justify-end gap-10 px-5 pb-14 sm:px-8 sm:pb-20 lg:px-[88px] lg:pb-[110px]">
        <div className="max-w-[1180px]">
          <p className="animate-fade-in [animation-delay:.5s] mb-7 text-xs font-normal tracking-[0.32em] uppercase text-stone">
            Event photography — worldwide
          </p>
          <h1 className="animate-fade-in [animation-delay:.65s] font-display font-light text-[2.9rem] leading-[0.96] tracking-[-0.018em] text-parchment text-pretty sm:text-7xl lg:text-8xl xl:text-[8rem]">
            Capturing movement,
            <br />
            atmosphere, and the
            <br />
            <em className="italic text-parchment-dim">moments between.</em>
          </h1>
        </div>
        <div className="animate-fade-in [animation-delay:1s] flex flex-wrap items-end justify-between gap-10">
          <p className="max-w-[460px] text-base font-light leading-[1.75] text-parchment-dim/90 text-pretty">
            I still shoot a stage the way I used to shoot a valley — wait for
            the light, let the movement stay in the frame. Concerts,
            festivals, sport, and the quiet minutes nobody else is looking
            at.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Link
              href="/book"
              className="inline-block rounded-full bg-parchment px-[38px] py-[18px] text-xs tracking-[0.2em] uppercase text-ink transition-all duration-700 hover:-translate-y-1 hover:bg-white"
            >
              Book an Event
            </Link>
            <a
              href="#work"
              className="inline-block rounded-full border border-parchment/30 px-[38px] py-[18px] text-xs tracking-[0.2em] uppercase text-parchment transition-all duration-700 hover:-translate-y-1 hover:bg-parchment/[0.08] hover:border-parchment/60"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>

      <div className="animate-fade-in [animation-delay:1.6s] absolute bottom-6 left-1/2 h-11 w-px bg-gradient-to-b from-parchment/0 to-parchment/50" />
    </section>
  );
}
