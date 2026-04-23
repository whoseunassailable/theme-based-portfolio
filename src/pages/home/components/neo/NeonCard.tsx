import { Box, Typography, type SxProps, type Theme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { COLORS_NEO_EXTENDED } from "../../../../theme/colors";
import { type ReactNode } from "react";
import FadeContent from "../../../../components/FadeContent";

type Props = {
  title: string;
  subtitle: string;
  stat: string;
  gridArea?: string;
  icon?: ReactNode;
  sx?: SxProps<Theme>;
};

export const NeonCard = ({
  title,
  subtitle,
  stat,
  gridArea,
  sx,
  icon,
}: Props) => {
  const accent = COLORS_NEO_EXTENDED.accent;
  const softGlow = COLORS_NEO_EXTENDED.glowSoft;
  const glow2 = COLORS_NEO_EXTENDED.glow2;

  return (
    <FadeContent
      blur={true}
      duration={1000}
      easing="ease-out"
      initialOpacity={0}
    >
      <Box
        sx={{
          gridArea, // apply if provided
          position: "relative",
          width: { xs: "20vw" },
          height: { xs: "20vw" },
          mt: { md: 5 },
          border: `1px solid ${accent}`,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          overflow: "hidden",
          p: 2,
          color: "white",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 0,
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
            pointerEvents: "none",
          },
          ...sx,
        }}
      >
        <Box
          sx={{
            height: "5vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: accent,
            flexShrink: 0,
            mt: { xs: 0.5, md: 0.75 },
            mb: 0,
          }}
        >
          {icon}
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateRows: "auto auto",
            alignItems: "start",
            justifyItems: "center",
            rowGap: 0.05,
            mt: 0,
            flexGrow: 0,
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
            textAlign="center"
            sx={{
              width: "100%",
              minHeight: "2.6em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 0,
              lineHeight: 1,
            }}
          >
            {title}
          </Typography>

          <Typography
            textAlign="center"
            sx={{
              width: "100%",
              minHeight: "3.2em",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              whiteSpace: "pre-line",
              alignSelf: "start",
              lineHeight: 1.05,
            }}
          >
            {subtitle}
          </Typography>
        </Box>

        <Typography
          textAlign="center"
          sx={{
            color: accent,
            mt: 0.15,
            minHeight: "1.8em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pt: 0,
            pb: { xs: 0.25, md: 0.5 },
            lineHeight: 1,
          }}
        >
          {stat}
        </Typography>
      </Box>
    </FadeContent>
  );
};
