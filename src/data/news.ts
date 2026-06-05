export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: "Announcement" | "Sponsorship" | "Event" | "Opportunity";
  image: string;
  link: string;
  linkLabel: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "first-official-sponsor",
    title: "First Official Sponsorship Secured",
    summary:
      "AWS Student Builder Group received its first official sponsorship from Certopus, enabling better learning initiatives and wider outreach.",
    date: "Mar 13, 2026",
    category: "Sponsorship",
    image:
      "certopus.png",
    link: "/sponsors",
    linkLabel: "View Sponsors",
  },
  {
    id: "datacamp-donates-partnership",
    title: "DataCamp Donates Free Scholarships to Members",
    summary:
      "DataCamp Donates program is providing free DataCamp scholarships to AWS Student Builder Group members, unlocking premium data science and analytics courses.",
    date: "Apr 02, 2026",
    category: "Sponsorship",
    image:
      "DC_Donates_logo_regular.png",
    link: "/sponsors",
    linkLabel: "View Sponsors",
  },
  {
    id: "team-recruitment-open",
    title: "Team Recruitment Is Open",
    summary:
      "Applications are now open for students interested in operations, technical mentorship, media, and event execution.",
    date: "Mar 20, 2026",
    category: "Opportunity",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBYC6Z9GdvmeadxkAuhbaQwUVNZ_f6VlJK1JHZrXe-RUrnqUORlbWBTOBPxdQF10lfXhxKSRDtVKdZMkOA3A5xgGNITnZpGdmVCi3zzEQCP3evONriQpRm-1fYfr2-K-WFSQmS6ST2m08DgkXZAp4kxhb92_1THuVhCSLsH2is_UIZRTfSSz90yWMLJWHEyjU2lnhAZWZAC3WnbhKW2u99eJnaK64PC66RKO1_azGfgIZ_u37kc1m5S5ZcB3krMskwI6to0piXVF0R4",
    link: "https://forms.gle/dbgRxAiYFdLFWfme7",
    linkLabel: "Apply Now",
  },
];
