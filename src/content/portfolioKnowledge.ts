export type Metric = {
  label: string;
  value: string;
};

export type CaseStudyStep = {
  title: string;
  detail: string;
};

export type CaseStudyBlock = {
  title: string;
  detail: string;
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
  flowSteps: CaseStudyStep[];
  architectureBlocks: CaseStudyBlock[];
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
    flowSteps: [
      {
        title: "Reader Intake",
        detail: "Readers create accounts, log books, and build preference signals through genre-linked activity.",
      },
      {
        title: "Trend Aggregation",
        detail: "Community reading patterns are grouped by library context to reveal what local readers actually want.",
      },
      {
        title: "ML Recommendation",
        detail: "Hybrid recommendation services turn those signals into user suggestions and stocking candidates.",
      },
      {
        title: "Librarian Action",
        detail: "Librarians review, approve, order, and stock titles based on tracked recommendation status.",
      },
    ],
    architectureBlocks: [
      {
        title: "Flutter Client",
        detail: "Role-based reader and librarian flows built with Riverpod, go_router, Dio, and Retrofit.",
      },
      {
        title: "Operational API",
        detail: "Node.js and MySQL services handle users, books, libraries, reads, and recommendation lifecycle data.",
      },
      {
        title: "ML Service",
        detail: "Python and Flask scoring combines XGBoost, TF-IDF similarity, and SVD over large book-rating datasets.",
      },
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
    flowSteps: [
      {
        title: "Profile Intake",
        detail: "Students enter academic background, exam scores, goals, and application preferences.",
      },
      {
        title: "Program Matching",
        detail: "The app links that profile to universities, rankings, funding, and admission requirement records.",
      },
      {
        title: "Fit Evaluation",
        detail: "Admission-fit logic compares student data against score thresholds and program constraints.",
      },
      {
        title: "Decision Support",
        detail: "Students browse shortlisted schools, save options, and compare programs in one workflow.",
      },
    ],
    architectureBlocks: [
      {
        title: "Flutter Frontend",
        detail: "Riverpod-driven mobile UI with routed screens, localization, and student-facing forms.",
      },
      {
        title: "Node.js API",
        detail: "Backend endpoints serve universities, funding, rankings, admissions, and user-specific workflows.",
      },
      {
        title: "MySQL Schema",
        detail: "Relational data model covers students, universities, programs, applications, wishlists, and rankings.",
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
    flowSteps: [
      {
        title: "Credential Load",
        detail: "Environment-backed credentials and configuration are loaded before a run starts.",
      },
      {
        title: "Portal Navigation",
        detail: "The bot logs in, traverses listings, and routes by application type or eligibility flow.",
      },
      {
        title: "Form Automation",
        detail: "Reusable automation routines fill profile details, attach documents, and handle submission paths.",
      },
      {
        title: "State Capture",
        detail: "Applied jobs, logs, and screenshots are recorded so failures can be debugged and reruns stay clean.",
      },
    ],
    architectureBlocks: [
      {
        title: "Python Runner",
        detail: "Main automation entrypoint orchestrates runs and coordinates service modules.",
      },
      {
        title: "Portal Modules",
        detail: "JobRight and related flows are isolated into login, navigation, and application-specific packages.",
      },
      {
        title: "Tracking Layer",
        detail: "JSON state files, logs, screenshots, and env-based config make the workflow repeatable and debuggable.",
      },
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
    flowSteps: [
      {
        title: "Agent Authentication",
        detail: "Agents sign in and load role-specific account and wallet context before serving customers.",
      },
      {
        title: "Customer Handling",
        detail: "Search, create, and update customer records from a single field-operations interface.",
      },
      {
        title: "Transaction Execution",
        detail: "Top-ups, token actions, and sales flows run through OTP, PIN, and verification checkpoints.",
      },
      {
        title: "Operational Visibility",
        detail: "Agents track balances, token state, and transaction progress without switching tools.",
      },
    ],
    architectureBlocks: [
      {
        title: "Flutter App",
        detail: "Feature modules for auth, home, token, customer, account, and top-up flows drive the field UI.",
      },
      {
        title: "State + API Layer",
        detail: "BLoC, dependency injection, Dio, and Retrofit coordinate transactional data and backend services.",
      },
      {
        title: "Device Integrations",
        detail: "QR, NFC, Firebase, and shared widgets support secure agent workflows in real operating conditions.",
      },
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
    flowSteps: [
      {
        title: "Machine Oversight",
        detail: "Operators monitor ATM state, inventory context, and dispatch readiness from a central console.",
      },
      {
        title: "Batch Planning",
        detail: "Inventory batches are created, grouped, and prepared for machine delivery workflows.",
      },
      {
        title: "Dispatch Validation",
        detail: "Tray, barcode, and capture steps verify that physical inventory is mapped to the right machine flow.",
      },
      {
        title: "Demand Feedback",
        detail: "Operator data feeds demand planning and restocking decisions for better forecasting accuracy.",
      },
    ],
    architectureBlocks: [
      {
        title: "Operator Console",
        detail: "Flutter screens organized around ATM, batch, dispatch, auth, and home modules.",
      },
      {
        title: "Workflow Services",
        detail: "BLoC, Dio, and Retrofit power dispatch state, machine updates, and operator-side logistics actions.",
      },
      {
        title: "Capture + Messaging",
        detail: "Barcode, camera, NFC, MQTT, and remote config connect physical dispatch workflows to cloud state.",
      },
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
    flowSteps: [
      {
        title: "Sensor Connection",
        detail: "The app pairs with Moticon insoles and starts receiving force and pressure streams.",
      },
      {
        title: "Baseline Calibration",
        detail: "A guided session establishes thresholds and reference pressure behavior for the user.",
      },
      {
        title: "Gait Analysis",
        detail: "Center-of-pressure and load patterns are evaluated in real time to detect gait quality.",
      },
      {
        title: "Adaptive Audio",
        detail: "Feedback tones change step by step and session data is stored for post-session review.",
      },
    ],
    architectureBlocks: [
      {
        title: "Flutter Session UI",
        detail: "Calibration, session, playback, and progress screens drive rehabilitation use during live training.",
      },
      {
        title: "Sensor Services",
        detail: "BLE and UDP services plus protobuf models translate raw smart-insole streams into usable state.",
      },
      {
        title: "Feedback Engine",
        detail: "Controllers for pressure analysis, session management, and audio playback create the live biofeedback loop.",
      },
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
    flowSteps: [
      {
        title: "Survey Ingestion",
        detail: "General and route-specific rider feedback sources are cleaned and normalized into analysis-ready datasets.",
      },
      {
        title: "Route Modeling",
        detail: "SQLite builders connect demographics, comments, redesign feedback, and recommendation evidence by route.",
      },
      {
        title: "Dashboard Delivery",
        detail: "A static dashboard surfaces maps, charts, comments, and recommendation logic for route-level exploration.",
      },
      {
        title: "Local AI Assistant",
        detail: "A FastAPI plus Ollama service optionally layers route Q&A on top of the dashboard’s evidence base.",
      },
    ],
    architectureBlocks: [
      {
        title: "ETL + Notebooks",
        detail: "Python notebooks and scripts clean survey exports, join route variants, and rebuild analysis assets.",
      },
      {
        title: "SQLite Data Layer",
        detail: "Multiple route-focused databases store consolidated, specific-route, combined, and meta-feedback views.",
      },
      {
        title: "Dashboard + Assistant",
        detail: "A static docs-based dashboard is paired with an optional FastAPI and Ollama local assistant backend.",
      },
    ],
  },
  {
    id: "careculator",
    name: "Careculator",
    category: "HealthTech / Decision Support",
    sourceStatus: "repo-verified",
    repoPath:
      "/Users/whoseunassailable/Documents/projects/college_projects/coverfind",
    oneLiner:
      "Healthcare search and decision-support app that ranks nearby clinics using condition, cost, distance, and outcome signals.",
    problem:
      "Patients comparing care options often have to bounce across provider directories, insurance tools, and incomplete cost estimates, making it difficult to choose the right clinic with confidence.",
    approach:
      "Guide users through a search wizard based on condition, location, and optional insurance inputs, then rank clinics using explainable tradeoffs between cost, recovery, outcome quality, visit count, and treatment burden.",
    architecture:
      "The system combines a React and TypeScript frontend, an Express API, a read-only SQLite database built from HRSA and CMS data, and Python data-pipeline scripts that prepare and migrate the healthcare datasets used at runtime.",
    outcome:
      "Turned fragmented healthcare search into a single comparison workflow where users can discover clinics, inspect recommendation reasoning, compare options side by side, and make more informed care decisions.",
    metrics: [
      { label: "Clinics indexed", value: "9,323" },
      { label: "Insurance plans", value: "7,349" },
      { label: "SQLite runtime DB", value: "264 MB" },
    ],
    flowSteps: [
      {
        title: "Search Intake",
        detail: "Users enter a condition and ZIP code, then optionally narrow by insurer and plan type.",
      },
      {
        title: "Clinic Filtering",
        detail: "The backend filters clinics by condition, specialty, state, and optional geography before ranking.",
      },
      {
        title: "Dynamic Ranking",
        detail: "Cost and recovery-oriented scores are combined using a priority slider so tradeoffs remain explainable.",
      },
      {
        title: "Decision Compare",
        detail: "Users inspect recommendation tags, compare clinics side by side, and review cost and outcome signals.",
      },
    ],
    architectureBlocks: [
      {
        title: "React Frontend",
        detail: "Vite-based SPA with search wizard, results pages, comparison views, and summary flows.",
      },
      {
        title: "Express API",
        detail: "Route-controller-service-model split handles clinic search, insurance metadata, ZIP lookup, and compare endpoints.",
      },
      {
        title: "SQLite + Data Pipeline",
        detail: "HRSA and CMS data are transformed by Python scripts into a runtime SQLite database used by the API.",
      },
    ],
  },
];

export const unresolvedProjectReferences = [
  {
    name: "FullHeart Mindfulness / Coventry Meditation",
    reason:
      "Mentioned in resume or current website content, but no matching local project directory was found under /Users/whoseunassailable/Documents/projects during this pass.",
  },
];
