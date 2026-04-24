import type { ReactNode } from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import DirectionsTransitIcon from "@mui/icons-material/DirectionsTransit";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import HealingIcon from "@mui/icons-material/Healing";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

export type ProjectCard = {
  id: string;
  projectStack: string;
  categories: string[];
  nameOfProject: string;
  shortSummary: string;
  icon: ReactNode;
  iconScale?: number;
  detailEnabled: boolean;
  externalUrl?: string;
};

export const projects: ProjectCard[] = [
  {
    id: "readiculous",
    projectStack: "Data Science",
    categories: ["Frontend", "Backend", "Data Science"],
    nameOfProject: "Readiculous",
    shortSummary:
      "Full-stack book recommendation app; helps libraries stock relevant titles via location/genre analytics.",
    icon: <AutoStoriesIcon />,
    iconScale: 0.9,
    detailEnabled: true,
  },
  {
    id: "uniquest",
    projectStack: "Data Science",
    categories: ["Backend", "Data Science", "Mobile Development"],
    nameOfProject: "UniQuest",
    shortSummary:
      "Admission-chance prediction using ML (e.g., XGBoost/RF) with real-time API for a Flutter frontend.",
    icon: <AccountBalanceIcon />,
    iconScale: 0.84,
    detailEnabled: true,
  },
  {
    id: "bots-on-hire",
    projectStack: "Automation",
    categories: ["Backend"],
    nameOfProject: "Bots on Hire",
    shortSummary:
      "Python/Selenium bot that automates job applications on JobRight; reduces manual application time.",
    icon: <SmartToyIcon />,
    iconScale: 0.9,
    detailEnabled: true,
  },
  {
    id: "koko-fresh-agent",
    projectStack: "FinTech",
    categories: ["Mobile Development"],
    nameOfProject: "Inyange Agent",
    shortSummary:
      "Financial transaction platform: wallet top-ups, PIN/OTP, tokens, and real-time tracking for milk ATM agents.",
    icon: <AccountBalanceIcon />,
    iconScale: 0.84,
    detailEnabled: true,
    externalUrl: "https://www.fresh-networks.com/",
  },
  {
    id: "koko-fresh-operator",
    projectStack: "Ops",
    categories: ["Mobile Development"],
    nameOfProject: "Inyange Operator",
    shortSummary:
      "ATM operations app: inventory/batch creation, dispatch with barcode + real-time tray tracking; forecasting boost.",
    icon: <AccountBalanceIcon />,
    iconScale: 0.84,
    detailEnabled: true,
    externalUrl: "https://www.fresh-networks.com/",
  },
  {
    id: "feetback",
    projectStack: "HealthTech",
    categories: ["Mobile Development"],
    nameOfProject: "Feetback",
    shortSummary:
      "Real-time gait biofeedback app that converts smart-insole pressure signals into adaptive audio feedback.",
    icon: <HealingIcon />,
    iconScale: 0.94,
    detailEnabled: true,
  },
  {
    id: "pittsburgh-regional-transit",
    projectStack: "Data Science",
    categories: ["Frontend", "Backend", "Data Science"],
    nameOfProject: "Pittsburgh Regional Transit",
    shortSummary:
      "Transit analytics dashboard with route-level feedback analysis, ETL pipelines, and an optional AI assistant.",
    icon: <DirectionsTransitIcon />,
    iconScale: 0.9,
    detailEnabled: true,
    externalUrl: "https://pittsburg-regional-transit-cfm3.vercel.app/",
  },
  {
    id: "careculator",
    projectStack: "HealthTech",
    categories: ["Frontend"],
    nameOfProject: "Careculator",
    shortSummary:
      "Healthcare cost-planning platform for comparing clinics and insurance options with recommendation support.",
    icon: <HealthAndSafetyIcon />,
    iconScale: 0.88,
    detailEnabled: false,
    externalUrl: "https://coverfind.vercel.app/",
  },
  {
    id: "fullheart-mindfulness",
    projectStack: "Mobile",
    categories: ["Mobile Development"],
    nameOfProject: "FullHeart Mindfulness",
    shortSummary:
      "Flutter + Firebase app shipped to Play/App Store; CI/CD with Codemagic to accelerate reliable releases.",
    icon: <PhoneIphoneIcon />,
    iconScale: 0.9,
    detailEnabled: false,
    externalUrl:
      "https://play.google.com/store/apps/details?id=com.lv.project_meditation",
  },
];
