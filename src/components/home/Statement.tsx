import Reveal from "./Reveal";

export default function Statement() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-[88px] lg:py-[200px]">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-11">
        <Reveal size="small">
          <p className="text-xs tracking-[0.32em] uppercase text-stone-dim lg:text-base">
            On method
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-display font-light text-[1.7rem] leading-[1.28] tracking-[-0.01em] text-parchment-soft text-pretty sm:text-4xl lg:text-[3.3rem]">
            Most event photography freezes the night like a mugshot. I would
            rather keep it moving. Long exposures, ambient light, the blur
            of a hand mid-chord. What you are left with is not a record of
            who attended. It&apos;s the feeling of having been there.
          </p>
        </Reveal>
        <Reveal size="fade" delay={0.2} duration={1.4}>
          <div className="h-px bg-parchment/[0.14]" />
        </Reveal>
      </div>
    </section>
  );
}
