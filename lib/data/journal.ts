export interface JournalEntry {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date
  tags: string[];
  readingMinutes: number;
  body: string[];
}

export const journalEntries: JournalEntry[] = [
  {
    slug: "why-reformed-bytes",
    title: "Why Reformed Bytes",
    excerpt:
      "On starting an engineering journal at the intersection of craft and conviction — and why it took this long to build one.",
    date: "2026-06-02",
    tags: ["Reflections", "Craftsmanship"],
    readingMinutes: 4,
    body: [
      "I've wanted a place like this for a long time — somewhere to put the projects, half-finished experiments, and stray thoughts that don't belong anywhere else. Not a portfolio in the résumé sense, and not a blog in the content-calendar sense either. Closer to a workshop with the lights left on.",
      "The name is the whole thesis, really. Bytes because most of what's here is software: AI tooling, RF experiments, home-lab dashboards, the occasional Raspberry Pi project that outlives its original purpose. Reformed because the way I think about that work — what it's for, who it serves, how carefully it should be made — is shaped by a particular theological tradition, whether or not that shows up explicitly in any given post.",
      "I don't expect every reader to care about both halves equally, and that's fine. If you're here for the engineering, the faith will mostly stay in the background, informing tone rather than dominating it. If you're here for the theology, you'll find it applied to unusually specific problems like scanner-audio transcription and speaker firmware.",
      "Mostly, I just wanted somewhere to write things down before I forget how I solved them.",
    ],
  },
  {
    slug: "notes-on-sdr",
    title: "Notes on Getting Started with SDR",
    excerpt:
      "Software-defined radio has a steep learning curve and very little of it is about the radio. Some notes from the first month.",
    date: "2026-06-19",
    tags: ["RF", "SDR", "Home Lab"],
    readingMinutes: 7,
    body: [
      "Software-defined radio promises something simple: turn a cheap USB dongle into a general-purpose radio receiver, decode whatever you want in software. The promise mostly holds. The learning curve, though, is almost entirely conceptual rather than hands-on — sampling theory, IQ data, filters — before you decode a single useful signal.",
      "The first real hurdle wasn't hardware, it was vocabulary. Terms like decimation, aliasing, and quadrature sampling show up everywhere in SDR tooling, and skipping past them just delays the moment you get stuck later with no idea why.",
      "GNU Radio Companion ends up being the right tool once the concepts click — a visual flow-graph editor that makes the signal chain legible in a way that reading library docs never quite does.",
      "None of this is a substitute for just capturing signals and seeing what comes back. The gap between reading about SDR and doing SDR is one of the widest I've run into in a while.",
    ],
  },
  {
    slug: "stewardship-in-system-design",
    title: "Stewardship as a Design Constraint",
    excerpt:
      "What it looks like to treat compute, attention, and other people's time as things to be stewarded rather than spent.",
    date: "2026-07-05",
    tags: ["Architecture", "Reflections"],
    readingMinutes: 6,
    body: [
      "Most architecture decisions get framed as trade-offs between speed, cost, and correctness. That framing isn't wrong, but it's incomplete — it treats the resources being spent as neutral, when they rarely are.",
      "Stewardship, as a design constraint, asks a slightly different question: not just 'can we afford this,' but 'should we spend it this way.' Compute cycles, a user's attention, another engineer's time reading your code — all of it can be spent carelessly even when the budget technically allows it.",
      "In practice this shows up as small, unglamorous decisions: choosing a boring dependency over an exciting one because it costs less of someone else's future time; writing the comment that saves a future reader ten minutes; not shipping a notification just because you can.",
      "None of this is a system design methodology. It's closer to a posture — one more constraint sitting alongside performance and cost, quietly asking whether a decision is not just efficient, but well-ordered.",
    ],
  },
];

export const latestJournalEntries = journalEntries
  .slice()
  .sort((a, b) => (a.date < b.date ? 1 : -1))
  .slice(0, 3);

export function getJournalEntryBySlug(slug: string) {
  return journalEntries.find((e) => e.slug === slug);
}

export function getAllJournalTags() {
  return Array.from(new Set(journalEntries.flatMap((e) => e.tags))).sort();
}
