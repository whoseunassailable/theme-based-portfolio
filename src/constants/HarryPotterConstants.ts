export interface HarryPotterWorkExperienceItem {
  id: number;
  company: string;
  role: string;
  dates: string;
  where: string;
  medallion: string;
  bullets: string[];
}

export interface HarryPotterPotion {
  name: string;
  desc: string;
  glyph: string;
  c1: string;
  c2: string;
}

export interface HarryPotterJourneyNode {
  title: string;
  sub: string;
  icon: string;
}

export interface HarryPotterProject {
  id: string;
  title: string;
  summary: string;
  category: 'mobile' | 'data' | 'web';
  icon: string;
  period: string;
  role: string;
  tech: string[];
  bullets: string[];
}

export class HarryPotterConstants {
  static WORK_EXPERIENCE: HarryPotterWorkExperienceItem[] = [
    {
      id: 0,
      company: 'IIT Pritzker / Rush University',
      role: 'Mobile App Developer',
      dates: 'Feb 2026 – Present',
      where: 'Chicago, USA',
      medallion: 'wand',
      bullets: [
        'Built a mobile application for a smart-insole rehabilitation system enabling clinical session analysis.',
        'Implemented session tracking and motion analysis, improving clinician workflow and patient monitoring.',
        'Coordinated cross-functional development using Jira and Slack, aligning engineering with clinical research.',
      ],
    },
    {
      id: 1,
      company: 'Launch Ventures',
      role: 'Software Developer',
      dates: 'Jun 2022 – May 2024',
      where: 'Pune, India',
      medallion: 'orb',
      bullets: [
        'Engineered 5+ cross-platform Flutter & Firebase applications serving 10k+ users.',
        'Improved UI performance by 25% via optimized rendering and state management.',
        'Automated CI/CD (Codemagic) pipelines, reducing deployment cycles by 30%.',
        'Partnered with international clients to deliver scalable mobile solutions.',
      ],
    },
    {
      id: 2,
      company: 'Excelerate',
      role: 'Data Analyst Associate Intern',
      dates: 'Jun 2024 – Jul 2024',
      where: 'Remote, USA',
      medallion: 'crystal',
      bullets: [
        'Analyzed user data to derive meaningful insights, achieving a 30% improvement in data-driven decision accuracy.',
        'Built dashboards and visual reports for stakeholders.',
        'Delivered insights for US and Dubai partner teams.',
      ],
    },
    {
      id: 3,
      company: 'MIT-FOSS',
      role: 'Frontend Developer Intern',
      dates: 'Jul 2021 – Oct 2021',
      where: 'Pune, India',
      medallion: 'paw',
      bullets: [
        'Designed 5+ wireframes and a final prototype in Figma.',
        'Built responsive web experiences using HTML, CSS, JavaScript.',
        'Created UML flowcharts and design models supporting data organization.',
      ],
    },
  ];

  static POTIONS: HarryPotterPotion[] = [
    { name: 'Frontend',          desc: 'Crafting responsive and intuitive UIs.',                  glyph: 'F',  c1: '#6ec6ff', c2: '#1d4a85' },
    { name: 'Data Science & AI', desc: 'Extracting insights and building intelligent systems.',   glyph: 'Ψ',  c1: '#a98add', c2: '#3a2570' },
    { name: 'Backend',           desc: 'Building robust APIs and scalable architectures.',        glyph: '✦',  c1: '#7ddc9a', c2: '#1f5a3a' },
    { name: 'Mobile Dev',        desc: 'Creating cross-platform apps that perform.',              glyph: '⚡', c1: '#f0b85a', c2: '#824510' },
  ];

  static JOURNEY: HarryPotterJourneyNode[] = [
    { title: 'B.Tech',          sub: 'Foundation',       icon: 'cap'     },
    { title: 'MIT-FOSS',        sub: 'Frontend Intern',  icon: 'lantern' },
    { title: 'Launch Ventures', sub: 'Building Impact',  icon: 'rocket'  },
    { title: 'Excelerate',      sub: 'Data Insights',    icon: 'chart'   },
    { title: "Master's @ IIT",  sub: 'Applied AI',       icon: 'tome'    },
  ];

  static PROJECTS: HarryPotterProject[] = [
    {
      id: 'feetback',
      title: 'Feetback',
      summary: 'Real-time gait-to-audio biofeedback for rehabilitation.',
      category: 'mobile',
      icon: 'wand',
      period: 'Feb 2026 – Present',
      role: 'Mobile App Developer · IIT Pritzker / Rush University',
      tech: ['Flutter', 'Wwise', 'MoticonGO', 'Dart'],
      bullets: [
        'Designed a real-time gait-to-audio feedback system, mapping biomechanical signals to adaptive sound cues for rehabilitation.',
        'Used MoticonGO sensors to collect gait data and converted it into audio parameters, enabling biofeedback-driven therapy.',
        'Integrated the Wwise audiokinetic engine for dynamic feedback generation based on live sensor input.',
      ],
    },
    {
      id: 'pittsburgh-regional-transit',
      title: 'Pittsburgh Transit',
      summary: 'LLM-powered analytics across 98 transit routes.',
      category: 'data',
      icon: 'orb',
      period: 'Jan 2026 – Present',
      role: 'Data Platform · Master\'s Project',
      tech: ['Python', 'LLM', 'ETL', 'Plotly', 'Leaflet'],
      bullets: [
        'Built a data platform analyzing 15,000+ real-world survey responses and 10,000+ rider comments across 98 transit routes.',
        'Developed an LLM-powered assistant enabling natural-language queries for route insights and sentiment analysis.',
        'Designed ETL pipelines and dashboards to identify complaint patterns and improve transit planning decisions.',
        'Integrated Leaflet and Plotly to build interactive maps and visualizations for demographic trends.',
      ],
    },
    {
      id: 'careculator',
      title: 'Careculator',
      summary: 'Healthcare cost-planning across 9k+ clinics.',
      category: 'web',
      icon: 'scales',
      period: 'Oct 2025 – Jan 2026',
      role: 'Full-Stack Developer',
      tech: ['JavaScript', 'Node.js', 'HRSA/CMS', 'Recommender'],
      bullets: [
        'Built a healthcare cost-planning platform helping users search 9,000+ clinics and 7,000+ insurance plans.',
        'Designed a recommendation system using ranking algorithms and multi-criteria filtering to optimize care selection.',
        'Implemented optimized data retrieval and indexing strategies, improving query efficiency and reducing latency.',
      ],
    },
    {
      id: 'readiculous',
      title: 'Readiculous',
      summary: 'Hybrid book recommendation engine.',
      category: 'data',
      icon: 'book',
      period: 'Jan 2025 – Feb 2026',
      role: 'Full-Stack / ML Engineer',
      tech: ['XGBoost', 'TF-IDF', 'Flask', 'Node.js', 'MySQL'],
      bullets: [
        'Developed a hybrid recommendation engine using XGBoost, TF-IDF/cosine similarity, and SVD collaborative filtering.',
        'Trained and evaluated models on a 100k-book GoodReads dataset plus live user interaction data.',
        'Deployed a Python Flask ML microservice integrated with a Node.js/MySQL backend powering real-time recommendations.',
      ],
    },
    {
      id: 'fresh-operator',
      title: 'Koko Fresh',
      summary: 'Operator suite for milk-dispensing ATMs.',
      category: 'mobile',
      icon: 'compass',
      period: 'Oct 2022 – May 2024',
      role: 'Flutter Developer · Launch Ventures',
      tech: ['Flutter', 'Firebase', 'AI Forecast', 'Camera'],
      bullets: [
        'Developed an application to monitor and manage 10 milk dispensing ATMs, featuring inventory and batch creation.',
        'Built AI-powered order forecasting (30% accuracy boost) and a dispatch management system.',
        'Engineered a camera-based serial ID capture module for accurate tray verification.',
      ],
    },
    {
      id: 'fullheart',
      title: 'FullHeart',
      summary: 'Cross-platform meditation app on Play Store + App Store.',
      category: 'mobile',
      icon: 'heart',
      period: 'Oct 2022 – Jan 2023',
      role: 'Mobile Developer',
      tech: ['Flutter', 'Firebase', 'CI/CD'],
      bullets: [
        'Developed, tested, and deployed the app to both Android and iOS platforms.',
        'Translated Figma designs into responsive UIs and implemented full application workflows.',
        'Integrated Firebase backend and CI/CD pipelines, reducing deployment time by 30%.',
      ],
    },
    {
      id: 'fresh-agent',
      title: 'Fresh Agent',
      summary: 'Financial transaction platform for milk ATM agents.',
      category: 'mobile',
      icon: 'compass',
      period: 'Oct 2022 – May 2024',
      role: 'Flutter Developer · Launch Ventures',
      tech: ['Flutter', 'Firebase', 'PIN/OTP', 'Real-time'],
      bullets: [
        'Built a wallet top-up and transaction platform for milk ATM agents with PIN/OTP verification.',
        'Implemented token-based authentication and real-time transaction tracking.',
        'Delivered a seamless agent experience for field operations across multiple sites.',
      ],
    },
    {
      id: 'inyange-agent',
      title: 'Inyange Agent',
      summary: 'Localized agent workflow for milk distribution operations.',
      category: 'mobile',
      icon: 'wand',
      period: 'Oct 2022 – May 2024',
      role: 'Flutter Developer · Launch Ventures',
      tech: ['Flutter', 'Firebase', 'Localization', 'Dart'],
      bullets: [
        'Adapted the Fresh transaction platform for Inyange deployments with locale-specific workflows.',
        'Implemented agent-side inventory management and dispatch validation.',
        'Maintained feature parity with the Fresh Agent app while supporting localized business logic.',
      ],
    },
    {
      id: 'inyange-operator',
      title: 'Inyange Operator',
      summary: 'Operations console for Inyange field logistics.',
      category: 'mobile',
      icon: 'orb',
      period: 'Oct 2022 – May 2024',
      role: 'Flutter Developer · Launch Ventures',
      tech: ['Flutter', 'Barcode', 'Firebase', 'Dart'],
      bullets: [
        'Adapted the Fresh Operator platform for Inyange field logistics and inventory workflows.',
        'Integrated barcode scanning for dispatch validation and tray-level tracking.',
        'Delivered real-time inventory updates and batch management for Inyange ATM operations.',
      ],
    },
    {
      id: 'bots-on-hire',
      title: 'Bots on Hire',
      summary: 'Python automation bot for job application flows.',
      category: 'web',
      icon: 'crystal',
      period: '2024',
      role: 'Backend Developer',
      tech: ['Python', 'Selenium', 'Automation', 'Tracking'],
      bullets: [
        'Built a Python automation bot that handles end-to-end job application flows.',
        'Implemented submission state tracking and reusable portal interaction modules.',
        'Reduced manual application effort through intelligent retry logic and form auto-fill.',
      ],
    },
    {
      id: 'uniquest',
      title: 'UniQuest',
      summary: 'ML-powered admission-chance prediction with Flutter frontend.',
      category: 'data',
      icon: 'scales',
      period: '2024',
      role: 'Full-Stack / ML Engineer',
      tech: ['XGBoost', 'Random Forest', 'Flask', 'Flutter'],
      bullets: [
        'Built an admission-chance prediction system using XGBoost and Random Forest classifiers.',
        'Deployed a real-time REST API via Flask, consumed by a cross-platform Flutter frontend.',
        'Trained models on historical admission data and evaluated performance across GPA, GRE, and research factors.',
      ],
    },
  ];
}
