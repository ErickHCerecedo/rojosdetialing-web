"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { adminLogout } from "@/lib/api";

const NAV = [
  {
    href: "/admin",
    label: "Dashboard",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="18" height="18">
        <rect x="3" y="3" width="7" height="9" rx="1.5" />
        <rect x="14" y="3" width="7" height="5" rx="1.5" />
        <rect x="14" y="11" width="7" height="10" rx="1.5" />
        <rect x="3" y="15" width="7" height="6" rx="1.5" />
      </svg>
    ),
  },
  {
    href: "/admin/appointments",
    label: "Appointments",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="18" height="18">
        <rect x="4" y="5" width="16" height="16" rx="2" />
        <path d="M4 9.5h16M8 3v4M16 3v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/admin/customers",
    label: "Customers",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="18" height="18">
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3 20a6 6 0 0 1 12 0M16 6a3 3 0 0 1 0 6M18 20a6 6 0 0 0-3-5.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/admin/services",
    label: "Services",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="18" height="18">
        <path d="M3 11l8-8 10 10-8 8z" strokeLinejoin="round" />
        <circle cx="8" cy="8" r="1.3" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: "/admin/gallery",
    label: "Gallery",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="18" height="18">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 16l5-4 4 3 4-5 5 6" strokeLinejoin="round" />
        <circle cx="8.5" cy="9" r="1.4" />
      </svg>
    ),
  },
  {
    href: "/admin/reviews",
    label: "Reviews",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="18" height="18">
        <path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8L3.5 9.2l5.9-.9z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/admin/surveys",
    label: "Surveys",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="18" height="18">
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/admin/settings",
    label: "Settings",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="18" height="18">
        <circle cx="12" cy="12" r="3.2" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, token, logout } = useAuth();

  async function handleLogout() {
    if (token) await adminLogout(token);
    logout();
    router.replace("/admin/login");
  }

  const initial = user?.name?.charAt(0).toUpperCase() ?? "R";

  return (
    <aside className="sticky top-0 flex h-screen w-[248px] shrink-0 flex-col border-r border-line bg-surface-2 p-4">
      <div className="mb-3 flex items-center gap-2.5 border-b border-line px-2 pb-[22px]">
        <Image src="/logo.jpg" alt="Rojos" width={38} height={38} className="h-[38px] w-[38px] rounded-[10px] border border-line object-cover" />
        <div>
          <div className="font-heading text-[15px] font-extrabold leading-none">ROJOS</div>
          <div className="mt-0.5 text-[11px] text-faint">Admin Console</div>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {NAV.map((item) => {
          const active = item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-[11px] px-3.5 py-2.5 text-sm font-semibold transition-all ${
                active
                  ? "bg-[linear-gradient(135deg,rgba(0,102,255,.2),rgba(29,140,255,.08))] text-white shadow-[inset_0_0_0_1px_rgba(29,140,255,.35)]"
                  : "text-faint hover:text-white"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-2 flex flex-col gap-2">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2.5 rounded-[11px] px-3.5 py-2.5 text-sm font-semibold text-faint transition-all hover:bg-red-500/10 hover:text-red-400"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="18" height="18">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Sign out
        </button>

        <div className="flex items-center gap-2.5 rounded-xl border border-line bg-surface p-2.5">
          <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-light font-heading text-sm font-bold">
            {initial}
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[13px] font-semibold">{user?.name ?? "Admin"}</div>
            <div className="overflow-hidden truncate text-[11px] text-faint">{user?.email ?? ""}</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
