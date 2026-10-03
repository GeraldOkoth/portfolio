export function timeAgo(date) {
  const now = new Date();
  const past = new Date(date);
  const diffMs = now.getTime() - past.getTime();

  if (Number.isNaN(past.getTime())) return "Unknown";
  if (diffMs < 60_000) return "Just now";

  const diffMinutes = Math.floor(diffMs / 60_000);
  const diffHours = Math.floor(diffMs / 3_600_000);
  const diffDays = Math.floor(diffMs / 86_400_000);
  const formatUnit = (value, unit) =>
    `${value} ${unit}${value === 1 ? "" : "s"} ago`;

  if (diffMinutes < 60) return formatUnit(diffMinutes, "minute");
  if (diffHours < 24) return formatUnit(diffHours, "hour");
  if (diffDays < 7) return formatUnit(diffDays, "day");
  if (diffDays < 30) return formatUnit(Math.floor(diffDays / 7), "week");
  if (diffDays < 365) {
    return formatUnit(Math.min(11, Math.floor(diffDays / 30)), "month");
  }

  return formatUnit(Math.floor(diffDays / 365), "year");
}
