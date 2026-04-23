import { Box, Typography } from "@mui/material";
import ghibliProjectDetails from "../../../assets/ghibli-project-details-theme.png";
import ghibliScrollContainer from "../../../assets/ghibli-project-details-container.png";
import {
  ghibliProjectDetailsTitleTypography,
  ghibliProjectDetailsSubtitleTypography,
  ghibliProjectDetailsBodyTypography,
  ghibliProjectDetailsMetaLabelTypography,
  ghibliProjectDetailsMetaValueTypography,
  ghibliProjectDetailsSubsectionTitleTypography,
  ghibliProjectDetailsColumnHeadingTypography,
  ghibliProjectDetailsBulletTypography,
} from "../../../styles/ghibli-typography";

const projectMeta = [
  { label: "Role", value: "Full-Stack Developer" },
  { label: "Tech", value: "React, Node.js" },
  { label: "Date", value: "Summer 2024" },
];

const challenges = [
  "Crafting smooth page-turn effects",
  "Building dynamic book moodboards",
];

const learnings = [
  "Enhanced my knowledge of React animations",
  "Honed CSS artistry for immersive UIs",
];

export const GhibliProjectDetails = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#000",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1440,
          minHeight: "100vh",
          position: "relative",
          backgroundImage: `url(${ghibliProjectDetails})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: "8vw",
          py: "8vh",
        }}
      >
        {/* Title */}
        <Typography
          sx={{ ...ghibliProjectDetailsTitleTypography, fontSize: "5vw", mb: 0.5 }}
        >
          Readiculous
        </Typography>
        <Typography sx={{ ...ghibliProjectDetailsSubtitleTypography, mb: 2 }}>
          A Journey Through Stories
        </Typography>

        {/* Description */}
        <Typography
          sx={{ ...ghibliProjectDetailsBodyTypography, textAlign: "center", maxWidth: "70%", mb: 3 }}
        >
          An immersive reading platform that transforms books into living
          adventures.
        </Typography>

        {/* Meta labels */}
        <Box sx={{ display: "flex", gap: 4, mb: 4, flexWrap: "wrap", justifyContent: "center" }}>
          {projectMeta.map((meta) => (
            <Box key={meta.label} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography sx={ghibliProjectDetailsMetaLabelTypography}>
                {meta.label}
              </Typography>
              <Typography sx={ghibliProjectDetailsMetaValueTypography}>
                {meta.value}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* About section */}
        <Box
          sx={{
            width: "100%",
            maxWidth: 900,
            backgroundColor: "rgba(255, 250, 235, 0.5)",
            borderRadius: "16px",
            p: 4,
            mb: 4,
          }}
        >
          <Typography sx={{ ...ghibliProjectDetailsSubsectionTitleTypography, mb: 2 }}>
            About
          </Typography>
          <Typography sx={ghibliProjectDetailsBodyTypography}>
            I envisioned a reading app true to the heart of stories — one that
            wouldn't just display text, but breathe life into each page. As both
            developer and designer, I wove together code and enchantment.
          </Typography>
        </Box>

        {/* Challenges & Learnings on scroll background */}
        <Box
          sx={{
            width: "100%",
            maxWidth: 900,
            backgroundImage: ghibliScrollContainer ? `url(${ghibliScrollContainer})` : undefined,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            p: 5,
            minHeight: 200,
          }}
        >
          <Typography
            sx={{
              ...ghibliProjectDetailsSubsectionTitleTypography,
              textAlign: "center",
              mb: 3,
            }}
          >
            Challenges & Learnings
          </Typography>
          <Box sx={{ display: "flex", gap: 6, justifyContent: "center" }}>
            {/* Challenges */}
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ ...ghibliProjectDetailsColumnHeadingTypography, color: "#a05520", mb: 1 }}>
                Challenges
              </Typography>
              {challenges.map((c) => (
                <Typography key={c} sx={ghibliProjectDetailsBulletTypography}>
                  • {c}
                </Typography>
              ))}
            </Box>
            {/* Learnings */}
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ ...ghibliProjectDetailsColumnHeadingTypography, color: "#2a7040", mb: 1 }}>
                Learnings
              </Typography>
              {learnings.map((l) => (
                <Typography key={l} sx={ghibliProjectDetailsBulletTypography}>
                  • {l}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
