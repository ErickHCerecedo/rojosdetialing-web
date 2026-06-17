export function money(n: number): string {
  return "$" + Number(n).toLocaleString("en-US");
}

export function durationLabel(min: number, lang: "en" | "es" = "en"): string {
  if (min < 60) return lang === "es" ? `${min} min` : `${min} min`;
  const hrs = min / 60;
  const label = hrs % 1 === 0 ? String(hrs) : hrs.toFixed(1);
  return lang === "es" ? `${label} hr` : `${label} hr`;
}
