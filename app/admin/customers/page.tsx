import { CUSTOMERS } from "@/lib/data";

export default function AdminCustomersPage() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {CUSTOMERS.map((c) => (
        <div key={c.email} className="flex items-center gap-3.5 rounded-2xl border border-line bg-surface p-5">
          <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-light font-heading text-lg font-bold">
            {c.initial}
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[15px] font-semibold">{c.name}</div>
            <div className="overflow-hidden truncate text-xs text-faint">{c.email}</div>
          </div>
          <div className="shrink-0 text-right">
            <div className="font-heading text-[15px] font-bold text-brand-light">{c.spent}</div>
            <div className="text-xs text-faint">{c.visits}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
