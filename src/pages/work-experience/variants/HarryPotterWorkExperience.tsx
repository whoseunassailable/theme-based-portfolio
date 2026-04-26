import { Box } from "@mui/material";
import harryWorkDesign from "../../../assets/harry_work_design.png";

export const HarryPotterWorkExperience = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#000",
      }}
    >
      <Box
        sx={{
          width: "min(100vw, 1448px)",
          aspectRatio: "1448 / 1086",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={harryWorkDesign}
          alt="Harry Potter work experience design"
          sx={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover",
            userSelect: "none",
            WebkitUserDrag: "none",
          }}
        />
      </Box>
    </Box>
  );
};
