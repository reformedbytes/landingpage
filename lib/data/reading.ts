export interface ReadingItem {
  title: string;
  author: string;
  note?: string;
  category: "Currently Reading" | "Recently Finished" | "Recommended";
}

export const reading: ReadingItem[] = [
  {
    title: "Every Good Endeavor",
    author: "Timothy Keller",
    note: "Re-reading the chapters on work as service.",
    category: "Currently Reading",
  },
  {
    title: "The Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    category: "Currently Reading",
  },
  {
    title: "Zen and the Art of Motorcycle Maintenance",
    author: "Robert M. Pirsig",
    note: "On quality as a way of seeing, not just a metric.",
    category: "Recently Finished",
  },
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    category: "Recently Finished",
  },
  {
    title: "Institutes of the Christian Religion",
    author: "John Calvin",
    category: "Recommended",
  },
  {
    title: "The Soul of a New Machine",
    author: "Tracy Kidder",
    category: "Recommended",
  },
  {
    title: "A Philosophy of Software Design",
    author: "John Ousterhout",
    category: "Recommended",
  },
];
