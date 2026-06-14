export type Milestone = {
  year: string;
  emoji: string;
  title: string;
  desc: string;
  isCurrent: boolean;
};

export const MILESTONES: Milestone[] = [
  {
    year: "2012",
    emoji: "🏠",
    title: "Humble Beginnings",
    desc: "Founded by Chef Reza in his home kitchen in Kemang. Exclusively baking artisan croissants and sourdough for neighbors.",
    isCurrent: false,
  },
  {
    year: "2014",
    emoji: "🏪",
    title: "First Store",
    desc: "Opened our first physical bakery in Kemang Raya. Started with 20 products, 5 employees, and unforgettable lines of customers.",
    isCurrent: false,
  },
  {
    year: "2016",
    emoji: "🏆",
    title: "First Recognition",
    desc: "Awarded 'Best Artisan Bakery Jakarta' by Food & Travel Indonesia. Daily orders skyrocketed by 300% within a month.",
    isCurrent: false,
  },
  {
    year: "2018",
    emoji: "🚀",
    title: "First Expansion",
    desc: "Simultaneously opened 3 new branches in BSD City, Kelapa Gading, and Pondok Indah. Team grew to 50 passionate members.",
    isCurrent: false,
  },
  {
    year: "2020",
    emoji: "💻",
    title: "Going Digital",
    desc: "Launched our online platform and delivery services. During the pandemic, La Farine experienced a 200% online growth.",
    isCurrent: false,
  },
  {
    year: "2022",
    emoji: "💰",
    title: "Series A Funding",
    desc: "Successfully secured Series A funding from East Ventures worth Rp 25 Billion to fuel our national expansion.",
    isCurrent: false,
  },
  {
    year: "2026",
    emoji: "✨",
    title: "Present Day",
    desc: "8 branches, 150+ employees, 45+ products, and over 12,000 loyal customers. La Farine continues to bake, grow, and innovate.",
    isCurrent: true,
  },
];
