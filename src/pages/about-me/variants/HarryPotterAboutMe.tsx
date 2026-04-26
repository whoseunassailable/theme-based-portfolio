import { Box } from "@mui/material";
import harryAboutDesign from "../../../assets/harry_about_design.png";

export const HarryPotterAboutMe = () => {
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
          src={harryAboutDesign}
          alt="Harry Potter about me design"
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
