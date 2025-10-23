import Box from "@mui/material/Box";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export const ProjectIcon = () => {
  return (
    <Box
      sx={{
        gridArea: "icon-container",
        placeItems: "center", // centers the icon inside
        placeSelf: "center", // centers this box in its grid cell
      }}
    >
      <AutoStoriesIcon sx={{ height: "15vw", width: "15vw" }} />
    </Box>
  );
};
