"use client";

import { useState } from "react";
import { GALLERY } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import type { GalleryCategory } from "@/lib/types";

type FilterId = "all" | GalleryCategory;

export function GallerySection() {
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState<FilterId>("all");
  const [baPos, setBaPos] = useState(52);

  const filters: { id: FilterId; label: string }[] = [
    { id: "all", label: t.gallery.all },
    { id: "interior", label: t.gallery.interior },
    { id: "exterior", label: t.gallery.exterior },
    { id: "full", label: t.gallery.full },
    { id: "ceramic", label: t.gallery.ceramic },
  ];

  const items = GALLERY.filter((g) => filter === "all" || g.category === filter);

  return (
    <div className="border-y border-line bg-surface-3">
      <section id="gallery" className="mx-auto max-w-[1280px] px-5 py-[100px] md:px-7">
        <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[2px] text-brand-light">
          {t.gallery.kicker}
        </div>
        <h2 className="mb-3.5 max-w-[720px] font-heading text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.08] tracking-[-1px]">
          {t.gallery.title}
        </h2>
        <p className="mb-10 max-w-[560px] text-[17px] leading-relaxed text-muted-foreground">{t.gallery.sub}</p>

        <div className="relative h-[clamp(320px,52vw,520px)] select-none overflow-hidden rounded-[22px] border border-line-2 shadow-[0_24px_60px_rgba(0,0,0,.5)]">
          <div className="placeholder-art absolute inset-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(29,140,255,.22),transparent_60%)]" />
            <span className="font-mono text-sm tracking-[1px] text-[#3a4760]">{"// after — glossy detailed finish"}</span>
          </div>
          <div className="absolute right-[18px] top-[18px] rounded-full bg-[rgba(0,102,255,.85)] px-3.5 py-[7px] text-xs font-bold uppercase tracking-[1px] text-white backdrop-blur-sm">
            {t.gallery.after}
          </div>

          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - baPos}% 0 0)` }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-[repeating-linear-gradient(125deg,#0e0e0e_0,#0e0e0e_20px,#121212_20px,#121212_40px)] [filter:grayscale(.4)_brightness(.7)]">
              <span className="font-mono text-sm tracking-[1px] text-[#4a4a4a]">{"// before — dull & dirty"}</span>
            </div>
            <div className="absolute left-[18px] top-[18px] rounded-full border border-[#2a2a2a] bg-[rgba(20,20,20,.85)] px-3.5 py-[7px] text-xs font-bold uppercase tracking-[1px] text-[#cbd3df] backdrop-blur-sm">
              {t.gallery.before}
            </div>
          </div>

          <div
            className="pointer-events-none absolute top-0 bottom-0 w-[3px] -translate-x-1/2 bg-white shadow-[0_0_18px_rgba(0,102,255,.8)]"
            style={{ left: `${baPos}%` }}
          />
          <div
            className="pointer-events-none absolute top-1/2 flex h-[46px] w-[46px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand shadow-[0_4px_18px_rgba(0,0,0,.5)]"
            style={{ left: `${baPos}%` }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
              <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" />
            </svg>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={baPos}
            onChange={(e) => setBaPos(Number(e.target.value))}
            className="ba-range absolute inset-0 z-[5] m-0 h-full w-full"
            aria-label={t.gallery.drag}
          />
        </div>

        <div className="my-[34px] mb-6 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`whitespace-nowrap rounded-full border px-[18px] py-[9px] text-sm font-semibold transition-all ${
                filter === f.id
                  ? "border-transparent bg-gradient-to-br from-brand to-brand-light text-white"
                  : "border-line bg-transparent text-muted-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((g, i) => (
            <div
              key={i}
              className="group relative h-[170px] cursor-pointer overflow-hidden rounded-2xl border border-line bg-[repeating-linear-gradient(125deg,#0b0d13_0,#0b0d13_16px,#0e111a_16px,#0e111a_32px)] transition-all hover:scale-[1.02] hover:border-brand-light"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(29,140,255,.16),transparent_65%)]" />
              <div className="absolute left-[10px] top-[10px] rounded-full border border-[rgba(29,140,255,.3)] bg-[rgba(0,102,255,.12)] px-[9px] py-1 text-[10px] font-bold tracking-[1px] text-brand-light">
                {g.category.toUpperCase()}
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(5,5,5,.92)] to-transparent p-3.5 text-[13px] font-semibold text-[#dbe4f0]">
                {g.label[lang]}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
