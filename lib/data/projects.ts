export type ProjectStatus = "active" | "in-progress" | "planned" | "archived";

export type ProjectIcon =
  | "flame"
  | "trending-up"
  | "speaker"
  | "coffee"
  | "cpu"
  | "radio"
  | "sparkles";

export interface Project {
  slug: string;
  name: string;
  description: string;
  status: ProjectStatus;
  tech: string[];
  icon: ProjectIcon;
  /** Short uppercase label shown on the visual placeholder, e.g. "RF / SDR" */
  category: string;
  liveUrl?: string;
  featured?: boolean;
  body: string[];
}

export const projects: Project[] = [
  {
    slug: "birmingham-firemap",
    name: "Birmingham FireMap",
    description:
      "A live map of fire and emergency dispatch activity across the Birmingham metro, built on scanner audio, geocoding, and a fast tile-based frontend.",
    status: "active",
    tech: ["Next.js", "PostgreSQL", "Whisper", "Docker"],
    icon: "flame",
    category: "Mapping",
    featured: true,
    body: [
      "Birmingham FireMap started as a way to make sense of the constant stream of scanner traffic from local fire and EMS dispatch — audio that's public, but effectively unreadable unless you're listening live.",
      "A pipeline transcribes scanner audio with Whisper, extracts unit and location information, geocodes the result, and drops it onto a live map. The frontend is intentionally spare: a map, a timeline, and just enough detail to understand what's happening without becoming a scanner-junkie rabbit hole.",
      "The interesting engineering problems have mostly been about noise: transcription errors, ambiguous addresses, and figuring out how to be useful without being alarmist.",
    ],
  },
  {
    slug: "market-monitor",
    name: "Market Monitor",
    description:
      "A self-hosted dashboard that tracks markets and macro indicators I actually care about, without the noise of a consumer trading app.",
    status: "active",
    tech: ["Python", "PostgreSQL", "Docker"],
    icon: "trending-up",
    category: "Finance",
    featured: true,
    body: [
      "Most trading apps are built to maximize engagement, not understanding. Market Monitor is the opposite: a small set of Python jobs that pull the indicators I actually track, store them, and render them as a calm, static-feeling dashboard.",
      "No push notifications, no gamified colors, no recommendations — just the numbers, over time, in one place.",
    ],
  },
  {
    slug: "sonos-dashboard",
    name: "Sonos Dashboard",
    description:
      "A minimal control surface for a home Sonos system — now-playing state, zone grouping, and quick presets, designed to feel calmer than the official app.",
    status: "in-progress",
    tech: ["React", "Node", "Raspberry Pi"],
    icon: "speaker",
    category: "Audio",
    featured: true,
    body: [
      "The official Sonos app is fine, but it's built for every possible feature at once. This is a single-purpose control surface running on a wall-mounted Raspberry Pi: now-playing, volume, zone grouping, and a handful of presets — nothing else.",
      "Currently rebuilding the zone-grouping interaction to feel more like arranging speakers on a floor plan than picking from a dropdown list.",
    ],
  },
  {
    slug: "coffee-dashboard",
    name: "Coffee Dashboard",
    description:
      "A small home-lab project logging shot times, ratios, and roast notes to slowly build a better cup — and a case study in tiny, well-made dashboards.",
    status: "in-progress",
    tech: ["Raspberry Pi", "SQLite", "Python"],
    icon: "coffee",
    category: "Home Lab",
    body: [
      "Every shot gets logged: dose, yield, time, roast date, and tasting notes, all stored in a SQLite database on a Raspberry Pi next to the machine.",
      "The real goal isn't the coffee data itself — it's proving out a pattern for small, single-purpose dashboards that take an evening to build and years to actually use.",
    ],
  },
  {
    slug: "raspberry-pi-projects",
    name: "Raspberry Pi Projects",
    description:
      "An ongoing collection of small Raspberry Pi builds — sensors, displays, automations — each one a short-form exercise in constraint-driven engineering.",
    status: "active",
    tech: ["Raspberry Pi", "Python", "MQTT"],
    icon: "cpu",
    category: "Hardware",
    body: [
      "Not every project needs to be a platform. This is a running collection of small, contained Raspberry Pi builds — a temperature sensor here, an e-ink display there — each one scoped to a weekend and wired together over MQTT.",
      "Write-ups for individual builds will land in the Journal as they're finished.",
    ],
  },
  {
    slug: "sdr-lab",
    name: "SDR Lab",
    description:
      "Experiments in software-defined radio: signal capture, decoding, and visualization for RF and utility communications work.",
    status: "in-progress",
    tech: ["SDR", "GNU Radio", "Python"],
    icon: "radio",
    category: "RF / SDR",
    featured: true,
    body: [
      "SDR Lab is where RF engineering and software meet: capturing, decoding, and visualizing signals using GNU Radio and a handful of Python tooling built on top.",
      "Most of the current work is on utility telemetry protocols — figuring out what's being said, not just that something is transmitting.",
    ],
  },
  {
    slug: "future-projects",
    name: "Future Projects",
    description:
      "What's next: notes and early sketches for projects still taking shape. Check back as the lab grows.",
    status: "planned",
    tech: [],
    icon: "sparkles",
    category: "Coming Soon",
    body: [
      "This space is intentionally left open. As new projects move from idea to prototype, they'll land here first.",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
