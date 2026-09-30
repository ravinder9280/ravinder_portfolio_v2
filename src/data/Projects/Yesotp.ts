import { bg } from "@/assets/import";
import {
  Projects,
  ProjectStatus,
  DeploymentPlatform,
  DeploymentStatus,
  Authentication,
  ORM,
  MonoRepo,
  Language,
} from "@/types/project.types";

export const YesOTP: Projects = {
  slug: "YesOTP",
  name: "Yes OTP",
  startDate: "2026",
  githubLink:"",
  endDate: "Present",
  liveLink: "https://www.yesotp.store/",
  projectIcon: "https://www.yesotp.store/favicon.ico",
  projectImage: "/project/yesotp.png",

  shortDescription:
    "SaaS platform for temporary virtual numbers and OTP verification, with wallet-based payments, real-time activation tracking, and a provider-agnostic architecture.",

  description: `Yes OTP is a SaaS platform for purchasing temporary virtual numbers for OTP verification. The MVP provides a complete activation flow where users can purchase numbers, track active activations, receive OTPs, manage their wallet balance, and make payments through Razorpay.

The platform is designed with a provider-agnostic architecture, allowing multiple SMS providers to be integrated behind a common interface without coupling the core application logic to a specific provider.

## Features
- **Virtual Number Activation** — Purchase temporary phone numbers for supported services and countries.
- **OTP Reception** — Receive verification OTPs directly inside the application.
- **Activation Tracking** — Track active, completed, cancelled, and expired activations.
- **Wallet System** — Manage wallet balance and activation spending.
- **Razorpay Payments** — Add wallet balance through an integrated payment flow.
- **Provider Abstraction** — Integrate multiple SMS providers through a common provider interface.
- **Dynamic Pricing** — Support provider-specific pricing and markup.
- **Cancellation & Refunds** — Handle activation cancellation and applicable wallet refunds.
- **Background Jobs** — Cron jobs handle scheduled and background application tasks.
- **Dashboard** — Monitor balance, activations, spending, and recent activity.
- **Authentication** — Secure user authentication and session management with Better Auth.`,

  backgroundImage: bg.image2,
  pinned: false,
  status: ProjectStatus.Completed,

  isMonorepo: false,
  isHusky: false,
  isReadme: false,
  isLLD: false,
  isAgentSkills: false,

  techstack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn UI",
    "Better-Auth",
    "Prisma",
    "PostgreSQL",
    "Supabase",
    "Razorpay",
    "Vercel",
  ],

  isOpenSource: false,
  architecture: false,

  apps: {
    frontend: {
      id: 6,
      name: "Yes OTP",
      link: "https://www.yesotp.store/",
      github: "",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Better-Auth",
        "Prisma",
        "Razorpay",
      ],
      language: Language.TypeScript,
      isContianerized: false,
      isCICD: false,
      deploymentPlatform: DeploymentPlatform.Vercel,
      deploymentStatus: DeploymentStatus.Building,
      monitoringTool: false,
      isCustomDomain: true,
    },

    backend: {
      id: 6,
      name: "Yes OTP Backend",
      link: "https://www.yesotp.store/",
      github: "",
      techStack: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Better-Auth",
        "Razorpay",
      ],
      language: Language.TypeScript,
      isContianerized: false,
      isCICD: false,
      deploymentPlatform: DeploymentPlatform.Vercel,
      dbBackup: false,
      databaseHosting: false,
      deploymentStatus: DeploymentStatus.Building,
      monitoringTool: false,
      isCustomDomain: true,
      authentication: Authentication.BetterAuth,
      aIGateway: false,
      reverseProxy: false,
      ORM: ORM.Prisma,
      caching: false,
      messageBroker: false,
      objectStorage: false,
      isTested: false,
    },

    microService: false,
    mpcServer: false,
    sdk: false,
    cliTool: false,
  },
};