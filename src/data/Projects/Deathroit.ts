import { bg } from "@/assets/import";
import {
  Projects,
  ProjectStatus,
  Containerized,
  CICD,
  DeploymentPlatform,
  DeploymentStatus,
  DatabaseHosting,
  Authentication,
  Caching,
  ObjectStorage,
  ORM,
  MonoRepo,
  Language,
  ReverseProxy,
  AIGateway,
} from "@/types/project.types";

export const Deathroit: Projects = {
  slug: "Deathroit",
  name: "Deathroit",
  startDate: "2025",
  endDate: "Present",
  liveLink: "https://deathroit.ravindertech.me",
  githubLink: "https://github.com/AshutoshDM1/Xcontext",
  projectIcon: "https://deathroit.elitedev.space/favicon.ico",
  projectImage: "/project/deathroit.png",
  shortDescription:
    "XContext is a platform for taking AI interview of given Codebase and Contests.",
  description: `XContext is a platform for taking AI interview of given Codebase.

- Advanced manga search, filtering, and pagination
- Personalized reading progress and collections
- Full admin dashboard for manga/chapter management
- AWS EC2 + Docker deployment with CI/CD pipelines
- Zustand-powered modular frontend architecture
- Smooth responsive animations and optimized reading experience`,
  backgroundImage: bg.image8,
  pinned: false,
  status: ProjectStatus.Building,
  isMonorepo: MonoRepo.PnpmWorkspaces,
  isHusky: true,
  isReadme: true,
  isLLD: false,
  isAgentSkills: false,
  techstack: [
    "Node.js",
    "Express",
    "Next.js",
    "TypeScript",
    "Better-Auth",
    "BullMQ",
    "Tailwind CSS",
    "Shadcn UI",
    "DigitalOcean",
    "Prisma",
    "Vercel",
  ],
  isOpenSource: true,
  architecture: false,
  apps: {
    frontend: false,
    backend: false,
    cliTool: {
      id: 10,
      name: "Xcontext",
      npmLink: "https://www.npmjs.com/package/xcontext",
      github: "https://github.com/AshutoshDM1/Xcontext",
      language: Language.TypeScript,
      techStack: ["Node.js", "TypeScript", "Commander.js", "Ora", "Chalk"],
      isCICD: CICD.GithubActions,
      npmVersion: "1.0.0",
      githubVersion: "1.0.0",
      projectStatus: ProjectStatus.Completed,
    },
    microService: false,
    mpcServer: false,
    sdk: false,
  },
};
