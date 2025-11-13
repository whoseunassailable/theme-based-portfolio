import { Box, Button } from "@mui/material";
import ShinyText from "../../../../components/ShinyText";
import Magnet from "../../../../components/Magnet";
import { sxValueForButton } from "../../../../styles/homePageStyles";

export const NeoButtonSection = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { md: "1fr 5fr" },
        gridTemplateAreas: `"left-space button-section"`,
      }}
    >
      <Box sx={{ display: "flex", gridArea: "left-space" }} />
      <Box sx={{ display: "flex", gap: "2.5%", gridArea: "button-section" }}>
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
          <Magnet padding={50} disabled={false} magnetStrength={2}>
            <ShinyText
              text="View My Work"
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </Magnet>
        </Button>
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
          <Magnet padding={50} disabled={false} magnetStrength={2}>
            <ShinyText
              text="Explore Projects"
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </Magnet>
        </Button>
      </Box>
    </Box>
  );
};
