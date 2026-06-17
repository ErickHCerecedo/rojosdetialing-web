import Image from "next/image";
import { SERVICES } from "@/lib/data";
import { money } from "@/lib/format";

function PhoneFrame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative h-[680px] w-[320px] overflow-hidden rounded-[46px] border-[11px] border-[#18181b] bg-ink shadow-[0_30px_80px_rgba(0,0,0,.6),0_0_0_1px_#232733]">
        <div className="absolute left-1/2 top-0 z-[5] h-[26px] w-[120px] -translate-x-1/2 rounded-b-2xl bg-[#18181b]" />
        <div className="h-full overflow-hidden">{children}</div>
      </div>
      <span className="text-[13px] font-semibold text-faint">{label}</span>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex justify-between px-[18px] pb-2 pt-3.5 text-xs font-semibold text-white">
      <span>9:41</span>
      <span>5G &nbsp; 100%</span>
    </div>
  );
}

export default function MobilePreviewPage() {
  const popular = SERVICES.find((s) => s.popular)!;
  const others = SERVICES.filter((s) => !s.popular);

  return (
    <section className="mx-auto max-w-[1280px] px-5 py-14 md:px-7">
      <div className="mb-12 text-center">
        <div className="mb-3 text-[13px] font-bold uppercase tracking-[2px] text-brand-light">
          Responsive Mobile Views
        </div>
        <h1 className="font-heading text-[clamp(28px,4vw,40px)] font-extrabold tracking-[-1px]">
          The full experience, optimized for the phone.
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        <PhoneFrame label="Home">
          <StatusBar />
          <div className="flex items-center justify-between px-[18px] py-2">
            <div className="flex items-center gap-2">
              <Image src="/logo.jpg" alt="" width={30} height={30} className="h-[30px] w-[30px] rounded-lg border border-line object-cover" />
              <span className="font-heading text-[13px] font-extrabold">
                ROJOS<span className="text-brand-light"> DETAIL</span>
              </span>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" width="20" height="20">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </div>
          <div className="placeholder-art relative mx-3.5 my-2 h-[520px] overflow-hidden rounded-[22px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(29,140,255,.3),transparent_60%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 px-5 py-6">
              <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[rgba(29,140,255,.35)] bg-[rgba(0,102,255,.12)] px-2.5 py-1">
                <span className="text-[10px] text-brand-light">★★★★★</span>
                <span className="text-[10px] font-semibold text-[#dbe4f0]">4.9</span>
              </div>
              <h2 className="mb-3 font-heading text-[28px] font-extrabold leading-[1.05] tracking-[-1px]">
                Premium Mobile Detailing <span className="text-brand-light">in San Diego</span>
              </h2>
              <p className="mb-[18px] text-[13px] leading-relaxed text-muted-foreground">
                Professional detailing delivered directly to your home or workplace.
              </p>
              <button className="w-full rounded-[13px] bg-gradient-to-br from-brand to-brand-light py-3.5 font-heading text-[15px] font-bold text-white shadow-[0_8px_24px_rgba(0,102,255,.45)]">
                Book Your Detail
              </button>
            </div>
          </div>
        </PhoneFrame>

        <PhoneFrame label="Services">
          <div className="px-3.5">
            <StatusBar />
            <div className="px-1 py-4">
              <div className="mb-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-brand-light">Our Services</div>
              <h2 className="font-heading text-2xl font-extrabold tracking-[-0.5px]">Packages</h2>
            </div>
            <div className="flex flex-col gap-3">
              {[others[0], popular, others[1]].map((s) => (
                <div
                  key={s.id}
                  className={`relative rounded-2xl p-[18px] ${
                    s.popular ? "border border-brand-light bg-surface shadow-[0_0_26px_rgba(0,102,255,.2)]" : "border border-line bg-surface"
                  }`}
                >
                  {s.popular && (
                    <div className="absolute right-3.5 top-3.5 rounded-full bg-gradient-to-br from-brand to-brand-light px-2 py-[3px] text-[9px] font-bold uppercase text-white">
                      Most Popular
                    </div>
                  )}
                  <h3 className="mb-1.5 font-heading text-base font-bold">{s.name.en}</h3>
                  <p className="mb-3.5 text-xs leading-snug text-muted-foreground">{s.desc.en}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-xl font-extrabold">{money(s.price)}</span>
                    <button className="rounded-[10px] bg-gradient-to-br from-brand to-brand-light px-[18px] py-2 font-heading text-[13px] font-bold text-white">
                      Book
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PhoneFrame>

        <PhoneFrame label="Booking">
          <div className="relative h-full px-4">
            <StatusBar />
            <div className="py-2.5 pb-[18px] text-center">
              <h2 className="font-heading text-xl font-extrabold tracking-[-0.5px]">Book Your Detail</h2>
            </div>
            <div className="mb-6 flex items-center justify-center gap-[7px]">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="flex items-center gap-[7px]">
                  <div
                    className={`flex h-[26px] w-[26px] items-center justify-center rounded-full font-heading text-xs font-bold ${
                      n === 1 ? "bg-gradient-to-br from-brand to-brand-light" : "border border-line bg-surface text-faint"
                    }`}
                  >
                    {n}
                  </div>
                  {n < 4 && <div className="h-[2px] w-[18px] bg-line" />}
                </div>
              ))}
            </div>
            <h3 className="mb-4 font-heading text-[17px] font-bold">Select your service</h3>
            <div className="flex flex-col gap-2.5">
              {[popular, others[1], others[0]].map((s, i) => (
                <div
                  key={s.id}
                  className={`rounded-[14px] p-[15px] ${
                    i === 0 ? "border border-brand-light bg-[rgba(0,102,255,.07)] shadow-[0_0_22px_rgba(0,102,255,.18)]" : "border border-line bg-surface"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-[15px] font-bold">{s.name.en}</span>
                    <span className={`font-heading text-base font-extrabold ${i === 0 ? "text-brand-light" : ""}`}>{money(s.price)}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="absolute inset-x-4 bottom-[22px] rounded-[13px] bg-gradient-to-br from-brand to-brand-light py-3.5 font-heading text-[15px] font-bold text-white shadow-[0_8px_24px_rgba(0,102,255,.45)]">
              Continue
            </button>
          </div>
        </PhoneFrame>
      </div>
    </section>
  );
}
