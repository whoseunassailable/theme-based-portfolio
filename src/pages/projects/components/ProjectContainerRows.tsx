import { Box } from "@mui/material";

export const ProjectContainerRows = () => {
  return (
    <Box
      sx={{
        marginY: 10,
        display: "grid",
        gridTemplateColumns: { md: "0.5fr 3.5fr 2fr 3.5fr" },
        gridTemplateAreas: `"space-left container-1 center-space container-2"`,
      }}
    ></Box>
  );
};
