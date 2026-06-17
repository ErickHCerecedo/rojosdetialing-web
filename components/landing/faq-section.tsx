"use client";

import { useState } from "react";
import { FAQS } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export function FaqSection() {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState<number>(-1);

  return (
    <div className="border-t border-line bg-surface-3">
      <section id="faq" className="mx-auto max-w-[880px] px-5 py-[100px] md:px-7">
        <div className="mb-3.5 text-center text-[13px] font-bold uppercase tracking-[2px] text-brand-light">
          {t.faq.kicker}
        </div>
        <h2 className="mb-3.5 text-center font-heading text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.08] tracking-[-1px]">
          {t.faq.title}
        </h2>
        <p className="mb-11 text-center text-[17px] leading-relaxed text-muted-foreground">{t.faq.sub}</p>
        <div className="flex flex-col gap-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="overflow-hidden rounded-[14px] border border-line bg-surface">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-heading text-base font-semibold text-white">{f.q[lang]}</span>
                  <span
                    className={`text-[24px] font-light leading-none transition-transform ${
                      isOpen ? "rotate-45 text-brand-light" : "text-muted-foreground"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "260px" : "0px", opacity: isOpen ? 1 : 0 }}
                >
                  <p className="px-6 pb-[22px] text-[15px] leading-relaxed text-muted-foreground">{f.a[lang]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
