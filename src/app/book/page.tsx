import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book an event — Hubristic Donkey",
};

export default function BookPage() {
  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center gap-6 bg-ink px-5 text-center">
      <p className="text-xs tracking-[0.32em] uppercase text-stone-dim">
        Coming soon
      </p>
      <h1 className="font-display font-light text-4xl text-parchment sm:text-6xl">
        Tell me about the evening.
      </h1>
      <Link
        href="/"
        className="mt-4 border-b border-parchment/30 pb-1.5 text-xs tracking-[0.2em] uppercase text-parchment"
      >
        ← Back home
      </Link>
    </div>
  );
}
