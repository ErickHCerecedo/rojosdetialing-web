"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-line"
    >
      <div className="placeholder-art absolute inset-0" />
      <div className="absolute inset-0 hidden items-center justify-end pr-[6%] lg:flex">
        <span className="font-mono text-[13px] tracking-[1px] text-[#39435a]">
          {"// hero — cinematic detailed vehicle"}
        </span>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,.97)_0%,rgba(5,5,5,.86)_38%,rgba(5,5,5,.35)_75%,rgba(5,5,5,.55)_100%)]" />
      <div className="absolute -top-[10%] right-[8%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(29,140,255,.28),transparent_60%)] blur-[10px]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative z-[2] mx-auto w-full max-w-[1280px] px-5 py-[60px] md:px-7">
        <div className="max-w-[680px]">
          <div className="mb-[26px] inline-flex items-center gap-2.5 rounded-full border border-[rgba(29,140,255,.35)] bg-[rgba(0,102,255,.1)] px-4 py-2">
            <span className="text-[13px] tracking-[0.5px] text-brand-light">★★★★★</span>
            <span className="text-[13px] font-semibold text-[#dbe4f0]">{t.hero.badge}</span>
          </div>
          <h1 className="mb-[22px] font-heading text-[clamp(40px,6vw,72px)] font-extrabold leading-[1.03] tracking-[-1.5px]">
            {t.hero.title1}
            <br />
            <span className="bg-[linear-gradient(120deg,#0066FF,#1D8CFF_60%,#7db8ff)] bg-clip-text text-transparent">
              {t.hero.title2}
            </span>
          </h1>
          <p className="mb-[38px] max-w-[520px] text-[19px] leading-[1.55] text-muted-foreground">
            {t.hero.sub}
          </p>
          <div className="mb-[54px] flex flex-wrap gap-3.5">
            <Link
              href="/booking"
              className="rounded-[13px] bg-gradient-to-br from-brand to-brand-light px-[30px] py-4 font-heading text-base font-bold text-white shadow-[0_8px_30px_rgba(0,102,255,.45)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,102,255,.65)]"
            >
              {t.hero.primary}
            </Link>
            <a
              href="#services"
              className="inline-flex items-center rounded-[13px] border border-[#2a2f3a] bg-white/[0.02] px-[30px] py-4 font-heading text-base font-bold text-white transition-all hover:border-brand-light hover:bg-[rgba(0,102,255,.08)]"
            >
              {t.hero.secondary}
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-[30px]">
            <div>
              <div className="flex items-center gap-2 font-heading text-[26px] font-extrabold text-white">
                4.9 <span className="text-base text-brand-light">★★★★★</span>
              </div>
              <div className="mt-[3px] text-[13px] text-muted-foreground">{t.hero.s1}</div>
            </div>
            <div className="h-[42px] w-px bg-line" />
            <div>
              <div className="font-heading text-[26px] font-extrabold text-white">500+</div>
              <div className="mt-[3px] text-[13px] text-muted-foreground">{t.hero.s2}</div>
            </div>
            <div className="h-[42px] w-px bg-line" />
            <div>
              <div className="font-heading text-[26px] font-extrabold text-white">100%</div>
              <div className="mt-[3px] text-[13px] text-muted-foreground">{t.hero.s3}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
