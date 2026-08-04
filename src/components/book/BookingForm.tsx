"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Reveal from "@/components/home/Reveal";
import CalendarField from "./CalendarField";

const EVENT_TYPES = [
  "Concert or gig",
  "Festival",
  "Private event",
  "Portrait session",
  "Something else",
];

type Status = "idle" | "submitting" | "success" | "error";
type ErrorKind = "network" | "server" | null;

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorKind, setErrorKind] = useState<ErrorKind>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorKind(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const params = new URLSearchParams();
    data.forEach((value, key) => params.append(key, value.toString()));

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      if (!res.ok) {
        setErrorKind("server");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setErrorKind("network");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <Reveal
        size="small"
        role="status"
        aria-live="polite"
        className="flex min-h-[360px] flex-col justify-center gap-4"
      >
        <p className="text-xs tracking-[0.32em] uppercase text-sage">
          Enquiry sent
        </p>
        <h2 className="font-display font-light text-3xl leading-[1.1] text-parchment sm:text-4xl">
          Thank you. I&apos;ll reply within two days.
        </h2>
      </Reveal>
    );
  }

  return (
    <Reveal size="small">
      <form
        onSubmit={handleSubmit}
        aria-busy={status === "submitting"}
        className="flex flex-col gap-9"
      >
        <p className="hidden">
          <label>
            Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <Field label="Your name" name="name" type="text" required />
          <Field label="Email" name="email" type="email" required />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <Field label="Phone / WhatsApp" name="phone" type="tel" />
          <SelectField label="What kind of event?" name="eventType" options={EVENT_TYPES} required />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <CalendarField label="Date" name="date" />
          <Field label="Location" name="location" type="text" placeholder="City, venue" />
        </div>

        <TextareaField
          label="Tell me about the occasion"
          name="message"
          required
          placeholder="What's happening, who's involved, what you're hoping to come away with."
        />

        {status === "error" && (
          <p role="alert" className="text-sm text-[#c98a6b]">
            {errorKind === "network"
              ? "Couldn't reach the server — check your connection and try again, or email "
              : "Something went wrong sending that — please try again, or email "}
            <a href="mailto:hubristicdonkey@gmail.com" className="underline">
              hubristicdonkey@gmail.com
            </a>
            .
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-block w-fit rounded-full bg-parchment px-11 py-[19px] text-xs tracking-[0.2em] uppercase text-ink transition-all duration-700 hover:-translate-y-1 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {status === "submitting" ? "Sending…" : "Send enquiry"}
        </button>
      </form>
    </Reveal>
  );
}

function fieldClasses() {
  return "w-full border-0 border-b border-parchment/20 bg-transparent pb-3 font-light text-[1.02rem] text-parchment placeholder:text-stone-dim/60 outline-none transition-colors duration-500 focus:border-parchment";
}

function labelClasses() {
  return "mb-2.5 block text-xs tracking-[0.2em] uppercase text-stone-dim";
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className={labelClasses()}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={fieldClasses()}
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className={labelClasses()}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className={`${fieldClasses()} appearance-none`}
      >
        <option value="" disabled className="bg-ink text-stone-dim">
          Select one
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-ink text-parchment">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextareaField({
  label,
  name,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className={labelClasses()}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        placeholder={placeholder}
        rows={4}
        className={`${fieldClasses()} resize-none`}
      />
    </div>
  );
}
