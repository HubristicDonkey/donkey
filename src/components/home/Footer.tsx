import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-[100px] border-t border-parchment/10 px-5 pb-11 pt-16 sm:px-8 sm:pt-24 lg:px-[88px] lg:pt-[130px]"
    >
      <div className="mx-auto flex max-w-[1320px] flex-wrap gap-10 lg:gap-16">
        <div className="flex flex-[1_1_min(100%,420px)] flex-col gap-5.5">
          <Image
            src="/images/logo.png"
            alt="Hubristic Donkey"
            width={54}
            height={54}
            className="h-[54px] w-[54px] object-contain mix-blend-screen"
          />
          <p className="max-w-[34ch] font-display font-light text-xl leading-[1.45] text-parchment-dim/90 text-pretty sm:text-2xl">
            You are not hiring someone to take photographs. You are asking
            someone to keep the feeling of the night.
          </p>
        </div>

        <div className="flex flex-[0_1_200px] flex-col gap-3.5 text-[13px] tracking-[0.12em] uppercase text-[#8b8377]">
          <span className="text-xs tracking-[0.28em] text-stone-deep">
            Elsewhere
          </span>
          <a href="https://www.instagram.com/hubristic_donkey/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            Etsy print shop
          </a>
          <a href="mailto:hello@hubristicdonkey.com">hello@hubristicdonkey.com</a>
          <Link href="/book">WhatsApp on request</Link>
        </div>

        <div className="flex flex-[0_1_200px] flex-col gap-3.5 text-[13px] tracking-[0.12em] uppercase text-[#8b8377]">
          <span className="text-xs tracking-[0.28em] text-stone-deep">
            Index
          </span>
          <a href="/#work">Work</a>
          <a href="/#motion">Approach</a>
          <a href="/#about">About</a>
          <a href="/#prints">Prints</a>
          <Link href="/book">Book an event</Link>
        </div>

        <div className="flex flex-[1_1_100%] flex-wrap justify-between gap-4 border-t border-parchment/[0.08] pt-9 text-[11.5px] tracking-[0.18em] uppercase text-[#4e5a55]">
          <span>© 2026 Hubristic Donkey</span>
          <span>Available for commissions worldwide</span>
        </div>
      </div>
    </footer>
  );
}
