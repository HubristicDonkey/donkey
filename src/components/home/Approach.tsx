import Image from "next/image";
import Reveal from "./Reveal";

export default function Approach() {
  return (
    <section id="motion" className="scroll-mt-[100px] relative overflow-hidden">
      <div className="relative h-[clamp(560px,96vh,1020px)] overflow-hidden">
        <Image
          src="/images/long-exposure-portrait.jpg"
          alt="Singer reaching toward a cheering crowd, guitarist seated behind her under stage light"
          fill
          sizes="100vw"
          className="animate-breathe-slow object-cover object-[50%_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/78 via-ink/34 via-40% to-ink/90" />
        <div className="absolute inset-0 flex items-center px-5 sm:px-8 lg:px-[88px]">
          <Reveal className="max-w-[620px]">
            <p className="mb-6.5 text-xs tracking-[0.32em] uppercase text-sage lg:text-3xl lg:tracking-[0.2em]">
              Long exposure
            </p>
            <h2 className="mb-7 font-display font-light text-[2.4rem] leading-[1.02] tracking-[-0.018em] sm:text-6xl lg:text-[5rem]">
              Movement is
              <br />
              the subject.
            </h2>
            <p className="font-lora text-base leading-[1.8] text-parchment-dim/90 text-pretty lg:text-2xl lg:leading-[1.55]">
              A quarter of a second is long enough for a hand to travel, for
              light to trail, for a crowd to become weather. I shoot for that
              interval on purpose — then edit toward earth: soft greens,
              muted shadow, rich black, a little warmth held back.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
