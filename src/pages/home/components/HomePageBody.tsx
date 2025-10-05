import { Grid, Button, Box, Typography } from "@mui/material";
import { COLORS_NEO_EXTENDED } from "../../../theme/colors";

export const HomePageBody = () => {
  const neoOutlineSx = {
    textTransform: "uppercase",
    fontWeight: 700,
    letterSpacing: ".06em",
    borderWidth: 1.5,
    px: 2.5,
    py: 1.25,
    borderRadius: "10px",
    // base colors
    color: COLORS_NEO_EXTENDED.accent, // cyan text
    borderColor: COLORS_NEO_EXTENDED.accent, // cyan outline
    backgroundColor: "transparent",
    // subtle glow + smooth transitions
    boxShadow: `0 0 0 0 ${COLORS_NEO_EXTENDED.glowSoft}`,
    minWidth: "240px",
    transition:
      "box-shadow .2s ease, border-color .2s ease, color .2s ease, transform .12s ease",
    "&:hover": {
      borderColor: COLORS_NEO_EXTENDED.glow2,
      color: COLORS_NEO_EXTENDED.glow2,
      backgroundColor: "rgba(0, 0, 0, 0.15)",
      boxShadow: `0 0 14px 2px ${COLORS_NEO_EXTENDED.glowSoft}, inset 0 0 8px ${COLORS_NEO_EXTENDED.glowSoft}`,
    },
    "&:active": {
      transform: "translateY(1px)",
      boxShadow: `0 0 18px 3px ${COLORS_NEO_EXTENDED.glowSoft}`,
    },
  };
  return (
    <Grid container pl={30} pr={30}>
      <Grid>
        <Typography fontSize={"400%"} mt={5}>
          I Build Experience As A
        </Typography>
        <Typography m={0} fontSize={"400%"} color={COLORS_NEO_EXTENDED.heading}>
          Frontend Developer{" "}
        </Typography>
      </Grid>
      <Grid>
        <Typography fontSize={"150%"} mb={5}>
          Blending design thinking with engineering precision <br /> to deliver
          world-class software.
        </Typography>
      </Grid>
      <Grid direction="row">
        <Box display="flex" gap={2}>
          <Button
            variant="outlined"
            sx={{
              ...neoOutlineSx,
              fontSize: { xs: "0.75rem", sm: "0.9rem", md: "1rem" },
              px: { xs: 1.5, sm: 2, md: 2.5 },
              py: { xs: 0.75, sm: 1, md: 1.25 },
            }}
          >
            View My Work
          </Button>
          <Button
            variant="outlined"
            sx={{
              ...neoOutlineSx,
              fontSize: { xs: "0.75rem", sm: "0.9rem", md: "1rem" },
              px: { xs: 1.5, sm: 2, md: 2.5 },
              py: { xs: 0.75, sm: 1, md: 1.25 },
            }}
          >
            Explore Projects
          </Button>
        </Box>
      </Grid>
      <Grid></Grid>
    </Grid>
  );
};
