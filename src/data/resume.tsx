import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Abrar Dhalwala",
  initials: "AD",
  url: "https://abrar.vercel.app",
  location: "Abu Dhabi, UAE",
  locationLink: "https://www.google.com/maps/place/abudhabi",
  description:
    "Software Engineer. I create easy to use Web Applications. Very active on Instagram and Threads.",
  summary:
    "Having about 9 years of experience of working in software industry and highly skilled in various tech stacks. My goal is to create more usable and elegant products for the clients.",
  avatarUrl: "/me.jpg",
  skills: [
    "Typescript",
    "Node",
    "Javascript",
    "PHP",
    "Go",
    "MySQL",
    "Mongo DB",
    "Vue",
    "Redis",
    "RabbitMQ",
    "NestJS",
    "Laravel",
    "React",
    "NextJS",
  ],
  skillSlugs: [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "nextdotjs",
    "vercel",
    "jest",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "sonarqube",
    "php",
    "laravel",
    "vuedotjs",
    "go",
    "redis",
    "rabbitmq",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "abrardw2@gmail.com",
    tel: "+971562259033",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://in.linkedin.com/in/abrardw",
        icon: Icons.linkedin,
        navbar: true,
      },
      Insta: {
        name: "Instagram",
        url: "https://www.instagram.com/abrar.codes",
        icon: Icons.instagram,
        navbar: true,
      },
      Threads: {
        name: "Threads",
        url: "https://www.threads.net/@abrar.codes",
        icon: Icons.threads,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "MyWhoosh",
      badges: [],
      location: "Abu Dhabi, UAE",
      title: "Senior Software Engineer",
      start: "Aug 2022",
      end: null,
      description: ""
    },
    {
      company: "Bacancy Technology",
      badges: [],
      location: "Remote",
      title: "Senior Software Engineer",
      start: "Jan 2022",
      end: "Jul 2022",
      description: ""
    },
    {
      company: "Aecor Digital",
      badges: [],
      location: "Vadodara, India",
      title: "Senior Software Engineer",
      start: "Mar 2020",
      end: "Dec 2021",
      description: ""
    },
    {
      company: "Netweb Software Pvt Ltd",
      badges: [],
      location: "Vadodara, India",
      title: "Software Engineer",
      start: "Feb 2017",
      end: "Mar 2020",
      description: ""
    },
    {
      company: "Pixel Perfection",
      badges: [],
      location: "Vadodara, India",
      title: "Software Engineer",
      start: "Aug 2015",
      end: "Aug 2016",
      description: ""
    },
  ],
  education: [
    {
      school: "M S University, Vadodara",
      href: "",
      degree: "Diploma in Computer Engineering",
      logoUrl: "",
      start: "2010",
      end: "2014",
    },
  ],
} as const;
