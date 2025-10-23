import Box from "@mui/material/Box";
import type { ReactNode } from "react";

interface ProjectIconProps {
  icon: ReactNode;
}

export const ProjectIcon = ({ icon }: ProjectIconProps) => {
  return (
    <Box
      sx={{
        gridArea: "icon-container",
        placeItems: "center", // centers the icon inside
        placeSelf: "center", // centers this box in its grid cell
      }}
    >
      {icon}
    </Box>
  );
};
