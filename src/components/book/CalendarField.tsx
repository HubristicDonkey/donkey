"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Dates already booked — add to this list as enquiries are confirmed. Format: "YYYY-MM-DD".
const BLACKOUT_DATES: string[] = [];

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const EASE = [0.16, 0.8, 0.24, 1] as const;

function formatDisplay(date: Date) {
  return `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

function toISODate(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export default function CalendarField({
  label,
  name,
}: {
  label: string;
  name: string;
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Date | null>(null);
  const [viewDate, setViewDate] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("mousedown", onPointerDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const startOffset = firstOfMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (Date | null)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));

  return (
    <div ref={wrapperRef} className="relative">
      <label className="mb-2.5 block text-xs tracking-[0.2em] uppercase text-stone-dim">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between border-0 border-b border-parchment/20 bg-transparent pb-3 text-left font-light text-[1.02rem] outline-none transition-colors duration-500 focus:border-parchment"
      >
        <span className={selected ? "text-parchment" : "text-stone-dim/60"}>
          {selected ? formatDisplay(selected) : "Select a date"}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className="shrink-0 text-stone-dim"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
          <path d="M3 9.5H21" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8 3V6.5M16 3V6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </button>

      <input type="hidden" name={name} value={selected ? toISODate(selected) : ""} />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="absolute left-0 top-full z-20 mt-3 w-[300px] max-w-[80vw] rounded-2xl border border-parchment/12 bg-[#0e1412] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            <div className="mb-4 flex items-center justify-between">
              <button
                type="button"
                aria-label="Previous month"
                onClick={() => setViewDate(new Date(year, month - 1, 1))}
                className="rounded-full px-2.5 py-1 text-sm text-stone-dim transition-colors duration-300 hover:bg-parchment/[0.08] hover:text-parchment"
              >
                ‹
              </button>
              <span className="text-xs tracking-[0.18em] uppercase text-parchment">
                {MONTHS[month]} {year}
              </span>
              <button
                type="button"
                aria-label="Next month"
                onClick={() => setViewDate(new Date(year, month + 1, 1))}
                className="rounded-full px-2.5 py-1 text-sm text-stone-dim transition-colors duration-300 hover:bg-parchment/[0.08] hover:text-parchment"
              >
                ›
              </button>
            </div>

            <div className="grid grid-cols-7 gap-y-1 text-center">
              {WEEKDAYS.map((w, i) => (
                <span key={i} className="pb-2 text-[10.5px] tracking-[0.1em] text-stone-deep">
                  {w}
                </span>
              ))}
              {cells.map((date, i) => {
                if (!date) return <span key={i} />;
                const isPast = date < today;
                const isBooked = BLACKOUT_DATES.includes(toISODate(date));
                const isDisabled = isPast || isBooked;
                const isSelected = selected !== null && isSameDay(date, selected);
                return (
                  <button
                    key={i}
                    type="button"
                    disabled={isDisabled}
                    aria-label={
                      isBooked ? `${formatDisplay(date)} — already booked` : formatDisplay(date)
                    }
                    onClick={() => {
                      setSelected(date);
                      setOpen(false);
                    }}
                    className={`relative mx-auto flex h-8 w-8 items-center justify-center rounded-full text-[13px] transition-colors duration-300 ${
                      isSelected
                        ? "bg-parchment text-ink"
                        : isDisabled
                          ? `cursor-not-allowed text-stone-deep/50 ${isBooked ? "line-through decoration-stone-deep/70" : ""}`
                          : "text-parchment-dim hover:bg-parchment/[0.1] hover:text-parchment"
                    }`}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>

            {selected && (
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="mt-4 text-[11px] tracking-[0.16em] uppercase text-stone-dim transition-colors duration-300 hover:text-parchment"
              >
                Clear date
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
