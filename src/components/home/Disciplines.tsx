import Reveal from "./Reveal";

const DISCIPLINES = [
  {
    no: "01",
    title: "Live events",
    note: "Full-evening coverage of gigs, launches and nightlife — shot from inside the room, not the wings.",
  },
  {
    no: "02",
    title: "Concerts & festivals",
    note: "Multi-stage, multi-day. Pit access handled, artist approvals respected, galleries delivered overnight.",
  },
  {
    no: "03",
    title: "Sporting events",
    note: "Stadium and touchline work, big occasion or small club night — I'm there for the single moment the crowd feels it and reacts as one.",
  },
  {
    no: "04",
    title: "Corporate events",
    note: "Conferences, dinners and awards photographed quietly, in the venue’s own light.",
  },
  {
    no: "05",
    title: "Private events",
    note: "Small, close, unposed — nobody gets arranged into a semi-circle and told to look natural.",
  },
];

export default function Disciplines() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-[88px] lg:py-[180px]">
      <div className="mx-auto max-w-[1320px]">
        <p className="mb-10 text-xs tracking-[0.32em] uppercase text-stone-dim sm:mb-16 lg:mb-[72px]">
          Commissions
        </p>
        {DISCIPLINES.map((d, i) => (
          <Reveal key={d.no} size="small" delay={i * 0.05}>
            <div className="grid grid-cols-[64px_minmax(0,1fr)] items-baseline gap-4 border-t border-parchment/[0.12] py-7 transition-colors duration-700 hover:bg-parchment/[0.03] sm:grid-cols-[64px_minmax(0,1fr)_minmax(0,1fr)] sm:gap-14 sm:py-10">
              <span className="text-xs tracking-[0.18em] text-stone-deep">
                {d.no}
              </span>
              <h3 className="font-display font-light text-2xl leading-[1.14] tracking-[-0.01em] text-parchment sm:text-4xl">
                {d.title}
              </h3>
              <p className="col-span-2 mt-3 text-[0.98rem] font-light leading-[1.75] text-stone text-pretty sm:col-span-1 sm:mt-0">
                {d.note}
              </p>
            </div>
          </Reveal>
        ))}
        <div className="h-px bg-parchment/[0.12]" />
      </div>
    </section>
  );
}
