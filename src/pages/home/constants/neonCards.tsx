import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PaidIcon from "@mui/icons-material/Paid";

export const neonCards = [
  {
    title: "Readiculous",
    subtitle: "Optimized library inventory",
    stat: "shelf space waste 26%",
    gridArea: "card-1",
    icon: <AutoStoriesIcon sx={{ height: "5vw", width: "5vw" }} />,
  },
  {
    title: "Uniquest",
    subtitle: "ML-powered predictor",
    stat: "Insights ↑",
    gridArea: "card-2",
    icon: <AccountBalanceIcon sx={{ height: "5vw", width: "5vw" }} />,
  },
  {
    title: "Koko Fresh Agent",
    subtitle: "Milk dispensing ATM \n financial Tracker",
    stat: "Agent Error Rate ↓ 46%",
    gridArea: "card-3",
    icon: <PaidIcon sx={{ height: "5vw", width: "5vw" }} />,
  },
];
