import { Box, Chip, Typography } from "@mui/material";
import ghibliCardContainerTheme from "../../../../assets/ghibli-card-container.png";
import {
  ghibliBodyFontFamily,
  ghibliHeadingFontFamily,
} from "../../../../styles/ghibli-typography";

export type WorkExperience = {
  company: string;
  location: string;
  position: string;
  duration: string;
  summary: string[];
  stack: string;
};

type Props = {
  experience: WorkExperience;
};

export const GhibliCardContainer = ({ experience }: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${ghibliCardContainerTheme})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        width: { xs: "min(92vw, 420px)", md: "min(42vw, 500px)", xl: 470 },
        minHeight: { xs: 360, md: 390 },
        px: { xs: 4.2, md: 4.8 },
        py: { xs: 4.2, md: 4.8 },
        display: "flex",
        flexDirection: "column",
        gap: 1.2,
        filter: "drop-shadow(0 18px 30px rgba(87, 71, 43, 0.18))",
        transition: "transform 220ms ease, filter 220ms ease",
        transformOrigin: "center",
        "&:hover": {
          transform: "scale(1.04)",
          filter: "drop-shadow(0 24px 38px rgba(87, 71, 43, 0.24))",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 1.4,
          flexWrap: "wrap",
        }}
      >
        <Chip
          label={experience.duration}
          sx={{
            height: "auto",
            px: 0.6,
            py: 0.35,
            borderRadius: "999px",
            border: "1px solid rgba(140, 120, 86, 0.55)",
            backgroundColor: "rgba(245, 236, 212, 0.76)",
            color: "#7a5634",
            fontFamily: ghibliBodyFontFamily,
            fontWeight: 700,
            fontSize: "0.84rem",
            letterSpacing: "0.04em",
            "& .MuiChip-label": {
              px: 1.2,
              py: 0.15,
            },
          }}
        />

        <Typography
          sx={{
            fontFamily: ghibliBodyFontFamily,
            fontSize: "0.92rem",
            fontWeight: 600,
            lineHeight: 1.3,
            color: "rgba(92, 72, 54, 0.9)",
            textAlign: { xs: "left", md: "right" },
          }}
        >
          {experience.location}
        </Typography>
      </Box>

      <Typography
        sx={{
          fontFamily: ghibliHeadingFontFamily,
          fontSize: { xs: "1.55rem", md: "1.75rem" },
          fontWeight: 700,
          lineHeight: 1.12,
          color: "#4b372d",
        }}
      >
        {experience.position}
      </Typography>

      <Typography
        sx={{
          fontFamily: ghibliBodyFontFamily,
          fontSize: { xs: "1.08rem", md: "1.18rem" },
          fontWeight: 700,
          lineHeight: 1.25,
          color: "#6d4f33",
          pb: 1.1,
          borderBottom: "1px solid rgba(145, 122, 88, 0.32)",
        }}
      >
        {experience.company}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.05,
          pt: 0.2,
        }}
      >
        {experience.summary.map((line) => (
          <Typography
            key={line}
            sx={{
              fontFamily: ghibliBodyFontFamily,
              fontSize: { xs: "0.98rem", md: "1.02rem" },
              lineHeight: 1.52,
              color: "#5d4738",
              display: "flex",
              alignItems: "flex-start",
              gap: 0.9,
            }}
          >
            <Box
              component="span"
              sx={{
                color: "#8b6f45",
                lineHeight: 1.45,
              }}
            >
              *
            </Box>
            <Box component="span">{line}</Box>
          </Typography>
        ))}
      </Box>

      <Box
        sx={{
          mt: "auto",
          pt: 1.5,
          borderTop: "1px solid rgba(145, 122, 88, 0.24)",
        }}
      >
        <Typography
          sx={{
            fontFamily: ghibliBodyFontFamily,
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#8a6944",
            mb: 0.55,
          }}
        >
          Focus
        </Typography>
        <Typography
          sx={{
            fontFamily: ghibliBodyFontFamily,
            fontSize: { xs: "0.94rem", md: "0.98rem" },
            lineHeight: 1.45,
            color: "#5f4939",
          }}
        >
          {experience.stack}
        </Typography>
      </Box>
    </Box>
  );
};
