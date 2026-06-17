"use client";

import { usePathname } from "next/navigation";

const TITLES: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/appointments": "Appointments",
  "/admin/customers": "Customers",
  "/admin/services": "Services",
  "/admin/gallery": "Gallery",
  "/admin/reviews": "Reviews",
  "/admin/surveys": "Satisfaction Surveys",
  "/admin/settings": "Settings",
};

export function AdminHeader() {
  const pathname = usePathname();
  const title = TITLES[pathname] ?? "Dashboard";

  return (
    <header className="sticky top-0 z-10 flex items-center gap-4 border-b border-line bg-ink/80 px-7 py-[18px] backdrop-blur-md">
      <h1 className="font-heading text-[22px] font-bold">{title}</h1>
      <div className="ml-auto flex items-center gap-3">
        <div className="flex w-[220px] items-center gap-2 rounded-[10px] border border-line bg-surface px-3.5 py-2.5">
          <svg viewBox="0 0 24 24" fill="none" stroke="#5b6577" strokeWidth="1.7" width="16" height="16">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4-4" strokeLinecap="round" />
          </svg>
          <span className="text-[13px] text-faint">Search…</span>
        </div>
        <div className="relative flex h-10 w-10 items-center justify-center rounded-[11px] border border-line bg-surface">
          <svg viewBox="0 0 24 24" fill="none" stroke="#A8B3C5" strokeWidth="1.7" width="18" height="18">
            <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6M9.5 20a2.5 2.5 0 0 0 5 0" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="absolute right-[10px] top-[9px] h-[7px] w-[7px] rounded-full bg-brand-light" />
        </div>
      </div>
    </header>
  );
}
