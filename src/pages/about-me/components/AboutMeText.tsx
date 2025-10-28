import { Typography } from "@mui/material";

export const AboutMeText = () => {
  return (
    <Typography
      pl={"5vh"}
      pt={"5vh"}
      component="h1"
      variant="h2"
      sx={{
        fontFamily:
          "'Inter', 'SF Pro Display', system-ui, -apple-system, Arial",
        fontWeight: 800,
        textTransform: "uppercase",
        letterSpacing: { xs: "0.14em", md: "0.18em" },
        lineHeight: 1.05,
        fontSize: { xs: 28, sm: 36, md: 54 },
        color: "rgba(180, 220, 255, 0.95)",
        textShadow: "0 0 12px rgba(0,180,255,.25), 0 0 2px rgba(0,180,255,.4)",
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
      About <br /> Me
    </Typography>
  );
};
