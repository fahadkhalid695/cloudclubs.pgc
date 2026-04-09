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
    id: "captain-appointment-2026",
    title: "New Captain Appointment for 2026-27",
    summary:
      "The chapter leadership has been updated with a renewed focus on mentorship, practical cloud labs, and stronger member engagement.",
    date: "Feb 06, 2026",
    category: "Announcement",
    image:
      "profile.png",
    link: "/team",
    linkLabel: "Meet the Team",
  },
  {
    id: "first-official-sponsor",
    title: "First Official Sponsorship Secured",
    summary:
      "AWS Cloud Club PGC received its first official sponsorship from Certopus, enabling better learning initiatives and wider outreach.",
    date: "Mar 13, 2026",
    category: "Sponsorship",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDUzs4BQtBllLj5QaEoMtFnQZZP1L5w2tMCvaixctSkJVRO7_8gaHjNXAX2SSejyWE6AVNIv2aEcdExaabB-OfCFGq4eNz_QiCi_BnFbUJeP4K0BNrAjmSvv9103DTY4bIF5ACjBJ0aVAVVqmaZpN2pzP3lkjVx_vVHa4A30jMWKChAF0UpdXJD60ROzbxtqdD-_9gsO81LVi_oY991ccD6HmaZyov-O9XoL-kag8ANacn2nOI27J3X-3PGHJa_4IoYCJ2dN1t_Lh7_",
    link: "https://www.linkedin.com/company/aws-cloud-club-pgc/",
    linkLabel: "View on LinkedIn",
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
