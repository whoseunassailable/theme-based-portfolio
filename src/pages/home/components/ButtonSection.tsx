import { Box, Button } from "@mui/material";
import { sxValueForButton } from "../styles/homePageStyles";

export const ButtonSection = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { md: "0.17fr 0.21fr 0.21fr" },
        gridTemplateAreas: `"left-space button-1 button-2"`,
      }}
    >
      <Box sx={{ display: "flex", gridArea: "left-space" }}></Box>
      <Box
        sx={{
          display: "flex",
          gridArea: "button-1",
        }}
      >
        <Button
          variant="outlined"
          size="large"
          fullWidth={{ xs: true, sm: false } as any}
          sx={{
            ...sxValueForButton,
            py: { xs: 1.25, sm: 1.5 },
            fontSize: { xs: "0.95rem", md: "1rem" },
          }}
        >
          View My Work
        </Button>
      </Box>
      <Box sx={{ display: "flex", gridArea: "button-2" }}>
        <Button
          variant="outlined"
          size="large"
          fullWidth={{ xs: true, sm: false } as any}
          sx={{
            ...sxValueForButton,
            py: { xs: 1.25, sm: 1.5 },
            fontSize: { xs: "0.95rem", md: "1rem" },
          }}
        >
          Explore Projects
        </Button>
      </Box>
    </Box>
  );
};
