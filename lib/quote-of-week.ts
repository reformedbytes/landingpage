import { quotes, type Quote } from "@/lib/data/quotes";

/**
 * Deterministic "quote of the week" — picks an index based on the current
 * ISO week number so the homepage feature rotates automatically without a
 * database, cron job, or manual update.
 */
function getIsoWeekNumber(date: Date): number {
  const target = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  const dayNumber = (target.getUTCDay() + 6) % 7;
  target.setUTCDate(target.getUTCDate() - dayNumber + 3);
  const firstThursday = new Date(Date.UTC(target.getUTCFullYear(), 0, 4));
  const firstDayNumber = (firstThursday.getUTCDay() + 6) % 7;
  firstThursday.setUTCDate(firstThursday.getUTCDate() - firstDayNumber + 3);
  return (
    1 +
    Math.round(
      (target.getTime() - firstThursday.getTime()) / (7 * 24 * 60 * 60 * 1000)
    )
  );
}

export function getQuoteOfWeek(date: Date = new Date()): Quote {
  const week = getIsoWeekNumber(date) + date.getFullYear() * 53;
  const index = week % quotes.length;
  return quotes[index];
}
