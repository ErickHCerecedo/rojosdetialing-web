"use client";

import { PROCESS } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export function ProcessSection() {
  const { t, lang } = useLanguage();

  return (
    <div className="border-y border-line bg-surface-3">
      <section className="mx-auto max-w-[1280px] px-5 py-[100px] md:px-7">
        <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[2px] text-brand-light">
          {t.process.kicker}
        </div>
        <h2 className="mb-3.5 max-w-[720px] font-heading text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.08] tracking-[-1px]">
          {t.process.title}
        </h2>
        <p className="mb-[54px] max-w-[560px] text-[17px] leading-relaxed text-muted-foreground">{t.process.sub}</p>
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-6">
          {PROCESS.map((p, i) => (
            <div key={i} className="relative rounded-2xl border border-line bg-surface px-5 py-6">
              <div className="mb-3.5 bg-gradient-to-br from-brand to-brand-light bg-clip-text font-heading text-[30px] font-extrabold text-transparent">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-2 font-heading text-[16px] font-bold leading-tight">{p.title[lang]}</h3>
              <p className="text-[13px] leading-relaxed text-muted-foreground">{p.desc[lang]}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
