import { Box, Typography } from "@mui/material";
import ghibliCardContainerTheme from "../../../../assets/ghibli-card-container.png";

export const GhibliCardContainer = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${ghibliCardContainerTheme})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        height: "40vh",
        width: "20vw",
      }}
    >
      <Typography>Company Name</Typography> <Typography>Position</Typography>
      <Typography>Time Duration</Typography>
      <Typography>Company Work Summary</Typography>
      <Typography>Chip stack</Typography>
    </Box>
  );
};
