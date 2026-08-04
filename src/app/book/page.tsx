import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/home/Header";
import Reveal from "@/components/home/Reveal";
import BookingForm from "@/components/book/BookingForm";

const TITLE = "Book an event — Hubristic Donkey";
const DESCRIPTION =
  "Start an enquiry for concerts, festivals, private events, or a landscape and wildlife commission.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/book" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function BookPage() {
  return (
    <div className="relative min-h-svh w-full bg-ink">
      <Header />

      <section className="flex min-h-svh w-full flex-col lg:flex-row">
        <div className="relative min-h-[58svh] w-full overflow-hidden lg:w-2/5">
          <Image
            src="/images/long-exposure-hands.jpg"
            alt="Long exposure of hands moving across an electric guitar in blue light"
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="animate-breathe-slow object-cover object-[50%_40%] [filter:saturate(.82)_brightness(.7)]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/72 via-ink/30 via-[45%] to-ink/90" />
          <p className="animate-fade-in [animation-delay:.5s] absolute inset-x-0 bottom-0 max-w-[26ch] text-pretty p-7 font-display text-[1.15rem] font-light italic leading-[1.5] text-parchment-dim sm:p-10 lg:p-14 lg:text-[1.35rem]">
            Keeping the feeling of the night, not just the record of it.
          </p>
        </div>

        <div className="flex w-full flex-1 items-center px-5 pb-14 pt-[128px] sm:px-8 sm:pt-[150px] lg:w-3/5 lg:px-16 lg:pb-20 lg:pt-[170px] xl:px-20">
          <div className="mx-auto w-full max-w-[680px]">
            <Reveal size="fade" duration={1.2} delay={0.2}>
              <p className="mb-4.5 text-xs tracking-[0.32em] uppercase text-stone-dim">
                Book an event
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <h1 className="mb-4.5 font-display font-light text-[2.1rem] leading-[1.05] tracking-[-0.02em] text-parchment sm:text-5xl lg:text-[3.1rem]">
                Tell me about
                <br />
                <em className="italic text-parchment-dim">the occasion.</em>
              </h1>
            </Reveal>
            <Reveal delay={0.5}>
              <p className="font-lora mb-10 max-w-[46ch] text-[1.02rem] leading-[1.8] text-stone text-pretty">
                A few details are enough to start. I reply to every enquiry
                personally, usually within two days, and I only take on what
                I can shoot properly.
              </p>
            </Reveal>

            <BookingForm />

            <p className="mt-9 text-xs tracking-[0.2em] uppercase text-stone-dim">
              Prefer email?{" "}
              <a
                href="mailto:hubristicdonkey@gmail.com"
                className="border-b border-parchment/20 text-parchment transition-colors duration-500 hover:border-parchment/40"
              >
                hubristicdonkey@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
