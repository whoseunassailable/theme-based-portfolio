import type { ReactNode } from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

export type ProjectCard = {
  id: string;
  projectStack: string;
  nameOfProject: string;
  shortSummary: string;
  icon: ReactNode;
};

export const projects: ProjectCard[] = [
  {
    id: "readiculous",
    projectStack: "Data Science",
    nameOfProject: "Readiculous",
    shortSummary:
      "Full-stack book recommendation app; helps libraries stock relevant titles via location/genre analytics.",
    icon: <AutoStoriesIcon sx={{ width: "12vw", height: "12vw" }} />,
  },
  {
    id: "uniquest",
    projectStack: "Data Science",
    nameOfProject: "UniQuest",
    shortSummary:
      "Admission-chance prediction using ML (e.g., XGBoost/RF) with real-time API for a Flutter frontend.",
    icon: <AccountBalanceIcon sx={{ width: "5vw", height: "5vw" }} />,
  },
  // (extra items ready for future rows)
  {
    id: "bots-on-hire",
    projectStack: "Automation",
    nameOfProject: "Bots on Hire",
    shortSummary:
      "Python/Selenium bot that automates job applications on JobRight; reduces manual application time.",
    icon: <AccountBalanceIcon sx={{ width: "5vw", height: "5vw" }} />, // swap to a better icon later if you want
  },
  {
    id: "koko-fresh-agent",
    projectStack: "FinTech",
    nameOfProject: "Koko Fresh Agent / Inyange Agent",
    shortSummary:
      "Financial transaction platform: wallet top-ups, PIN/OTP, tokens, and real-time tracking for milk ATM agents.",
    icon: <AccountBalanceIcon sx={{ width: "5vw", height: "5vw" }} />,
  },
  {
    id: "koko-fresh-operator",
    projectStack: "Ops",
    nameOfProject: "Koko Fresh Operator / Inyange Operator",
    shortSummary:
      "ATM operations app: inventory/batch creation, dispatch with barcode + real-time tray tracking; forecasting boost.",
    icon: <AccountBalanceIcon sx={{ width: "5vw", height: "5vw" }} />,
  },
  {
    id: "coventry-meditation",
    projectStack: "Mobile",
    nameOfProject: "Coventry Meditation",
    shortSummary:
      "Flutter + Firebase app shipped to Play/App Store; CI/CD with Codemagic to accelerate reliable releases.",
    icon: <AccountBalanceIcon sx={{ width: "5vw", height: "5vw" }} />,
  },
];
