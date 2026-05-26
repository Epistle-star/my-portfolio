export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  achievements: string[];
};

export type ProjectItem = {
  name: string;
  summary: string;
  role: string;
  contributions: string[];
  stack: string[];
  liveUrl: string;
  imageUrl?: string;
};

export const portfolioData = {
  name: "Ebube Epistle Onunwor",
  initials: "EO",
  profileImageUrl: "/portrait-1.png",
  role: "Backend Engineer & Technical Lead",
  bio: "Versatile software engineer with hands-on experience in backend development, system architecture, and technical support. I build scalable products, design practical APIs, and ship systems that stay reliable in production.",
  location: "Rivers State, Port Harcourt",
  contact: {
    email: "onunworebube3@gmail.com",
    phone: "+2349030436001",
    github: "https://github.com/Epistle-star",
    linkedin: "https://www.linkedin.com/in/ebube-onunwor-a0912a368",
  },
  highlights: [
    { label: "Years Building", value: "3+" },
    { label: "Systems Delivered", value: "10+" },
    { label: "Core Focus", value: "Backend + SaaS" },
  ],
  skills: {
    backend: ["Node.js", "NestJS", "Spring Boot", "REST API Design"],
    frontend: ["React", "TypeScript", "Next.js"],
    databases: ["PostgreSQL", "MySQL", "MS SQL Server"],
    tools: ["Git", "Postman", "Paystack", "Cloudinary"],
    systems: [
      "Troubleshooting",
      "Debugging",
      "SaaS Architecture",
      "Basic Networking",
    ],
  },
  experience: [
    {
      company: "InterSpace Music",
      role: "CTO / Backend Engineer",
      period: "Recent",
      achievements: [
        "Designed and implemented backend systems for music distribution workflows.",
        "Built REST APIs for artist onboarding and management.",
        "Led engineering decisions and coordinated technical delivery.",
      ],
    },
    {
      company: "JeeDrop / ExpressDrop",
      role: "Backend Engineer / Technical Lead",
      period: "Recent",
      achievements: [
        "Developed backend architecture for logistics-focused SaaS operations.",
        "Integrated payments and key operational workflows.",
        "Maintained and evolved multi-role internal dashboards.",
      ],
    },
  ] as ExperienceItem[],
  projects: [
    {
      name: "True Ballot",
      summary:
        "Account-based digital voting platform for structured elections. Voters cast ballots securely, election admins control voting windows, and results are automatically computed by position immediately after poll closure.",
      role: "Backend Engineer & System Architect",
      contributions: [
        "Designed election lifecycle logic from registration to poll closure and tally release.",
        "Implemented automated per-position winner computation to remove manual counting bottlenecks.",
        "Built secure account-linked voting flows to reduce duplicate and unauthorized submissions.",
      ],
      stack: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
      liveUrl: "",
      imageUrl: "/projects/trueBallot-image.png",
    },
    {
      name: "Outreach",
      summary:
        "Church outreach operations platform for capturing convert records, assigning follow-up ownership, and monitoring spiritual growth across ministry teams through a centralized dashboard.",
      role: "Full Stack Engineer",
      contributions: [
        "Structured convert data workflows for capture, follow-up scheduling, and accountability.",
        "Enabled field-officer and leadership visibility across outreach and post-outreach activities.",
        "Supported growth tracking features that help teams monitor progress over time.",
      ],
      stack: ["Next.js", "React", "Tailwind CSS", "REST APIs"],
      liveUrl: "",
      imageUrl: "/projects/outreach-image.png",
    },
    {
      name: "JeeDrop",
      summary:
        "Logistics SaaS platform powering shipment operations with role-based workflows across riders, operations, and administrators. The stack combines a Spring Boot backend and a modern Next.js frontend experience.",
      role: "Backend Engineer / Technical Lead",
      contributions: [
        "Led backend service design for order lifecycle, operations workflows, and secure API access.",
        "Integrated payment and transaction-sensitive flows needed for delivery operations.",
        "Collaborated with frontend delivery of responsive dashboards for multi-role daily usage.",
      ],
      stack: ["Spring Boot", "Java", "Next.js", "MySQL/PostgreSQL"],
      liveUrl: "https://www.jeedrop.com",
      imageUrl: "/projects/jeedrop.jpg",
    },
    {
      name: "Nerdwork+",
      summary:
        "Comic and digital content platform backend with strong API foundations, authentication, and wallet purchase workflows. The backend supports scalable content operations and payment-linked virtual currency flows.",
      role: "Backend Lead",
      contributions: [
        "Owned backend architecture using Express, TypeScript, PostgreSQL, and Drizzle ORM.",
        "Implemented robust auth, profile, and protected API patterns for platform security.",
        "Led dynamic purchase flow improvements with provider verification and transaction tracking.",
      ],
      stack: ["Express.js", "TypeScript", "PostgreSQL", "Drizzle ORM"],
      liveUrl: "",
      imageUrl: "/projects/nerdwork-image.png",
    },
    {
      name: "EpiXa",
      summary:
        "Identity and address verification platform with secure document upload, verification request management, and AI-service readiness for OCR and face-match workflows.",
      role: "Full Stack Engineer",
      contributions: [
        "Built production-oriented NestJS API foundations with PostgreSQL and Prisma.",
        "Designed secure verification request and file handling flows for sensitive data.",
        "Integrated architecture patterns for downstream AI verification services.",
      ],
      stack: ["NestJS", "PostgreSQL", "Prisma", "FastAPI"],
      liveUrl: "",
      imageUrl: "/projects/epixa-image.png",
    },
    {
      name: "Learn Support",
      summary:
        "Inclusive learning platform built for people living with disabilities, focused on reducing barriers to education through accessible user flows, adaptable content access, and assistive-first interaction patterns.",
      role: "Backend Engineer & Full Stack Support",
      contributions: [
        "Supported accessible learning workflows with reliable API-backed content delivery.",
        "Contributed to inclusive product behavior for diverse learning needs.",
        "Helped shape scalable service patterns for long-term platform growth.",
      ],
      stack: ["React", "TypeScript", "Backend APIs", "Accessibility-first UX"],
      liveUrl: "",
      imageUrl: "/projects/learn-support-preview.svg",
    },
    {
      name: "Fuel IoT",
      summary:
        "IoT-based fuel monitoring solution for practical operational visibility.",
      role: "Backend Engineer & Full Stack Support",
      contributions: [
        "Built backend services that ingest and process telemetry from monitoring devices.",
        "Supported actionable dashboard insights for fuel operations oversight.",
        "Improved data reliability for decision-making and anomaly detection.",
      ],
      stack: ["IoT", "Backend Services", "Data Pipelines"],
      liveUrl: "",
      imageUrl: "/projects/fuel-iot-preview.svg",
    },
  ] as ProjectItem[],
  education: [
    "B.Sc. Computer Science, Gregory University (2025)",
    "Professional Diploma in Software Engineering, NIIT (2024)",
  ],
};
