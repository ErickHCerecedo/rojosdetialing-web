const inputClasses =
  "w-full rounded-[11px] border border-line bg-surface-2 px-[15px] py-3 text-[15px] text-white outline-none focus:border-brand-light";

export default function AdminSettingsPage() {
  return (
    <div className="flex max-w-[560px] flex-col gap-[18px] rounded-2xl border border-line bg-surface p-7">
      <div>
        <label className="mb-1.5 block text-[13px] text-muted-foreground">Business Name</label>
        <input defaultValue="Rojos Detail" className={inputClasses} />
      </div>
      <div className="grid grid-cols-2 gap-3.5">
        <div>
          <label className="mb-1.5 block text-[13px] text-muted-foreground">Phone</label>
          <input defaultValue="760 410 3756" className={inputClasses} />
        </div>
        <div>
          <label className="mb-1.5 block text-[13px] text-muted-foreground">Service Radius (mi)</label>
          <input defaultValue="25" className={inputClasses} />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-[13px] text-muted-foreground">Deposit Percentage</label>
        <input defaultValue="50%" className={inputClasses} />
      </div>
      <button className="self-start rounded-xl bg-gradient-to-br from-brand to-brand-light px-7 py-3.5 font-heading text-[15px] font-bold text-white shadow-[0_6px_22px_rgba(0,102,255,.4)]">
        Save Changes
      </button>
    </div>
  );
}
