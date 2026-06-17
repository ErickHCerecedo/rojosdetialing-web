"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n";

const NAV_ITEMS: { key: "home" | "services" | "gallery" | "why" | "reviews" | "faq" | "contact"; href: string }[] = [
  { key: "home", href: "/#home" },
  { key: "services", href: "/#services" },
  { key: "gallery", href: "/#gallery" },
  { key: "why", href: "/#why" },
  { key: "reviews", href: "/#reviews" },
  { key: "faq", href: "/#faq" },
  { key: "contact", href: "/#contact" },
];

export function SiteHeader() {
  const { t, lang, setLang } = useLanguage();
  const pathname = usePathname();
  const showNavMenu = pathname === "/";

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/72 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] items-center gap-7 px-5 py-3.5 md:px-7">
        <Link href="/" className="flex shrink-0 items-center gap-3 no-underline">
          <Image
            src="/logo.jpg"
            alt="Rojos Detail"
            width={42}
            height={42}
            className="h-[42px] w-[42px] rounded-[11px] border border-line object-cover shadow-[0_0_18px_rgba(0,102,255,.3)]"
          />
          <span className="font-heading text-[18px] font-extrabold leading-none tracking-[0.5px] text-white">
            ROJOS<span className="text-brand-light"> DETAIL</span>
          </span>
        </Link>

        {showNavMenu && (
          <nav className="ml-2 hidden items-center gap-1.5 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="rounded-[9px] px-3.5 py-2 text-sm font-semibold text-faint transition-all hover:bg-white/5 hover:text-white"
              >
                {t.nav[item.key]}
              </a>
            ))}
          </nav>
        )}

        <div className="ml-auto flex items-center gap-3.5">
          <div className="flex items-center rounded-[10px] border border-line bg-surface p-[3px]">
            <button
              onClick={() => setLang("en")}
              className={`rounded-[8px] px-3 py-1.5 text-[13px] font-bold transition-all ${
                lang === "en" ? "bg-gradient-to-br from-brand to-brand-light text-white" : "text-faint"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("es")}
              className={`rounded-[8px] px-3 py-1.5 text-[13px] font-bold transition-all ${
                lang === "es" ? "bg-gradient-to-br from-brand to-brand-light text-white" : "text-faint"
              }`}
            >
              ES
            </button>
          </div>
          <Link
            href="/booking"
            className="rounded-[11px] bg-gradient-to-br from-brand to-brand-light px-[22px] py-[11px] font-heading text-sm font-bold text-white shadow-[0_6px_24px_rgba(0,102,255,.4)] transition-all hover:-translate-y-px hover:shadow-[0_8px_32px_rgba(0,102,255,.6)]"
          >
            {t.nav.book}
          </Link>
        </div>
      </div>
    </header>
  );
}
