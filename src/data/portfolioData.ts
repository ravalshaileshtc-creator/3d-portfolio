export interface ProjectItem {
  id: string;
  title: string;
  category: 'Mobile' | 'Full Stack' | 'POS & Web' | 'Real-time' | 'Crypto & Security' | 'AI Systems';
  tagline: string;
  description: string;
  stats: string;
  tags: string[];
  techStack: string[];
  features: string[];
  architecture: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: { name: string; level: number; badge: string }[];
}

export interface EngineeringService {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
  highlight: string;
}

export const PERSONAL_INFO = {
  name: "Shailesh Raval",
  title: "Senior Full Stack App & Web Developer",
  roleSub: "AI Systems Architect & Flutter Specialist",
  phone: "+91 9727239468",
  email: "ravalshaileshtc@gmail.com",
  whatsapp: "919727239468",
  location: "Gujarat, India",
  timezone: "Asia/Kolkata",
  bio: "Architecting high-concurrency mobile apps, sub-100ms web systems, and autonomous Gemini 2.5 AI agents. 7+ years of building production software across Flutter cross-platform mobile, Next.js 14 enterprise web, and enterprise AI RAG pipelines.",
  philosophy: "Concurrency-first architecture, 60 FPS mobile polish, sub-100ms web rendering, zero dead clicks.",
  languages: [
    { name: "Gujarati", fluency: "Native" },
    { name: "Hindi", fluency: "Fluent" },
    { name: "English", fluency: "Professional" },
  ],
  stats: [
    { label: "Projects Completed", count: "100+", detail: "Across Web, Mobile & AI" },
    { label: "Apps Developed", count: "50+", detail: "Flutter iOS & Android" },
    { label: "Websites Created", count: "75+", detail: "Next.js 14 & React Platforms" },
    { label: "Client Satisfaction", count: "99%", detail: "5-Star Global Reviews" },
  ]
};

export const CORE_STACK_LOGOS = [
  { name: "Flutter", category: "Mobile", color: "#4cd7f6" },
  { name: "Next.js 14", category: "Full Stack", color: "#ffffff" },
  { name: "React", category: "Frontend", color: "#61dafb" },
  { name: "Node.js", category: "Backend", color: "#68a063" },
  { name: "PostgreSQL", category: "Database", color: "#336791" },
  { name: "Google Gemini 2.5", category: "AI Systems", color: "#ffb596" },
  { name: "Redis", category: "Caching", color: "#dc382d" },
  { name: "Firebase", category: "Realtime", color: "#ffca28" },
];

export const ENGINEERING_SERVICES: EngineeringService[] = [
  {
    id: "web-dev",
    title: "Web Application Development",
    description: "Production-ready Next.js 14 App Router applications, SEO score 95+, dynamic SSR/SSG caching, and ultra-crisp responsive micro-animations.",
    icon: "Globe",
    tags: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    highlight: "Sub-100ms LCP & 99+ Lighthouse Scores"
  },
  {
    id: "mobile-eng",
    title: "Mobile App Engineering",
    description: "Cross-platform iOS & Android mobile apps engineered with Flutter, native device integration, offline sync, background tasks, and 60 FPS smooth rendering.",
    icon: "Smartphone",
    tags: ["Flutter", "Dart", "iOS", "Android", "State Management", "BLoC/Riverpod"],
    highlight: "Native performance with single codebase efficiency"
  },
  {
    id: "ai-systems",
    title: "AI Systems & Autonomous Agents",
    description: "Enterprise RAG pipelines powered by Google Gemini 2.5 AI SDK, pgvector semantic search, autonomous agentic workflows, and real-time streaming tool calls.",
    icon: "Cpu",
    tags: ["Gemini 2.5", "RAG Pipeline", "pgvector", "LangChain", "Node.js AI"],
    highlight: "Contextual AI reasoning with zero hallucination guardrails"
  },
  {
    id: "dashboards",
    title: "Admin Dashboards & SaaS Architectures",
    description: "Multi-tenant B2B SaaS platforms with Role-Based Access Control (RBAC), real-time WebSocket metrics, stripe billing integrations, and analytics telemetry.",
    icon: "LayoutDashboard",
    tags: ["React", "PostgreSQL", "Socket.io", "Redis", "Tailwind"],
    highlight: "Granular permission security & real-time telemetry"
  },
  {
    id: "api-cloud",
    title: "API & Microservice Cloud Architecture",
    description: "Scalable REST & GraphQL microservices built on Node.js, Express, PostgreSQL, MongoDB, and Redis caching layers for high-throughput traffic spikes.",
    icon: "Server",
    tags: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker", "AWS"],
    highlight: "High concurrency & resilient microservices"
  },
  {
    id: "security-perf",
    title: "Performance & Security Hardening",
    description: "Sub-100ms API latency optimizations, SQL injection mitigation, JWT token rotation, rate limiting, and comprehensive OWASP vulnerability remediation.",
    icon: "ShieldCheck",
    tags: ["OWASP Audit", "JWT Security", "Rate Limiting", "CORS Policy", "SSL"],
    highlight: "Bank-grade encryption & stress-tested endpoints"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend & UI Architecture",
    icon: "Code2",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "React 19 / 18", level: 98, badge: "Master" },
      { name: "Next.js 14 (App Router)", level: 95, badge: "Expert" },
      { name: "TypeScript", level: 96, badge: "Expert" },
      { name: "Tailwind CSS & Glassmorphism", level: 98, badge: "Master" },
      { name: "Three.js / WebGL / GLSL", level: 88, badge: "Advanced" },
    ]
  },
  {
    title: "Mobile App Development",
    icon: "Smartphone",
    color: "from-blue-500 to-indigo-500",
    skills: [
      { name: "Flutter & Dart", level: 97, badge: "Master" },
      { name: "iOS & Android Native Integration", level: 92, badge: "Expert" },
      { name: "BLoC / Riverpod / Provider", level: 95, badge: "Expert" },
      { name: "Offline Sync & SQLite/Isar", level: 90, badge: "Advanced" },
      { name: "Push Notifications & Biometrics", level: 94, badge: "Expert" },
    ]
  },
  {
    title: "Backend & Cloud Architecture",
    icon: "Server",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Node.js & Express", level: 96, badge: "Master" },
      { name: "PostgreSQL & Prisma/Drizzle", level: 94, badge: "Expert" },
      { name: "Redis Caching & Pub/Sub", level: 90, badge: "Advanced" },
      { name: "Firebase Realtime DB & Auth", level: 95, badge: "Expert" },
      { name: "MongoDB & Mongoose", level: 92, badge: "Expert" },
    ]
  },
  {
    title: "AI Systems & Intelligence",
    icon: "Brain",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Google Gemini 2.5 SDK", level: 95, badge: "Expert" },
      { name: "RAG & Vector Databases (pgvector)", level: 92, badge: "Expert" },
      { name: "Autonomous Agent Tool Calling", level: 94, badge: "Expert" },
      { name: "OpenAI Embeddings & Prompting", level: 93, badge: "Expert" },
      { name: "WebSockets & Streaming Tokens", level: 96, badge: "Master" },
    ]
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "event-planner",
    title: "Event & QR Ticket Booking Platform",
    category: "Mobile",
    tagline: "High-Concurrency Mobile Ticket Booking & Seat Selector Engine",
    description: "Built for live concerts and events with real-time seat reservation grid, atomic concurrency locks, instant ticket generation, and high-speed QR barcode check-in.",
    stats: "15,000+ Tickets Issued | < 50ms Seat Hold Latency",
    tags: ["Flutter", "Firebase Realtime", "Node.js", "QR Barcode SDK"],
    techStack: ["Flutter iOS/Android", "Node.js", "Express", "Redis Seat Locker", "QR Generator"],
    features: [
      "Interactive 2D/3D venue seat reservation map",
      "Atomic 3-minute seat reservation hold using Redis TTL",
      "Encrypted QR barcode generation for gate check-in",
      "Offline offline-first gate scanner app mode"
    ],
    architecture: "Flutter Mobile App → Gateway API → Redis Lock Manager → PostgreSQL DB → Push Notification Gateway"
  },
  {
    id: "restaurant-qr",
    title: "Restaurant QR Menu & Kitchen Display System",
    category: "POS & Web",
    tagline: "Scan & Dine QR Menu, Cart Engine & Waiter Alert Bell",
    description: "Contactless dining platform enabling guests to scan table QR codes, customize menu items, dispatch instant kitchen orders to the Kitchen Display System (KDS), and trigger silent waiter calls.",
    stats: "40+ Restaurant Outlets | 30% Faster Order Processing",
    tags: ["Next.js 14", "React", "WebSockets", "Tailwind", "PostgreSQL"],
    techStack: ["Next.js 14", "Tailwind CSS", "Socket.io", "Express", "PostgreSQL"],
    features: [
      "Table-specific QR code scanning & instant menu render",
      "Real-time item search & dynamic modifier selections",
      "Instant Waiter Alert Bell with auditory KDS chime",
      "Live order status tracker (Preparing → Ready → Served)"
    ],
    architecture: "Client Web App → Socket.io Realtime Server → Kitchen Display Screen → Order Manager"
  },
  {
    id: "fantasy-sports",
    title: "Fantasy Sports Real-Time Match Telemetry Engine",
    category: "Real-time",
    tagline: "Live Scoring Telemetry & 2x Captain Multiplier Calculator",
    description: "High-frequency gaming telemetry platform processing live ball-by-ball sports feeds, dynamically computing user team leaderboards, and managing 2x Captain & 1.5x Vice Captain point multipliers.",
    stats: "100,000+ Live Users | 100ms Leaderboard Refresh",
    tags: ["React", "Node.js", "Redis Pub/Sub", "WebSockets", "MongoDB"],
    techStack: ["React 19", "Node.js", "Redis", "WebSocket Gateway", "Tailwind CSS"],
    features: [
      "Real-time ball-by-ball score telemetry feed stream",
      "Interactive squad builder with captain 2x multiplier toggle",
      "Live rank calculations across 50,000 concurrent contests",
      "Instant prize distribution engine with withdrawal audit"
    ],
    architecture: "Live Sports Data Feed → Redis Pub/Sub Worker → Scoring Engine → WebSocket Gateway → React Frontend"
  },
  {
    id: "wedding-vendor",
    title: "Wedding Vendor Marketplace & Budget Calculator",
    category: "Full Stack",
    tagline: "Interactive Guest Slider, Budget Allocation & Vendor Booking",
    description: "Comprehensive event marketplace platform for couples to manage guest lists, calculate venue/catering budget distributions, and send instant booking inquiries to verified wedding vendors.",
    stats: "$2.5M+ Event Budgets Managed | 250+ Verified Vendors",
    tags: ["Next.js 14", "PostgreSQL", "Prisma", "Tailwind", "Framer Motion"],
    techStack: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma ORM", "Tailwind CSS"],
    features: [
      "Interactive guest count slider with dynamic cost estimate",
      "Automated vendor category budget splitting algorithm",
      "Direct WhatsApp vendor intake quote generator",
      "Printable PDF event summary & checklist generator"
    ],
    architecture: "Next.js SSR Frontend → Prisma ORM → PostgreSQL → PDF Service → WhatsApp API Bridge"
  },
  {
    id: "lucky-draw",
    title: "Cryptographic SHA-256 Lucky Draw Engine",
    category: "Crypto & Security",
    tagline: "Provably Fair Animated Wheel & Cryptographic Seed Draw",
    description: "Auditable promotional draw application utilizing client/server cryptographic SHA-256 seeds to execute provably fair random winner selection with a glowing 3D-inspired wheel spin animation.",
    stats: "50,000+ Entries Verified | 100% Provably Fair Audit Rate",
    tags: ["React", "Crypto JS", "Web Audio API", "Tailwind", "Canvas API"],
    techStack: ["React", "Crypto Web API", "Canvas HTML5", "Tailwind CSS", "Audio Context"],
    features: [
      "Server-seed + Client-seed SHA-256 hashing proof generation",
      "High-frame-rate physics wheel spin animation",
      "Confetti particle explosion & winner reveal popup",
      "Downloadable cryptographic audit proof JSON"
    ],
    architecture: "Client Canvas UI → Web Crypto SHA-256 Hasher → Random Seed Generator → Verification Auditor"
  },
  {
    id: "ai-learning",
    title: "Enterprise Gemini 2.5 AI Agent & Query Sandbox",
    category: "AI Systems",
    tagline: "Autonomous Agent Reasoning Engine & Vector RAG Pipeline",
    description: "Enterprise knowledge base assistant powered by Google Gemini 2.5 SDK and pgvector, capable of real-time streaming answer generation, code synthesis, and source document citation.",
    stats: "< 300ms First Token Latency | 99.4% Citation Accuracy",
    tags: ["Gemini 2.5 SDK", "Node.js", "pgvector", "WebSockets", "Tailwind"],
    techStack: ["Google Gemini 2.5 SDK", "Node.js", "Express", "pgvector", "React UI"],
    features: [
      "Real-time streaming text token output display",
      "RAG document context vector lookup & relevance scoring",
      "Autonomous tool-calling step-by-step reasoning log",
      "One-click code snippet copy & markdown syntax highlighting"
    ],
    architecture: "User Query → Embedding Model → pgvector Semantic Search → Gemini 2.5 Reasoning API → SSE Stream UI"
  }
];

export const SYSTEM_BLUEPRINTS = [
  {
    id: "saas",
    title: "High-Concurrency SaaS Platform Architecture",
    description: "Designed for sub-100ms global latency with edge CDN routing, Redis cache warming, and PostgreSQL read-replicas.",
    nodes: ["Client Web/Mobile", "Cloudflare Edge CDN", "Next.js Server Actions", "Redis Cache Cluster", "PostgreSQL DB"]
  },
  {
    id: "mobile",
    title: "Offline-First Flutter Sync Pipeline",
    description: "Local SQLite/Isar storage with automatic delta conflict resolution over WebSockets upon reconnecting.",
    nodes: ["Flutter App (Local Isar DB)", "Sync Manager Engine", "WebSocket Gateway", "Background Worker", "Cloud DB"]
  },
  {
    id: "ai",
    title: "Gemini 2.5 RAG & Autonomous Agent Pipeline",
    description: "Enterprise semantic document indexing with vector embeddings, step-by-step tool invocation, and streaming response tokens.",
    nodes: ["User Input", "Vector Embeddings", "pgvector Search", "Gemini 2.5 AI Core", "Tool Executor / SSE UI"]
  }
];

export const TESTIMONIALS = [
  {
    name: "Vikram Mehta",
    role: "CEO & Founder, EventPulse India",
    content: "Shailesh delivered our Flutter event ticketing app in record time. The seat booking grid is buttery smooth even when 5,000 users attempt to reserve seats simultaneously!",
    avatar: "VM"
  },
  {
    name: "Sarah Jenkins",
    role: "Product Director, CloudSync SaaS (USA)",
    content: "Working with Shailesh on our Next.js 14 admin portal was seamless. His AI integration expertise and sub-100ms optimization mindset are world-class.",
    avatar: "SJ"
  },
  {
    name: "Rajesh Patel",
    role: "Operations Head, Hospitality Chain Gujarat",
    content: "The QR code menu system Shailesh architected increased our restaurant table turn speed by 30%. The waiter call bell feature is pure magic for our staff.",
    avatar: "RP"
  }
];
