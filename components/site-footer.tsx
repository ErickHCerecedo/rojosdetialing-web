"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line bg-surface-3">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-5 py-[54px] pb-[90px] md:grid-cols-[1.6fr_1fr_1fr] md:px-7">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Rojos Detail"
              width={44}
              height={44}
              className="h-11 w-11 rounded-[12px] border border-line object-cover"
            />
            <span className="font-heading text-[19px] font-extrabold">
              ROJOS<span className="text-brand-light"> DETAIL</span>
            </span>
          </div>
          <p className="mb-[18px] max-w-[300px] text-sm leading-relaxed text-muted-foreground">{t.footer.tagline}</p>
          <div className="flex gap-2.5">
            <a
              href="https://instagram.com/rojo_sdetailing"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-[11px] border border-line bg-surface text-muted-foreground transition-all hover:border-brand-light hover:text-brand-light"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="20" height="20">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a
              href="tel:7604103756"
              className="flex h-10 w-10 items-center justify-center rounded-[11px] border border-line bg-surface text-muted-foreground transition-all hover:border-brand-light hover:text-brand-light"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11 11 0 0 0 3.4.55 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .55 3.4 1 1 0 0 1-.24 1z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <div className="mb-4 font-heading text-sm font-bold text-white">{t.footer.quick}</div>
          <div className="flex flex-col gap-2.5">
            <Link href="/#services" className="text-sm text-muted-foreground transition-colors hover:text-brand-light">
              {t.nav.services}
            </Link>
            <Link href="/#gallery" className="text-sm text-muted-foreground transition-colors hover:text-brand-light">
              {t.nav.gallery}
            </Link>
            <Link href="/#reviews" className="text-sm text-muted-foreground transition-colors hover:text-brand-light">
              {t.nav.reviews}
            </Link>
            <Link href="/#faq" className="text-sm text-muted-foreground transition-colors hover:text-brand-light">
              {t.nav.faq}
            </Link>
          </div>
        </div>
        <div>
          <div className="mb-4 font-heading text-sm font-bold text-white">{t.footer.contact}</div>
          <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
            <span>760 410 3756</span>
            <span>@rojo_sdetailing</span>
            <span>San Diego, CA</span>
          </div>
        </div>
      </div>
      <div className="border-t border-line px-5 py-[22px] text-center text-[13px] text-faint">
        © 2026 Rojos Detail. {t.footer.rights}
      </div>
    </footer>
  );
}
