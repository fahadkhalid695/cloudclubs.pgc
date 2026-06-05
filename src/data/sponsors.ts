export type SponsorTier = 'title' | 'gold' | 'silver' | 'community';

export interface Sponsor {
  id: string;
  name: string;
  tier: SponsorTier;
  logo: string;
  website: string;
  description: string;
  since: string;
}

export const sponsorsData: Sponsor[] = [
  {
    id: "aws",
    name: "Amazon Web Services",
    tier: "title",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    website: "https://aws.amazon.com",
    description: "Providing cloud credits, certification vouchers, and direct mentorship to our members through the AWS Educate and Builder programs.",
    since: "2025",
  },
  {
    id: "certopus",
    name: "Certopus",
    tier: "gold",
    logo: "/certopus.png",
    website: "https://certopus.com",
    description: "Our first official sponsor — Certopus provides digital credentialing and certification solutions, enabling professional recognition for member achievements.",
    since: "2026",
  },
  {
    id: "datacamp-donates",
    name: "DataCamp Donates",
    tier: "gold",
    logo: "/DC_Donates_logo_regular.png",
    website: "https://www.datacamp.com/donates",
    description: "Through the DataCamp Donates program, members receive free scholarships for premium DataCamp courses covering data science, analytics, Python, SQL, and more.",
    since: "2026",
  },
];

export const tierConfig = {
  title: {
    label: "Title Sponsors",
    color: "#FF9900",
    borderColor: "rgba(255,153,0,0.4)",
    glowColor: "rgba(255,153,0,0.12)",
    badgeBg: "rgba(255,153,0,0.12)",
  },
  gold: {
    label: "Gold Sponsors",
    color: "#FFD700",
    borderColor: "rgba(255,215,0,0.35)",
    glowColor: "rgba(255,215,0,0.10)",
    badgeBg: "rgba(255,215,0,0.10)",
  },
  silver: {
    label: "Silver Sponsors",
    color: "#42B4FF",
    borderColor: "rgba(66,180,255,0.3)",
    glowColor: "rgba(66,180,255,0.08)",
    badgeBg: "rgba(66,180,255,0.08)",
  },
  community: {
    label: "Community Partners",
    color: "#AD5CFF",
    borderColor: "rgba(173,92,255,0.3)",
    glowColor: "rgba(173,92,255,0.08)",
    badgeBg: "rgba(173,92,255,0.08)",
  },
};

export const getSponsorsByTier = (tier: SponsorTier) =>
  sponsorsData.filter((s) => s.tier === tier);
