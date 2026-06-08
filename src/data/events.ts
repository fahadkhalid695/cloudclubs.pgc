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
    id: "deploy-possible-2026",
    title: "Deploy Possible — Build & Launch Your First AWS Project",
    description: "A hands-on practical session where you'll learn the fundamentals of AWS and deploy your very first live project on the cloud.",
    longDescription: "Ready to take your first step into the world of Cloud Computing? Join AWS SBG PGC Muridke for a hands-on practical session where you'll learn the fundamentals of AWS and deploy your very first live project on the cloud. Whether you're completely new to AWS or just curious about cloud technology, this session is designed especially for beginners.\n\nIn this session, you'll:\n• Understand AWS basics\n• Launch your first cloud server\n• Deploy a live website on AWS\n• Gain practical cloud experience\n\nNo prior cloud experience is required—just bring your curiosity and willingness to learn!",
    date: "Jun 10, 2026",
    time: "02:00 PM, PKT",
    location: "Punjab College Muridke",
    tag: "Workshop",
    tagColor: "bg-brand-orange",
    image: "Event 3 post.png",
    meetupLink: "https://www.meetup.com/aws-sbg-pgc/events/315167787",
    isFeatured: true,
  },
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
    isPast: true,
  },
  {
    id: "house-of-kiro-2026",
    title: "House of Kiro",
    description: "An exciting online experience filled with cloud, innovation, networking, and real-world tech insights. Whether you're a beginner or a future builder, this session is designed to inspire and level up your journey.",
    longDescription: "Get ready for an exciting experience filled with cloud, innovation, networking, and real-world tech insights. Whether you're a beginner or a future builder, this session is designed to inspire and level up your journey.\n\nThis event is the key to our next big surprise — don't miss it!",
    date: "May 17, 2026",
    time: "09:30 PM, PKT",
    location: "Online",
    tag: "Online Event",
    tagColor: "bg-brand-purple",
    image: "Event 2 post.jpeg",
    meetupLink: "https://www.meetup.com/aws-sbg-pgc/events/314737454/",
    isPast: true,
  },
];

export const getFeaturedEvent = () => eventsData.find(e => e.isFeatured);
export const getUpcomingEvents = () => eventsData.filter(e => !e.isPast && !e.isFeatured);
export const getPastEvents = () => eventsData.filter(e => e.isPast);
export const getEventById = (id: string) => eventsData.find(e => e.id === id);
