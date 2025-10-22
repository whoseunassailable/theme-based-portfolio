import { Box, Typography } from "@mui/material";
import BlurText from "./BlurText";

export const SmallTitle = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { md: "1fr 5fr " },
        gridTemplateAreas: `"space-left big-title"`,
      }}
    >
      <Box
        sx={{
          gridArea: "space-left",
        }}
      />
      <Box>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.125rem" },
            opacity: 0.9,
            mb: { xs: 2, md: 3 },
          }}
        >
          <BlurText
            text="Blending design thinking with engineering precision"
            // <br />
            // to deliver world-class software
            delay={150}
            animateBy="words"
            direction="top"
          />
          <BlurText></BlurText>
        </Typography>
      </Box>
    </Box>
  );
};
