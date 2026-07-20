export type QuoteCategory =
  | "Theology"
  | "Leadership"
  | "Engineering"
  | "Wisdom"
  | "Craftsmanship"
  | "Work";

export interface Quote {
  id: string;
  text: string;
  author: string;
  source?: string;
  tags: QuoteCategory[];
  note?: string;
}

export const quotes: Quote[] = [
  {
    id: "kuyper-sovereignty",
    text: "There is not one square inch in the whole domain of our human existence over which Christ, who is Sovereign over all, does not cry: Mine.",
    author: "Abraham Kuyper",
    source: "Inaugural address, Free University of Amsterdam, 1880",
    tags: ["Theology", "Work"],
  },
  {
    id: "knuth-premature",
    text: "Premature optimization is the root of all evil.",
    author: "Donald Knuth",
    source: "Structured Programming with go to Statements",
    tags: ["Engineering", "Wisdom"],
  },
  {
    id: "schaeffer-tools",
    text: "There are no little people and no little places, important only to make show, or to be a moving stair to fame; but everywhere our life touches other lives.",
    author: "Francis Schaeffer",
    source: "No Little People",
    tags: ["Theology", "Wisdom"],
  },
  {
    id: "torvalds-simplicity",
    text: "Given enough eyeballs, all bugs are shallow.",
    author: "Linus Torvalds",
    source: "The Cathedral and the Bazaar",
    tags: ["Engineering", "Work"],
  },
  {
    id: "sayers-craft",
    text: "Work is not, primarily, a thing one does to live, but the thing one lives to do.",
    author: "Dorothy L. Sayers",
    source: "Why Work?",
    tags: ["Craftsmanship", "Work"],
  },
  {
    id: "lewis-humility",
    text: "Humility is not thinking less of yourself, it is thinking of yourself less.",
    author: "C.S. Lewis",
    tags: ["Wisdom", "Leadership"],
  },
  {
    id: "hamming-important",
    text: "If you don't work on important problems, it's not likely that you'll do important work.",
    author: "Richard Hamming",
    source: "You and Your Research",
    tags: ["Engineering", "Wisdom"],
  },
  {
    id: "keller-stewardship",
    text: "Work is not a necessary evil, or something to escape, but part of what it means to be a full human being.",
    author: "Timothy Keller",
    source: "Every Good Endeavor",
    tags: ["Theology", "Work"],
  },
  {
    id: "dijkstra-simplicity",
    text: "Simplicity is prerequisite for reliability.",
    author: "Edsger W. Dijkstra",
    tags: ["Engineering", "Craftsmanship"],
  },
  {
    id: "drucker-leadership",
    text: "Management is doing things right; leadership is doing the right things.",
    author: "Peter Drucker",
    tags: ["Leadership", "Work"],
  },
  {
    id: "pirsig-quality",
    text: "The place to improve the world is first in one's own heart and head and hands.",
    author: "Robert M. Pirsig",
    source: "Zen and the Art of Motorcycle Maintenance",
    tags: ["Craftsmanship", "Wisdom"],
  },
  {
    id: "proverbs-diligence",
    text: "Do you see someone skilled in their work? They will serve before kings; they will not serve before officials of low rank.",
    author: "Proverbs 22:29",
    tags: ["Theology", "Craftsmanship"],
  },
];
