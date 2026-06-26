"use client";
import { useState } from "react";
import { Reveal } from "@/components/reveal";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    // TODO: wire to email provider / CRM
  }

  const inputCls =
    "w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/35 focus:border-white/30 focus:bg-white/5 focus:outline-none transition-all duration-200";

  return (
    <section id="contact" className="w-full bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left */}
          <Reveal className="flex flex-col justify-center">
            <h2 className="font-display text-5xl font-semibold leading-tight text-cream lg:text-6xl">
              Send a<br />
              <em className="italic text-gold">message</em>
            </h2>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/55">
              Be the first to access exclusive events, curated resources, and
              professional opportunities.
            </p>
            <p className="mt-12 text-xs uppercase tracking-[0.15em] text-cream/35">
              Website
            </p>
            <p className="mt-1 text-sm text-cream/80 hover:text-white transition-colors cursor-pointer">
              saplayaresidency.com
            </p>
          </Reveal>

          {/* Form */}
          <Reveal
            delay={0.12}
            from="right"
            className="rounded-[32px] border border-white/5 bg-[#0a1626] p-8 lg:p-12 shadow-2xl"
          >
            {sent ? (
              <div className="flex items-center justify-center rounded-2xl border border-gold/20 bg-navy-mid/50 p-16 text-center">
                <div>
                  <p className="font-display text-2xl italic text-gold">
                    Thank you.
                  </p>
                  <p className="mt-3 text-sm text-cream/60">
                    We&apos;ll be in touch shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-8 sm:grid-cols-2"
              >
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-semibold uppercase tracking-widest text-cream/40 pl-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={set("name")}
                    className={inputCls}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-semibold uppercase tracking-widest text-cream/40 pl-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={set("email")}
                    className={inputCls}
                  />
                </div>
                <div className="flex flex-col gap-3 sm:col-span-2">
                  <label className="text-[10px] font-semibold uppercase tracking-widest text-cream/40 pl-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+234 812-345-6789"
                    value={form.phone}
                    onChange={set("phone")}
                    className={inputCls}
                  />
                </div>
                <div className="flex flex-col gap-3 sm:col-span-2">
                  <label className="text-[10px] font-semibold uppercase tracking-widest text-cream/40 pl-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us more...."
                    value={form.message}
                    onChange={set("message")}
                    className={`${inputCls} resize-none`}
                  />
                </div>
                <div className="sm:col-span-2 flex flex-col gap-6 mt-2">
                  <p className="text-[10px] leading-relaxed text-cream/30">
                    By submitting, you consent to be contacted by a Saplaya
                    residency. Your information is handled with discretion.
                  </p>
                  <button
                    type="submit"
                    className="w-full rounded-3xl bg-[#fdf2e3] py-4 text-xs font-bold uppercase tracking-[0.1em] text-navy transition-all hover:bg-white active:scale-[0.98]"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
