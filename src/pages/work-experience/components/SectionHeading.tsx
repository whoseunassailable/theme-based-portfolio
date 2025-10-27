import { Box, Typography } from "@mui/material";

interface SectionHeadingProps {
  title: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  return (
    <Box
      sx={{
        mt: { xs: 2, md: 12 },
        display: "grid",
        gridTemplateColumns: { md: "0.25fr 5fr " },
        gridTemplateAreas: `"space-left heading-title "`,
      }}
    >
      <Box gridArea={"space-left"}></Box>
      <Box gridArea={"heading-title"}>
        <Typography
          component="h5"
          data-text={title}
          variant="h2"
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            fontFamily:
              "'Inter', 'SF Pro Display', system-ui, -apple-system, Arial",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: { xs: "0.14em", md: "0.14em" },
            lineHeight: 1.05,
            fontSize: { xs: 21, sm: 24, md: 35 },
            color: "rgba(180, 220, 255, 0.95)",
            textShadow:
              "0 0 12px rgba(0,180,255,.25), 0 0 2px rgba(0,180,255,.4)",
            background: "transparent",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",

            position: "relative",
            "&::after": {
              content: "attr(data-text)", // duplicate the text
              position: "absolute",
              inset: 0,
              color: "transparent",
              WebkitTextStroke: "3px rgba(140, 210, 255, 0.9)", // outline thickness/color
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 10px rgba(0,180,255,.25)", // subtle neon glow
              pointerEvents: "none",
            },
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};
