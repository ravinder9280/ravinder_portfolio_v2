import { Experience } from "@/views/Home/Folds/Experience";

export const Experiences: Experience[] = [
 
  {
    id: 1,
    company: "Natplus.io",
    companyIcon: "/company/natplus.png",
    position: "Frontend Developer Intern",
    startDate: "June, 2025",
    endDate: "Mar, 2026",
    companyLocation: "Barcelona, Spain",
    userLocation: "Remote",
    jobType: "Internship",
    description: [
      "Built and worked the entire platform including frontend, backend, API layer, and Database.",
      "Implemented an interactive **Geospatial analysis** feature using **Mapbox** to visualize assets, priority sites, and biodiversity data with dynamic filtering and contextual insights.",
      "Developed an **AI-powered data enrichment** feature to generate and auto-fill structured table data using natural language prompts.",
      "Participated in end-to-end product development, contributing to feature design, implementation, and continuous improvement of the platform.",
      "Improved application responsiveness and resolved critical UI issues, ensuring a seamless and consistent user experience across devices.",
    ],
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Docker",
      "Mapbox",
      "Shadcn UI",
      "SEO",
      "DigitalOcean",
      "Vercel",
    ],
  },
  {
    id: 2,
    company: "Bachelor of Computer Application",
    companyIcon: "/company/cap.png",
    position: "Student",
    startDate: "Aug, 2023",
    endDate: "June, 2026",
    companyLocation: "DAV Centenary College, Faridabad, India",
    userLocation: "Full Time",
    jobType: "Education",
    description: [
      "Acquired strong foundations in core Computer Science concepts including **Data Structures**, **Design & Analysis of Algorithms**, and **Object-Oriented Programming** using C++ and JAVA.",
      "Studied Operating Systems, Database Management Systems (DBMS), SQL, and networking to build a robust software development foundation.",
      "Designed and implemented academic projects applying relational database schemas, normalization, and optimization techniques using SQL.",
    ],
    skills: [
      "C++",
      "Data Structure",
      "Algorithm",
      "Operating System",
      "Database Management System",
      "SQL",
    ],
  },
];
