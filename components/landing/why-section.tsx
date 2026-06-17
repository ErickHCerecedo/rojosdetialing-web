"use client";

import { WHY } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export function WhySection() {
  const { t, lang } = useLanguage();

  return (
    <section id="why" className="mx-auto max-w-[1280px] px-5 py-[100px] md:px-7">
      <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[2px] text-brand-light">{t.why.kicker}</div>
      <h2 className="mb-3.5 max-w-[720px] font-heading text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.08] tracking-[-1px]">
        {t.why.title}
      </h2>
      <p className="mb-12 max-w-[560px] text-[17px] leading-relaxed text-muted-foreground">{t.why.sub}</p>
      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {WHY.map((w, i) => (
          <div
            key={i}
            className="rounded-[18px] border border-line bg-surface p-7 transition-all hover:-translate-y-1 hover:border-[#2b3a55]"
          >
            <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-[14px] border border-[rgba(29,140,255,.3)] bg-[rgba(0,102,255,.1)] text-2xl">
              {w.icon}
            </div>
            <h3 className="mb-2.5 font-heading text-[19px] font-bold">{w.title[lang]}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{w.desc[lang]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
