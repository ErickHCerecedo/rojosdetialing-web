"use client";

import { REVIEWS } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export function ReviewsSection() {
  const { t, lang } = useLanguage();

  return (
    <section id="reviews" className="mx-auto max-w-[1280px] px-5 py-[100px] md:px-7">
      <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[2px] text-brand-light">{t.reviews.kicker}</div>
      <h2 className="mb-3.5 max-w-[720px] font-heading text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.08] tracking-[-1px]">
        {t.reviews.title}
      </h2>
      <p className="mb-12 max-w-[560px] text-[17px] leading-relaxed text-muted-foreground">{t.reviews.sub}</p>

      <div className="mb-9 grid grid-cols-1 gap-[18px] sm:grid-cols-3">
        {[
          { value: "4.9", stars: true, label: t.reviews.avg },
          { value: "500+", stars: false, label: t.reviews.total },
          { value: "72%", stars: false, label: t.reviews.repeat },
        ].map((m) => (
          <div
            key={m.label}
            className="rounded-[18px] border border-line-2 bg-[linear-gradient(135deg,rgba(0,102,255,.12),rgba(16,16,16,.4))] p-7 text-center"
          >
            <div className="font-heading text-[42px] font-extrabold leading-none">{m.value}</div>
            <div className="my-2 h-[15px] text-[15px] text-brand-light">{m.stars ? "★★★★★" : ""}</div>
            <div className="text-sm text-muted-foreground">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
        {REVIEWS.map((r, i) => (
          <div key={i} className="flex flex-col rounded-[18px] border border-line bg-surface p-[26px]">
            <div className="mb-3.5 text-base tracking-[2px] text-brand-light">{"★★★★★".slice(0, r.stars)}</div>
            <p className="mb-[22px] flex-1 text-[15px] leading-relaxed text-[#dbe4f0]">{r.text[lang]}</p>
            <div className="flex items-center gap-3">
              <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-light font-heading text-[17px] font-bold text-white">
                {r.name[0]}
              </div>
              <div>
                <div className="text-[15px] font-bold">{r.name}</div>
                <div className="text-[13px] text-muted-foreground">{r.vehicle}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
