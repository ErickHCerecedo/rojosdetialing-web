"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { useAuth } from "@/lib/auth-context";
import { adminLogin } from "@/lib/api";

export default function AdminLoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const result = await adminLogin(email, password);
      if (!result) {
        setError("Could not connect to server.");
        return;
      }
      login(result.token, result.user);
    } catch {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-4">
      <div className="w-full max-w-[400px]">
        <div className="mb-8 flex flex-col items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Rojos Detail"
            width={52}
            height={52}
            className="rounded-[14px] border border-line object-cover"
          />
          <div className="text-center">
            <div className="font-heading text-xl font-extrabold">ROJOS DETAIL</div>
            <div className="mt-0.5 text-sm text-faint">Admin Console</div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-line bg-surface p-7 shadow-[0_24px_64px_rgba(0,0,0,.5)]"
        >
          <h2 className="mb-6 font-heading text-lg font-bold">Sign in</h2>

          {error && (
            <div className="mb-4 rounded-[10px] border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-4">
            <div>
              <label className="mb-1.5 block text-[13px] text-muted-foreground">Email</label>
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-[11px] border border-line bg-surface-2 px-4 py-3 text-[15px] text-white outline-none transition-colors focus:border-brand-light"
                placeholder="owner@rojosdetail.com"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-[13px] text-muted-foreground">Password</label>
              <input
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-[11px] border border-line bg-surface-2 px-4 py-3 text-[15px] text-white outline-none transition-colors focus:border-brand-light"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-gradient-to-br from-brand to-brand-light py-3.5 font-heading text-[15px] font-bold text-white shadow-[0_6px_22px_rgba(0,102,255,.4)] transition-opacity disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
