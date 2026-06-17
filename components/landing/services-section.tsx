"use client";

import Link from "next/link";
import { EXTRAS, SERVICES } from "@/lib/data";
import { durationLabel, money } from "@/lib/format";
import { useLanguage } from "@/lib/i18n";

export function ServicesSection() {
  const { t, lang } = useLanguage();

  return (
    <section id="services" className="mx-auto max-w-[1280px] px-5 py-[100px] md:px-7">
      <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[2px] text-brand-light">
        {t.services.kicker}
      </div>
      <h2 className="mb-3.5 max-w-[720px] font-heading text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.08] tracking-[-1px]">
        {t.services.title}
      </h2>
      <p className="mb-12 max-w-[560px] text-[17px] leading-relaxed text-muted-foreground">{t.services.sub}</p>

      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <div
            key={s.id}
            className="group relative flex flex-col overflow-hidden rounded-[18px] border border-line bg-surface p-[26px] transition-all hover:-translate-y-1.5 hover:border-[#2b3a55] hover:shadow-[0_18px_44px_rgba(0,0,0,.5)]"
          >
            {s.popular && (
              <>
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand to-brand-light" />
                <div className="absolute right-4 top-4 rounded-full bg-gradient-to-br from-brand to-brand-light px-[11px] py-[5px] text-[11px] font-bold uppercase tracking-[0.5px] text-white">
                  {t.services.popular}
                </div>
              </>
            )}
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[13px] border border-[rgba(29,140,255,.3)] bg-[rgba(0,102,255,.1)] text-2xl">
              {s.icon}
            </div>
            <h3 className="mb-2.5 font-heading text-xl font-bold">{s.name[lang]}</h3>
            <p className="mb-[22px] flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc[lang]}</p>
            <div className="mb-[18px] flex items-center gap-2 text-[13px] text-muted-foreground">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" width="15" height="15">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              {durationLabel(s.durationMin)}
            </div>
            <div className="flex items-end justify-between border-t border-line pt-[18px]">
              <div>
                <div className="text-xs text-faint">{t.services.from}</div>
                <div className="font-heading text-2xl font-extrabold">{money(s.price)}</div>
              </div>
              <Link
                href="/booking"
                className="rounded-[11px] bg-gradient-to-br from-brand to-brand-light px-5 py-[11px] font-heading text-sm font-bold text-white shadow-[0_6px_20px_rgba(0,102,255,.35)] transition-all hover:-translate-y-px hover:shadow-[0_8px_28px_rgba(0,102,255,.55)]"
              >
                {t.services.book}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[34px] rounded-[18px] border border-line bg-surface-3 p-[26px] md:p-7">
        <div className="mb-[18px] flex flex-wrap items-baseline gap-3">
          <h3 className="font-heading text-lg font-bold">{t.services.addTitle}</h3>
          <span className="text-sm text-faint">{t.services.addSub}</span>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {EXTRAS.map((e) => (
            <div
              key={e.id}
              className="flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-[9px]"
            >
              <span className="text-sm font-semibold text-[#dbe4f0]">{e.name[lang]}</span>
              <span className="text-[13px] font-bold text-brand-light">+{money(e.price)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
