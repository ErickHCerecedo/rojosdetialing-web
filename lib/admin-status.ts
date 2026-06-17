export function statusColor(status: string): { color: string; bg: string } {
  switch (status) {
    case "Confirmed":
    case "Approved":
      return { color: "#3ddc84", bg: "rgba(61,220,132,.12)" };
    case "In Progress":
      return { color: "#1D8CFF", bg: "rgba(29,140,255,.14)" };
    case "Pending":
      return { color: "#f5a623", bg: "rgba(245,166,35,.12)" };
    case "Completed":
    default:
      return { color: "#8b95a7", bg: "rgba(139,149,167,.12)" };
  }
}
