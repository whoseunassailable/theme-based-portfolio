import { Box } from "@mui/material";
import { NeonCard } from "./NeonCard";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PaidIcon from "@mui/icons-material/Paid";

export const CardGrid = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        gridTemplateColumns: { xs: "1fr", md: "1fr 1.66fr 1.66fr 1.67fr" },
        gridTemplateAreas: {
          xs: `"card-1" "card-2" "card-3"`,
          md: `"left-space card-1 card-2 card-3"`,
        },
        alignItems: "stretch",
      }}
    >
      <Box sx={{ gridArea: "left-space" }} />
      <NeonCard
        title="Readiculous"
        subtitle="Optimized library inventory"
        stat="shelf space waste 26%"
        gridArea="card-1"
        sx={{ minHeight: 140 }}
        icon={<AutoStoriesIcon sx={{ height: "5vw", width: "5vw" }} />}
      />
      <NeonCard
        title="Uniquest"
        subtitle="ML-powered predictor"
        stat="Insights ↑"
        gridArea="card-2"
        sx={{ minHeight: 140 }}
        icon={<AccountBalanceIcon sx={{ height: "5vw", width: "5vw" }} />}
      />
      <NeonCard
        title="Koko Fresh Agent"
        subtitle={"Milk dispensing ATM \n financial Tracker"}
        stat="Agent Error Rate ↓ 46%"
        gridArea="card-3"
        sx={{ minHeight: 140 }}
        icon={<PaidIcon sx={{ height: "5vw", width: "5vw" }} />}
      />
    </Box>
  );
};
