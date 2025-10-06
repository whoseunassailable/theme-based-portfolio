import { Box, Grid } from "@mui/material";
import { NeonCard } from "./NeonCard";

export const CardGrid = () => {
  return (
    <Grid container spacing={2} mt={4}>
      <Box>
        <NeonCard
          title={"Readiculous"}
          subtitle={"Optimized library inventory "}
          stat={"shelf space waste 26%"}
        />
      </Box>
      <Box>
        <NeonCard
          title={"Uniquest"}
          subtitle={"ML-powered admission"}
          stat={"Insights ↑"}
        />
      </Box>
      <Box>
        <NeonCard
          title={"Koko Fresh Agent"}
          subtitle={"Milk dispensing ATM Financial Tracker"}
          stat={"Agent Error Rate ↓ 46% "}
        />
      </Box>
    </Grid>
  );
};
