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
    title: "Cloud Genesis Hackathon 2024",
    description: "Join the brightest minds at PGC Muridke for a 48-hour sprint building innovative solutions on AWS. Shape the future of local tech.",
    longDescription: "This 48-hour intense hackathon brings together developers, designers, and cloud enthusiasts to solve real-world problems using AWS technologies like Lambda, DynamoDB, SageMaker, and more. Over $2,000 in AWS credits and prizes are up for grabs. Mentors from the industry will be available to guide teams throughout the event.",
    date: "Nov 15-17, 2024",
    time: "09:00 PKT",
    location: "Main Auditorium, PGC",
    tag: "Hackathon",
    tagColor: "bg-brand-orange",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUzs4BQtBllLj5QaEoMtFnQZZP1L5w2tMCvaixctSkJVRO7_8gaHjNXAX2SSejyWE6AVNIv2aEcdExaabB-OfCFGq4eNz_QiCi_BnFbUJeP4K0BNrAjmSvv9103DTY4bIF5ACjBJ0aVAVVqmaZpN2pzP3lkjVx_vVHa4A30jMWKChAF0UpdXJD60ROzbxtqdD-_9gsO81LVi_oY991ccD6HmaZyov-O9XoL-kag8ANacn2nOI27J3X-3PGHJa_4IoYCJ2dN1t_Lh7_",
    meetupLink: "https://www.meetup.com/aws-cloud-club-pgc/events/hackathon2024",
    isFeatured: true,
  },
  {
    id: "serverless-deep-dive",
    title: "Serverless Deep Dive",
    description: "Master AWS Lambda and API Gateway to build scalable applications without managing servers.",
    longDescription: "In this comprehensive workshop, participants will learn the fundamentals of Serverless computing on AWS. We will build a fully functional API using API Gateway, Lambda, and DynamoDB. No prior backend experience is required, but basic JavaScript knowledge is recommended.",
    date: "Oct 22, 2024",
    time: "14:00 PKT",
    location: "Online",
    tag: "Workshop",
    tagColor: "bg-brand-orange",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-c3vU-f2rZGjwD6ATc8GAc39ugHLcYlq015RApbMp95-Dzsw4tH-S66poNew4tW4cY0P8rrW205SJ5aAZ8LmrTXcORH_EzYWDT0P53Y9Lh30QexKjXFACqmSUlRbRTLtKSDyV8MN3hEKNE29EOHv8HxFgD3m_rmIFUcwx_QVNxxhsPj56JVHu1hPXhDdjkEVTuKKoBvzgTQ53MK_BVldHnzOmuFiAA44YxVbAvDDPu9kaz04zy9OwelNiXCwqPNUbtGVUmmAW1AP3",
    meetupLink: "https://www.meetup.com/aws-cloud-club-pgc/events/serverless-deep-dive",
  },
  {
    id: "career-pathways-in-cloud",
    title: "Career Pathways in Cloud",
    description: "Insights from AWS Solutions Architects on how to land your first cloud engineering role.",
    longDescription: "Getting your first role in the cloud industry can be daunting. We are bringing in Senior Solutions Architects from the region to share their career journeys. Learn what hiring managers actually look for in junior engineering candidates and how to optimize your resume and LinkedIn profile.",
    date: "Oct 28, 2024",
    time: "10:00 PKT",
    location: "Room 104, Block B",
    tag: "Tech Talk",
    tagColor: "bg-brand-purple",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6cw551oZ8CznQiLAHs6wl2EVbLZa6QHyQiatQs5UIOK3dG7eGU7rji5ppinWWx4jvnjushmaDl3EOkuYSP9vcgQK1YZPfcpx6YCQq3_KiqHhdiN1as_fOACOjLhTVrmfgGwz_LKwRzmzXAiYzVi02ZvZs4WS3-7HCU6NicrYPFTKDspzNzdCwgzfPi-gr6Nfg79VSCkKfGQEjS5wJcfN55AG3p1y_Q8dIBuzqAi2Anzx610SEc1fai44DRKGld_QXwsBlcPcXLwKc",
    meetupLink: "https://www.meetup.com/aws-cloud-club-pgc/events/career-pathways",
  },
  {
    id: "practitioner-study-group",
    title: "Practitioner Study Group",
    description: "Collaborative study session focusing on Cloud Practitioner exam domains and practice labs.",
    longDescription: "Preparing for the AWS Certified Cloud Practitioner exam? Join our peer-led study group! We will review core AWS services, billing and pricing models, and security best practices followed by a live mock exam.",
    date: "Nov 05, 2024",
    time: "16:00 PKT",
    location: "Online",
    tag: "Certification",
    tagColor: "bg-brand-orange",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCR4T45mrXoQg9w-FTIfV4qLWce7_8ZW4U920VukTM1qWRcClIseQCbFveB5sZ1J_w8NruqvxCYAq_1N_Z-GSC9XlIy3rN2vVfkCnv8N6ZrrBQdkc2rFwr2bxEVhe0VDUZymkH-m25Zgk2i3E0rbBtFhfib8oWhMLNkJ-7FzeI-fnmztz02pV8nJa1r9C5AsNdbzgvf3PnKO2Qsj8XxRz-xR0wYsF8zkZyom0uGCws3XyIJaN7G6S6cmKLacv8I62c3fYeH0M0UurGn",
    meetupLink: "https://www.meetup.com/aws-cloud-club-pgc/events/study-group",
  },
  {
    id: "aws-cloud-day-2024",
    title: "AWS Cloud Day 2024",
    description: "A massive success with 200+ attendees at PGC Muridke.",
    longDescription: "AWS Cloud Day was our flagship event of the year, bringing together over 200 students from across the region to learn about the latest cloud innovations and connect with industry professionals.",
    date: "Sep 10, 2024",
    time: "09:00 PKT",
    location: "Main Auditorium, PGC",
    tag: "Conference",
    tagColor: "bg-brand-purple",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDA4IK3gj9MH90M6ehwYfEQWU1bLCMAJO1u7ZgVxmd8N71Y8LkFCd7YhHdzmmn_33YBjE3GNlvrut4cOKGqhrdv62qOGnmqoXtqipuikPifBr9jMvDDMABT_HTxnweju0lQWXTSl4JoR3VOPg0uG-ftLRNHrF-OCCBPCYIReYJg3gM0TNeMWEzv_MN_vFOtnwiJ5t-VADK2Efj669AC2bmlfBvLTA5sjbUqLvWwyo0DG-4opLD-qpK3y77ezzyhA4xcLXIK4RweiwcK",
    meetupLink: "https://www.youtube.com/watch?v=placeholder1",
    isPast: true,
  },
  {
    id: "architecture-workshop",
    title: "Architecture Workshop",
    description: "Building Multi-tier applications on EC2 and RDS.",
    longDescription: "A hands-on lab environment where students provisioned a custom VPC, deployed an RDS database, and connected it to a fleet of EC2 instances managed by an Auto Scaling Group behind an Application Load Balancer.",
    date: "Aug 15, 2024",
    time: "14:00 PKT",
    location: "Computer Lab 1",
    tag: "Workshop",
    tagColor: "bg-brand-orange",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjo-Z5yzmWXrOs5qNZYO_CVv3uBnKBaKtkyl6t2wL2e74Y2SKerv5viZpBek9UjBdRg7B8caEe71Gd4FIUFIUU4yB0Tq_32s0LJVpPIwM3-iB74E_hpMLB0nKpGYeQ4Tsnt_AjW6rQgqoMhKzXMP_mnuwLqHwIpG5aST4Vyq6P9h6Pyq_9esF-dqO1n2JxdFjBcyXxVsK4DjOUciHMc6QA_4jXjbGflukmwXEkZG0jOWlHcq0CmU0lgwpXryi2o8pJLfw2bL5d-sdu",
    meetupLink: "https://www.youtube.com/watch?v=placeholder2",
    isPast: true,
  }
];

export const getFeaturedEvent = () => eventsData.find(e => e.isFeatured);
export const getUpcomingEvents = () => eventsData.filter(e => !e.isPast && !e.isFeatured);
export const getPastEvents = () => eventsData.filter(e => e.isPast);
export const getEventById = (id: string) => eventsData.find(e => e.id === id);
