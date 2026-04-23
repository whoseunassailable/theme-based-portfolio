export type Metric = {
  label: string;
  value: string;
};

export type WorkExperienceKnowledge = {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  metrics: Metric[];
};

export type ProjectKnowledge = {
  id: string;
  name: string;
  category: string;
  sourceStatus: "repo-verified" | "resume-only";
  repoPath: string | null;
  oneLiner: string;
  problem: string;
  approach: string;
  architecture: string;
  outcome: string;
  metrics: Metric[];
};

export const workExperienceKnowledge: WorkExperienceKnowledge[] = [
  {
    id: "iit-pritzker-rush",
    company: "IIT - Pritzker Institute | Rush University Medical Center",
    role: "Mobile App Developer",
    location: "Chicago, USA",
    period: "Feb 2026 - Present",
    summary:
      "Building a mobile application for a smart-insole rehabilitation system used in clinical research, with session analysis, motion-tracking workflows, and cross-functional coordination across engineering and clinical teams.",
    metrics: [
      { label: "Clinical focus", value: "ACL + osteoarthritis rehabilitation" },
      { label: "Core workflows", value: "Session tracking + motion analysis" },
      { label: "Team ops", value: "Jira + Slack coordination" },
    ],
  },
  {
    id: "launch-ventures",
    company: "Launch Ventures",
    role: "Frontend Developer / Flutter Developer",
    location: "Pune, India",
    period: "Jun 2022 - May 2024",
    summary:
      "Engineered and shipped cross-platform client applications, improved interface performance, automated release workflows, and collaborated with international stakeholders to deliver scalable production-ready products.",
    metrics: [
      { label: "Apps shipped", value: "5+" },
      { label: "Users served", value: "10k+" },
      { label: "UI performance", value: "+25%" },
      { label: "Deployment cycle reduction", value: "30%" },
    ],
  },
  {
    id: "mit-foss",
    company: "MIT-FOSS",
    role: "Frontend Developer",
    location: "Pune, India",
    period: "Jun 2021 - Oct 2021",
    summary:
      "Designed wireframes, UML diagrams, and responsive web interfaces to improve software planning, interface clarity, and cross-platform usability.",
    metrics: [
      { label: "Wireframes / prototypes", value: "5+" },
      { label: "Core deliverables", value: "UML diagrams + responsive websites" },
    ],
  },
  {
    id: "excelerate",
    company: "Excelerate",
    role: "Data Analyst Associate Intern",
    location: "Remote, USA",
    period: "Jun 2024 - Jul 2024",
    summary:
      "Performed data analysis and insight generation to improve the accuracy of data-driven decision making for business stakeholders.",
    metrics: [
      { label: "Decision-making accuracy", value: "+30%" },
      { label: "Core work", value: "Analysis + reporting insights" },
    ],
  },
];

export const projectKnowledge: ProjectKnowledge[] = [
  {
    id: "readiculous",
    name: "Readiculous",
    category: "Data Science / Full Stack",
    sourceStatus: "repo-verified",
    repoPath: "/Users/whoseunassailable/Documents/projects/readiculous",
    oneLiner:
      "Community-driven book recommendation platform that helps libraries stock titles readers in their area actually want to borrow.",
    problem:
      "Libraries often rely on static inventory decisions, which leaves shelves filled with low-circulation books while in-demand genres and titles remain understocked. That creates wasted shelf space, weak reader engagement, and poor inventory relevance.",
    approach:
      "Capture reader preferences, reading history, and genre trends, then combine those signals with a hybrid recommendation engine to generate both personalized reader suggestions and library-level stocking recommendations for librarians to review and act on.",
    architecture:
      "The system is split into a Flutter client for readers and librarians, a Node.js plus MySQL backend for operational data and APIs, and a Python Flask ML microservice that blends XGBoost, TF-IDF cosine similarity, and Surprise SVD using a 100k-book GoodReads dataset.",
    outcome:
      "Turned library stocking into a data-backed workflow with real-time recommendations for users and librarians, enabling smarter purchasing decisions and more relevant local inventory.",
    metrics: [
      { label: "Training dataset", value: "100k books" },
      { label: "Shelf space waste", value: "-25%" },
      { label: "Relevant inventory", value: "+15%" },
    ],
  },
  {
    id: "uniquest",
    name: "UniQuest",
    category: "Education / Decision Support",
    sourceStatus: "repo-verified",
    repoPath:
      "/Users/whoseunassailable/Documents/projects/college_projects/uni_quest_project",
    oneLiner:
      "Admissions guidance platform for comparing universities, programs, rankings, funding, and admission fit from one student-facing workflow.",
    problem:
      "Students researching graduate opportunities often have to piece together admissions requirements, rankings, funding information, and application readiness across disconnected sources, which makes school selection slow and error-prone.",
    approach:
      "Create a guided questionnaire and admission-fit flow that captures student data, routes them through GRE, TOEFL, IELTS, and GMAT related screens, and connects profile information with university, program, ranking, and funding records served from a backend API.",
    architecture:
      "The project uses a Flutter frontend with Riverpod, router-based navigation, localization support, and feature-specific presentation screens, backed by a Node.js API and a MySQL schema covering students, universities, programs, rankings, funding, admissions, wishlists, and applications.",
    outcome:
      "Centralized admissions research into a single workflow so students could compare schools, track profile data, and estimate fit without manually reconciling multiple systems.",
    metrics: [
      { label: "Backend entities", value: "8+ core tables" },
      {
        label: "Decision inputs",
        value: "Programs, rankings, funding, admissions, applications",
      },
    ],
  },
  {
    id: "bots-on-hire",
    name: "Bots on Hire",
    category: "Automation",
    sourceStatus: "repo-verified",
    repoPath:
      "/Users/whoseunassailable/Documents/projects/personal_projects/bots_on_hire",
    oneLiner:
      "Browser automation bot that logs in, navigates job portals, fills forms, and submits applications with reusable templates.",
    problem:
      "Manual job applications are repetitive and time-consuming, especially when the same profile details, documents, and eligibility answers need to be entered across many listings.",
    approach:
      "Automate the application flow end to end by handling login, job navigation, eligibility checks, template selection, form completion, document upload, and submission while recording application state and capturing debug screenshots for failures.",
    architecture:
      "The project is organized as a modular Python automation codebase with portal-specific packages, environment-based credential loading, JSON tracking for applied jobs, logging, and Selenium-driven browser workflows that can be extended to new platforms.",
    outcome:
      "Reduced repetitive application effort and created a repeatable, debuggable automation workflow for bulk job submissions.",
    metrics: [
      { label: "Automation scope", value: "Login to submit flow" },
      { label: "State tracking", value: "Applied jobs JSON + debug screenshots" },
    ],
  },
  {
    id: "koko-fresh-agent",
    name: "Koko Fresh Agent / Inyange Agent",
    category: "FinTech / Operations",
    sourceStatus: "repo-verified",
    repoPath:
      "/Users/whoseunassailable/Documents/projects/company_projects/fresh-agent",
    oneLiner:
      "Agent-facing transaction platform for milk ATM operations, covering wallet top-ups, customer workflows, secure verification, and token-based transactions.",
    problem:
      "Field agents handling milk ATM transactions need a secure and reliable way to manage customer accounts, balances, wallet top-ups, and token-driven sales without fragmented manual processes.",
    approach:
      "Build dedicated flows for authentication, customer lookup and creation, wallet management, top-up operations, OTP and PIN verification, token handling, and performance visibility so agents can complete transactions and support customers from one application.",
    architecture:
      "The app is structured as a Flutter codebase with feature modules for authentication, account, customer, token, home, and top-up, using BLoC, dependency injection, Retrofit and Dio API services, QR and NFC tooling, Firebase services, and shared widgets for transactional workflows.",
    outcome:
      "Improved operational efficiency for ATM agents by consolidating financial workflows into one platform and making the same system adaptable for Inyange milk delivery operations with minimal changes.",
    metrics: [
      { label: "Transaction analysis improvement", value: "+18%" },
      { label: "Core controls", value: "Wallet top-up + OTP/PIN + tokens" },
    ],
  },
  {
    id: "koko-fresh-operator",
    name: "Koko Fresh Operator / Inyange Operator",
    category: "Operations / Supply Chain",
    sourceStatus: "repo-verified",
    repoPath:
      "/Users/whoseunassailable/Documents/projects/company_projects/fresh-operator",
    oneLiner:
      "Operator console for managing milk dispensing ATMs, inventory batches, dispatch workflows, and tray-level operational tracking.",
    problem:
      "Milk ATM operations require a centralized way to monitor machines, create and dispatch inventory batches, validate trays, and respond quickly to changing demand without relying on disconnected operational tools.",
    approach:
      "Develop ATM, batch, dispatch, and authentication workflows that let operators manage machine state, track dispatch status, scan or capture tray identifiers, and support forecasting and verification tasks from one interface.",
    architecture:
      "The system is a Flutter application organized around ATM, auth, batch, dispatch, and home feature modules, with BLoC state management, Dio and Retrofit networking, barcode scanning, camera capture, NFC, MQTT, remote config, and cloud-connected asset workflows.",
    outcome:
      "Provided an end-to-end operational control layer for milk ATM logistics, improving demand planning, visibility into dispatches, and tray verification accuracy.",
    metrics: [
      { label: "ATMs managed", value: "10+" },
      { label: "Forecasting accuracy", value: "+30%" },
      { label: "Tray identification efficiency", value: "2x" },
    ],
  },
  {
    id: "feetback",
    name: "Feetback",
    category: "HealthTech / Biofeedback",
    sourceStatus: "repo-verified",
    repoPath:
      "/Users/whoseunassailable/Documents/projects/company_projects/Gait-feedback/open_go",
    oneLiner:
      "Real-time gait biofeedback app that converts smart-insole pressure signals into adaptive audio cues for rehabilitation sessions.",
    problem:
      "Rehabilitation patients and clinicians need immediate feedback on gait quality during training, but raw sensor streams are difficult to interpret in real time without an intuitive response mechanism.",
    approach:
      "Stream Moticon insole data, run calibration and pressure analysis to detect gait quality thresholds, and translate center-of-pressure and force signals into dynamic audio feedback that changes during each step.",
    architecture:
      "The application uses a Flutter client with controllers for baseline calibration, sensor input, pressure analysis, audio feedback, and session management, plus BLE and UDP sensor services, protobuf models, stored session history, and audio playback services for live sonification.",
    outcome:
      "Created a working rehabilitation feedback loop that supports calibration, live session playback, and post-session metrics for biofeedback-driven gait training.",
    metrics: [
      { label: "Calibration duration", value: "180 seconds" },
      { label: "Feedback model", value: "Step-based adaptive audio cues" },
    ],
  },
  {
    id: "pittsburgh-regional-transit",
    name: "Pittsburgh Regional Transit Dashboard",
    category: "Analytics / Data Platform",
    sourceStatus: "repo-verified",
    repoPath:
      "/Users/whoseunassailable/Documents/projects/college_projects/transit_final_project/pittsburg_regional_transit",
    oneLiner:
      "Transit analytics dashboard that combines survey data, route redesign feedback, and an optional AI assistant for route-level analysis.",
    problem:
      "Transit survey feedback is hard to act on when rider comments, route redesign responses, and demographic trends are stored in separate datasets without a route-level decision interface.",
    approach:
      "Clean and normalize multiple survey sources, build SQLite databases for combined route analysis, and surface the results through a static dashboard with maps, charts, recommendation logic, comment evidence, and an optional local AI route assistant.",
    architecture:
      "The project combines Python notebooks and ETL scripts, multiple SQLite databases, a deployable static dashboard in docs, and a FastAPI plus Ollama local assistant service for natural-language route exploration.",
    outcome:
      "Delivered a route-level analysis workflow that makes rider sentiment, complaint themes, demographic breakdowns, and recommendation evidence accessible in one dashboard.",
    metrics: [
      { label: "Survey responses analyzed", value: "15,000+" },
      { label: "Rider comments analyzed", value: "10,000+" },
      { label: "Routes covered", value: "98" },
    ],
  },
];

export const unresolvedProjectReferences = [
  {
    name: "Careculator",
    reason:
      "Mentioned in resume text, but no matching local project directory was found under /Users/whoseunassailable/Documents/projects during this pass.",
  },
  {
    name: "FullHeart Mindfulness / Coventry Meditation",
    reason:
      "Mentioned in resume or current website content, but no matching local project directory was found under /Users/whoseunassailable/Documents/projects during this pass.",
  },
];
