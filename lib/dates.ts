import type { Lang } from "./types";

export interface DateOption {
  key: string;
  dow: string;
  day: number;
  mon: string;
}

const DOW: Record<Lang, string[]> = {
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  es: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
};

const MON: Record<Lang, string[]> = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  es: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
};

export function buildDates(lang: Lang, count = 10): DateOption[] {
  const out: DateOption[] = [];
  const now = new Date();
  for (let i = 1; i <= count; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    out.push({
      key: d.toISOString().slice(0, 10),
      dow: DOW[lang][d.getDay()],
      day: d.getDate(),
      mon: MON[lang][d.getMonth()],
    });
  }
  return out;
}
