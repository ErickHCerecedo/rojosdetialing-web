"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { AdminSidebar } from "./sidebar";
import { AdminHeader } from "./header";

export function ConsoleShell({ children }: { children: React.ReactNode }) {
  const { token, ready } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (!ready) return;
    if (!token && !isLoginPage) router.replace("/admin/login");
    if (token && isLoginPage) router.replace("/admin");
  }, [token, ready, isLoginPage, router]);

  if (!ready) return <div className="min-h-screen bg-ink" />;

  if (isLoginPage) return <>{children}</>;

  if (!token) return null;

  return (
    <div className="flex min-h-screen bg-ink">
      <AdminSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <AdminHeader />
        <div className="flex-1 p-7">{children}</div>
      </div>
    </div>
  );
}
