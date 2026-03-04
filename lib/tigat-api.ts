import {
  CareersApi,
  ProjectsApi,
  TeamMembersApi,
  TestimonialsApi,
  Configuration,
} from "@/sdk";

export type CareerItem = {
  id?: string;
  title: string;
  category?: string;
  employmentType?: string;
  description: string;
  status?: string;
  active?: boolean;
  icon?: string;
  location?: string;
};

export type ProjectItem = {
  id?: string;
  title: string;
  description?: string;
  category?: string;
  tags?: string[];
  status?: string;
  coverImage?: string;
  url?: string;
};

export type TeamMemberItem = {
  id?: string;
  name: string;
  role: string;
  department?: string;
  status?: string;
  isLead?: boolean;
  avatarUrl?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
};

export type TestimonialItem = {
  id?: string;
  name: string;
  role: string;
  company?: string;
  rating?: number;
  review?: string;
  status?: string;
  avatarUrl?: string;
};

const fallbackCareers: CareerItem[] = [
  {
    title: "UX/UI Designer",
    category: "Design",
    employmentType: "FULL_TIME",
    description:
      "If you have a keen eye for aesthetics, a deep understanding of user experience, and a passion for creating intuitive interfaces, we would love to hear from you.",
    location: "Remote",
    icon: "Pipette",
  },
  {
    title: "Full Stack Developer",
    category: "Engineering",
    employmentType: "FULL_TIME",
    description:
      "If you're a coding wizard with expertise in front-end and back-end development, and have experience with frameworks like React, Angular, or Node.js.",
    location: "Remote",
    icon: "Code2",
  },
  {
    title: "Project Manager",
    category: "Operations",
    employmentType: "FULL_TIME",
    description:
      "If you excel at coordinating teams, managing timelines, and ensuring successful project delivery, we invite you to join our project management team.",
    location: "Remote",
    icon: "LayoutGrid",
  },
];

const fallbackProjects: ProjectItem[] = [
  {
    title: "For Help Charity",
    category: "Blog",
    tags: ["Web Design"],
    coverImage: "/charity-website-design.jpg",
  },
  {
    title: "Zenith Gym Website",
    category: "Fitness",
    tags: ["Web Design"],
    coverImage: "/gym-fitness-website.jpg",
  },
  {
    title: "Klothes E-commerce",
    category: "E-commerce",
    tags: ["Web Design"],
    coverImage: "/ecommerce-clothing-store.jpg",
  },
  {
    title: "Talent Blog",
    category: "Blog",
    tags: ["Web Development"],
    coverImage: "/blog-platform-development.jpg",
  },
  {
    title: "SkillBridge E-Tech",
    category: "Education",
    tags: ["Web Development"],
    coverImage: "/education-platform-elearning.jpg",
  },
  {
    title: "Z-Aura E-commerce",
    category: "E-commerce",
    tags: ["Web Development"],
    coverImage: "/ecommerce-platform-development.png",
  },
];

const fallbackTeam: TeamMemberItem[] = [
  {
    name: "Alexandra Turner",
    role: "CEO",
    twitter: "@alexandraturner",
  },
  {
    name: "Daniel Rodriguez",
    role: "CTO",
    twitter: "@danielrodriguez",
  },
  {
    name: "Olivia Chang",
    role: "Creative Director",
    twitter: "@oliviachang",
  },
  {
    name: "Michael Patel",
    role: "Lead Software Engineer",
    twitter: "@michaelpatel",
  },
  {
    name: "Sophie Carter",
    role: "UX/UI Designer",
    twitter: "@sophiecarter",
  },
  {
    name: "Anthony Davis",
    role: "Project Manager",
    twitter: "@anthonydavis",
  },
  {
    name: "Emily Thompson",
    role: "Marketing Specialist",
    twitter: "@emilythompson",
  },
  {
    name: "Ryan Foster",
    role: "Financial Analyst",
    twitter: "@ryanfoster",
  },
];

const fallbackTestimonials: TestimonialItem[] = [
  {
    name: "John Anderson",
    role: "Entrepreneur",
    company: "",
    rating: 5,
    review:
      "Tigat Tech has been instrumental in transforming our online presence. Their team's expertise in web development and design delivered a stunning and user-friendly e-commerce platform.",
  },
  {
    name: "Sarah Johnson",
    role: "CEO Boutique",
    company: "",
    rating: 5,
    review:
      "Working with Tigat Tech was a breeze. They understood our vision for a mobile app that streamlined our operations. The result exceeded our expectations.",
  },
  {
    name: "Emily Turner",
    role: "Founder EventMasters",
    company: "",
    rating: 5,
    review:
      "Tigat Tech developed a comprehensive booking and reservation system for our event management platform. Their attention to detail and commitment to excellence was evident throughout the project.",
  },
];

const basePath =
  process.env.TIGAT_API_BASE_URL ||
  process.env.NEXT_PUBLIC_TIGAT_API_BASE_URL ||
  "https://tigattech-backend-nestjs.onrender.com";

const config = new Configuration({ basePath });

const normalizeArray = (payload: unknown): any[] => {
  if (!payload) return [];
  if (Array.isArray(payload)) return payload;
  if (typeof payload === "object" && payload !== null) {
    const record = payload as Record<string, unknown>;
    if (Array.isArray(record.data)) return record.data as any[];
    if (Array.isArray(record.items)) return record.items as any[];
  }
  return [];
};

export const getCareers = async (): Promise<CareerItem[]> => {
  try {
    const api = new CareersApi(config);
    const response = await api.careersControllerFindAll();
    const data = normalizeArray((response as any)?.data ?? response);
    return data.length ? (data as CareerItem[]) : fallbackCareers;
  } catch (error) {
    return fallbackCareers;
  }
};

export const getProjects = async (): Promise<ProjectItem[]> => {
  try {
    const api = new ProjectsApi(config);
    const response = await api.projectsControllerFindAll();
    const data = normalizeArray((response as any)?.data ?? response);
    return data.length ? (data as ProjectItem[]) : fallbackProjects;
  } catch (error) {
    return fallbackProjects;
  }
};

export const getTeamMembers = async (): Promise<TeamMemberItem[]> => {
  try {
    const api = new TeamMembersApi(config);
    const response = await api.teamMembersControllerFindAll();
    const data = normalizeArray((response as any)?.data ?? response);
    return data.length ? (data as TeamMemberItem[]) : fallbackTeam;
  } catch (error) {
    return fallbackTeam;
  }
};

export const getTestimonials = async (): Promise<TestimonialItem[]> => {
  try {
    const api = new TestimonialsApi(config);
    const response = await api.testimonialsControllerFindAll();
    const data = normalizeArray((response as any)?.data ?? response);
    return data.length ? (data as TestimonialItem[]) : fallbackTestimonials;
  } catch (error) {
    return fallbackTestimonials;
  }
};
