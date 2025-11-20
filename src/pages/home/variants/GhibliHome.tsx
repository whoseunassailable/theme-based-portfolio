import { Box } from "@mui/material";

export const GhibliHome = () => {
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
          width: "100%",
          maxWidth: 1440,
          aspectRatio: "12 / 9",
          position: "relative",
          backgroundImage: `url(${backgroundWorkExperience})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      ></Box>
    </Box>
  );
};
