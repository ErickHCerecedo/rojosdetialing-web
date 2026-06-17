"use client";

import { useState } from "react";
import { submitContactForm } from "@/lib/api";
import { useLanguage } from "@/lib/i18n";

const inputClasses =
  "rounded-[11px] border border-line bg-surface-2 px-4 py-3.5 text-[15px] text-white outline-none transition-colors focus:border-brand-light placeholder:text-faint";

export function ContactSection() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", phone: "", vehicle: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const ok = await submitContactForm(form);
    setStatus(ok ? "sent" : "idle");
    if (ok) setForm({ name: "", email: "", phone: "", vehicle: "", message: "" });
  };

  return (
    <section id="contact" className="mx-auto max-w-[1280px] px-5 py-[100px] md:px-7">
      <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[2px] text-brand-light">{t.contact.kicker}</div>
      <h2 className="mb-3.5 max-w-[640px] font-heading text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.08] tracking-[-1px]">
        {t.contact.title}
      </h2>
      <p className="mb-11 max-w-[520px] text-[17px] leading-relaxed text-muted-foreground">{t.contact.sub}</p>

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <form onSubmit={handleSubmit} className="rounded-[20px] border border-line bg-surface p-[30px]">
          <div className="mb-3.5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <input
              required
              placeholder={t.contact.name}
              value={form.name}
              onChange={update("name")}
              className={inputClasses}
            />
            <input
              required
              type="email"
              placeholder={t.contact.email}
              value={form.email}
              onChange={update("email")}
              className={inputClasses}
            />
          </div>
          <div className="mb-3.5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <input placeholder={t.contact.phone} value={form.phone} onChange={update("phone")} className={inputClasses} />
            <input placeholder={t.contact.vehicle} value={form.vehicle} onChange={update("vehicle")} className={inputClasses} />
          </div>
          <textarea
            placeholder={t.contact.message}
            rows={4}
            value={form.message}
            onChange={update("message")}
            className={`mb-[18px] w-full resize-y ${inputClasses}`}
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-[13px] bg-gradient-to-br from-brand to-brand-light py-4 font-heading text-base font-bold text-white shadow-[0_8px_28px_rgba(0,102,255,.4)] transition-all hover:-translate-y-px hover:shadow-[0_12px_38px_rgba(0,102,255,.6)] disabled:opacity-60"
          >
            {status === "sent" ? "✓" : status === "sending" ? "…" : t.contact.send}
          </button>
        </form>

        <div className="flex flex-col gap-3.5">
          <div className="flex gap-3">
            <a
              href="tel:7604103756"
              className="flex flex-1 flex-col items-center gap-2 rounded-[14px] border border-line bg-surface p-[18px] text-white no-underline transition-all hover:border-brand-light hover:bg-[rgba(0,102,255,.06)]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="#1D8CFF" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11 11 0 0 0 3.4.55 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .55 3.4 1 1 0 0 1-.24 1z" />
              </svg>
              <span className="text-[13px] font-semibold">{t.contact.call}</span>
            </a>
            <a
              href="sms:7604103756"
              className="flex flex-1 flex-col items-center gap-2 rounded-[14px] border border-line bg-surface p-[18px] text-white no-underline transition-all hover:border-brand-light hover:bg-[rgba(0,102,255,.06)]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="#1D8CFF" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                <path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12z" />
              </svg>
              <span className="text-[13px] font-semibold">{t.contact.text}</span>
            </a>
            <a
              href="mailto:hello@rojosdetail.com"
              className="flex flex-1 flex-col items-center gap-2 rounded-[14px] border border-line bg-surface p-[18px] text-white no-underline transition-all hover:border-brand-light hover:bg-[rgba(0,102,255,.06)]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="#1D8CFF" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              <span className="text-[13px] font-semibold">{t.contact.emailb}</span>
            </a>
          </div>
          <div className="placeholder-art relative h-[200px] overflow-hidden rounded-2xl border border-line">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(29,140,255,.2),transparent_60%)]" />
            <div className="absolute left-1/2 top-1/2 h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 rounded-[50%_50%_50%_0] bg-brand-light shadow-[0_0_24px_rgba(29,140,255,.9)] [rotate:-45deg]" />
            <div className="absolute bottom-3.5 left-3.5 font-mono text-xs text-faint">{"// map — San Diego County"}</div>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl border border-line bg-surface px-5 py-[18px]">
            <div className="flex items-center gap-3">
              <span className="w-[74px] text-[13px] text-faint">{t.contact.located}</span>
              <span className="text-[15px] font-semibold">San Diego, CA</span>
            </div>
            <div className="h-px bg-line" />
            <div className="flex items-center gap-3">
              <span className="w-[74px] text-[13px] text-faint">Phone</span>
              <span className="text-[15px] font-semibold">760 410 3756</span>
            </div>
            <div className="h-px bg-line" />
            <div className="flex items-center gap-3">
              <span className="w-[74px] text-[13px] text-faint">{t.contact.hours}</span>
              <span className="text-[15px] font-semibold">{t.contact.hoursVal}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
