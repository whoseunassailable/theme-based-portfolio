import { Box, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { COLORS_NEO_EXTENDED } from "../../../theme/colors";

type Props = {
  title: string;
  subtitle: string;
  stat: string;
};

export const NeonCard = ({ title, subtitle, stat }: Props) => {
  const accent = COLORS_NEO_EXTENDED.accent;
  const softGlow = COLORS_NEO_EXTENDED.glowSoft;
  const glow2 = COLORS_NEO_EXTENDED.glow2;

  return (
    <Box
      sx={{
        position: "relative",
        border: `1px solid ${accent}`,
        borderRadius: 1,
        display: "flex",
        flexDirection: "column",
        p: "10%",
        pl: "20%",
        width: "125%",
        height: "125%",
        color: "white",
        justifyContent: "center",
        alignItems: "start",
        background: "transparent",
        boxShadow: `0 0 0 0 ${softGlow}`,
        transition:
          "box-shadow .25s ease, border-color .25s ease, transform .12s ease",
        "&:hover": {
          borderColor: glow2,
          boxShadow: `0 0 16px 2px ${softGlow}`,
          transform: "translateY(-2px)",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 8,
          borderRadius: 2,
          border: `1px solid ${alpha(accent, 0.3)}`,
        },
      }}
    >
      {" "}
      <Typography variant="h5" fontWeight={700} mb={1}>
        {title}
      </Typography>
      <Typography>{subtitle}</Typography>
      <Typography color={accent} mt={1}>
        {stat}
      </Typography>
    </Box>
  );
};
