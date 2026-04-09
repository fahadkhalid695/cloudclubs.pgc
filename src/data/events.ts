export interface EventData {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  tag: string;
  tagColor: string;
  image: string;
  meetupLink: string;
  longDescription?: string;
  isFeatured?: boolean;
  isPast?: boolean;
}

export const eventsData: EventData[] = [
  {
    id: "cloud-genesis-hackathon-2024",
    title: "Introduction to Cloud & Open Source",
    description: "Focus: What cloud computing is, why AWS dominates, and why open source matters.",
    longDescription: "Focus: What cloud computing is, why AWS dominates, and why open source matters. * Traditional vs cloud infrastructure. * Overview of AWS services: EC2, S3, IAM. * Open-source tools: Linux, Git, Docker",
    date: "Apr 18, 2026",
    time: "02:00 PM, PKT",
    location: "Punjab College Muridke",
    tag: "Tech Talk",
    tagColor: "bg-brand-orange",
    image: "event1.png",
    meetupLink: "https://www.meetup.com/aws-cloud-club-at-punjab-group-of-colleges/events/314196524/",
    isFeatured: true,
  }
];

export const getFeaturedEvent = () => eventsData.find(e => e.isFeatured);
export const getUpcomingEvents = () => eventsData.filter(e => !e.isPast && !e.isFeatured);
export const getPastEvents = () => eventsData.filter(e => e.isPast);
export const getEventById = (id: string) => eventsData.find(e => e.id === id);
