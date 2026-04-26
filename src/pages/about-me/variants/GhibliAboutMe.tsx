import { Box, Typography } from "@mui/material";
import ghibliAboutMeTheme from "../../../assets/ghibli-about-me-theme.png";
import {
  ghibliAboutBodyTypography,
  ghibliAboutHobbiesLabelTypography,
  ghibliAboutHobbiesTitleTypography,
  ghibliAboutTitleTypography,
  ghibliBodyFontFamily,
} from "../../../styles/ghibli-typography";

const introParagraphs = [
  "I’m currently pursuing my Master’s in Applied AI and Data Science at Illinois Institute of Technology while building practical, user-facing applications.",
  "What keeps me engaged is product-oriented engineering: shaping interactions, building fluid interfaces, and solving problems with both creative thinking and engineering discipline.",
  "My undergrad in Computer Science in India first pulled me toward building software that people actually use, and that instinct has stayed constant across internships, academic work, and personal projects.",
  "Since starting graduate school, I’ve worked on projects like Readiculous, collaborated in small teams, and grown into the kind of engineer who enjoys both building and helping others ramp into codebases.",
  "Right now I’m looking for product-focused engineering work where I can contribute creatively, keep growing technically, and take real ownership over the user experience.",
];

const sideNotes = [
  "I enjoy mentoring through handovers, reviews, and collaborative problem-solving.",
  "Outside of work, I reset through the gym, travel, and exploring different cuisines.",
];

const hobbies = ["Reading", "Gym", "Travel", "Cooking"];
const collaborationNote =
  "I enjoy working face-to-face with teams, especially in environments where ideas move quickly from whiteboard conversations into real product decisions. That balance of collaboration, craft, and ownership is where I do my best work.";

export const GhibliAboutMe = () => {
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
          width: "100vw",
          minHeight: "100vh",
          position: "relative",
          backgroundImage: `url(${ghibliAboutMeTheme})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          px: { xs: 3, md: "7vw" },
          py: { xs: 6, md: "8vh" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "46%" },
            ml: { xs: 0, md: "auto" },
            mr: { xs: 0, md: "4vw" },
            mt: { xs: 0, md: "4vh" },
            backgroundColor: "rgba(255, 250, 238, 0.52)",
            borderRadius: "20px",
            border: "1px solid rgba(205, 184, 146, 0.22)",
            boxShadow: "0 18px 38px rgba(118, 101, 71, 0.08)",
            backdropFilter: "blur(3px)",
            p: { xs: 2.6, md: 3.4 },
            position: { xs: "relative", md: "absolute" },
            top: { md: "8vh" },
            right: { md: "4.5vw" },
          }}
        >
          <Typography
            sx={{
              ...ghibliAboutTitleTypography,
              fontSize: { xs: "2.6rem", md: "3.5rem" },
              textAlign: "left",
              mb: 1,
            }}
          >
            About Me
          </Typography>

          {introParagraphs.map((paragraph) => (
            <Typography
              key={paragraph}
              sx={{
                ...ghibliAboutBodyTypography,
                fontSize: "clamp(0.98rem, 1.18vw, 1.08rem)",
                lineHeight: 1.54,
                mb: 1.2,
              }}
            >
              {paragraph}
            </Typography>
          ))}

          <Box
            sx={{
              mt: 1.6,
              pt: 1.2,
              borderTop: "1px solid rgba(153, 126, 92, 0.18)",
              display: "grid",
              gap: 0.8,
            }}
          >
            {sideNotes.map((note) => (
              <Typography
                key={note}
                sx={{
                  fontFamily: ghibliBodyFontFamily,
                  fontSize: "clamp(0.9rem, 1.1vw, 0.98rem)",
                  lineHeight: 1.45,
                  color: "#5f4a3b",
                  display: "flex",
                  gap: 0.8,
                }}
              >
                <Box component="span" sx={{ color: "#8a5a24" }}>
                  *
                </Box>
                <Box component="span">{note}</Box>
              </Typography>
            ))}
          </Box>

          <Typography
            sx={{
              ...ghibliAboutBodyTypography,
              fontSize: "clamp(0.95rem, 1.12vw, 1.04rem)",
              lineHeight: 1.55,
              mt: 1.8,
            }}
          >
            {collaborationNote}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
              mt: 2.2,
              pt: 1.6,
              borderTop: "1px solid rgba(153, 126, 92, 0.16)",
            }}
          >
            <Typography sx={ghibliAboutHobbiesTitleTypography}>
              Outside of work
            </Typography>
            {hobbies.map((hobby) => (
              <Typography key={hobby} sx={ghibliAboutHobbiesLabelTypography}>
                {hobby}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
