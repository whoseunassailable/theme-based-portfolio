import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { Box, Typography } from "@mui/material";
import { ABOUT_ME_ATTRIBUTES } from "../../../constants/AboutMeAttributes";
import { TimelineAttributes } from "../../../constants/TimelineAttributes";
import profilePic from "../../../assets/profile_pic.png";

const funNotes = [
  {
    icon: <FitnessCenterIcon sx={{ fontSize: "1.15rem" }} />,
    title: "Gym enthusiast",
  },
  {
    icon: <TravelExploreIcon sx={{ fontSize: "1.15rem" }} />,
    title: "Loves exploring cuisines",
  },
];

const monoBodySx = {
  fontFamily: '"IBM Plex Mono","Roboto Mono",monospace',
  color: "#9BD2FF",
  letterSpacing: "0.03em",
};

const ruleSx = {
  position: "absolute",
  bgcolor: "rgba(45, 226, 230, 0.78)",
};

export const NeoAboutMe = () => {
  return (
    <Box
      id="about-me-section"
      sx={{
        width: "min(1180px, 92vw)",
        minHeight: "100vh",
        mx: "auto",
        my: { xs: "12vh", md: "16vh" },
        px: { xs: 2, md: 3 },
        py: { xs: 2, md: 3 },
        position: "relative",
        display: "grid",
        rowGap: { xs: 3.5, md: 4.5 },
        backgroundImage: `
          linear-gradient(rgba(120, 180, 220, 0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(120, 180, 220, 0.06) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
        backgroundColor: "#081726",
        "::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 18% 18%, rgba(0, 191, 255, 0.08), transparent 30%), radial-gradient(circle at 82% 22%, rgba(0, 191, 255, 0.06), transparent 26%)",
          pointerEvents: "none",
        },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.15fr 0.85fr" },
          gap: { xs: 3, md: 4 },
          alignItems: "start",
          zIndex: 1,
        }}
      >
        <Box sx={{ pl: { xs: 0.5, md: 1 } }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: '"IBM Plex Sans","Inter",sans-serif',
              fontSize: { xs: "4.2rem", sm: "5rem", md: "6.25rem" },
              lineHeight: 0.92,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              fontWeight: 700,
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(100, 195, 255, 0.9)",
              textShadow: "0 0 12px rgba(0, 191, 255, 0.08)",
              mb: { xs: 2.5, md: 3.5 },
            }}
          >
            About
            <br />
            Me
          </Typography>

          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", md: "min(470px, 92%)" },
              px: { xs: 2.5, md: 3 },
              py: { xs: 2.25, md: 2.75 },
              minHeight: { md: 204 },
            }}
          >
            <Box sx={{ ...ruleSx, top: 0, left: 0, right: 0, height: "1px" }} />
            <Box
              sx={{ ...ruleSx, bottom: 0, left: 0, right: 0, height: "1px" }}
            />
            <Box sx={{ ...ruleSx, top: -8, bottom: -8, left: 0, width: "1px" }} />
            <Box
              sx={{ ...ruleSx, top: -8, bottom: -8, right: 0, width: "1px" }}
            />

            <Typography
              sx={{
                ...monoBodySx,
                fontSize: { xs: "1rem", md: "1.08rem" },
                lineHeight: 1.58,
                maxWidth: "28ch",
              }}
            >
              I&apos;m Rohan Bhande, a multi-disciplinary engineer blending
              frontend, backend, mobile, and data science. I build applications
              that are both technically precise and user-focused.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            position: "relative",
            justifySelf: { xs: "center", md: "end" },
            width: { xs: "min(360px, 88vw)", md: 340 },
            height: { xs: 360, md: 400 },
            mt: { xs: 0, md: 0.5 },
          }}
        >
          <Box sx={{ ...ruleSx, top: 0, left: 14, right: 14, height: "1px" }} />
          <Box
            sx={{ ...ruleSx, bottom: 22, left: 0, right: 0, height: "1px" }}
          />
          <Box sx={{ ...ruleSx, top: -22, bottom: 0, left: 14, width: "1px" }} />
          <Box sx={{ ...ruleSx, top: -22, bottom: 0, right: 14, width: "1px" }} />
          <Box
            component="img"
            src={profilePic}
            alt="Rohan Bhande portrait"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              filter:
                "grayscale(1) contrast(1.1) brightness(0.35) sepia(0.18) hue-rotate(160deg) saturate(1.4)",
              opacity: 0.9,
              mixBlendMode: "screen",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              border: "1px solid rgba(0, 191, 255, 0.12)",
              pointerEvents: "none",
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(4, minmax(0, 1fr))",
          },
          gap: { xs: 1.5, md: 2 },
          zIndex: 1,
        }}
      >
        {ABOUT_ME_ATTRIBUTES.map((item) => (
          <Box
            key={item.title}
            sx={{
              border: `1px solid rgba(45, 226, 230, 0.6)`,
              minHeight: { xs: 154, md: 170 },
              display: "grid",
              gridTemplateRows: "auto 1px 1fr",
              background:
                "linear-gradient(180deg, rgba(6, 23, 39, 0.46), rgba(6, 20, 34, 0.2))",
            }}
          >
            <Typography
              sx={{
                ...monoBodySx,
                fontSize: { xs: "0.92rem", md: "1rem" },
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                px: 2.25,
                pt: 2,
                pb: 1.6,
              }}
            >
              {item.title}
            </Typography>
            <Box sx={{ bgcolor: "rgba(45, 226, 230, 0.58)" }} />
            <Typography
              sx={{
                ...monoBodySx,
                fontSize: { xs: "0.95rem", md: "1rem" },
                lineHeight: 1.55,
                px: 2.25,
                py: 1.9,
                maxWidth: "14ch",
              }}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.75fr 0.75fr" },
          gap: { xs: 2.5, md: 3 },
          alignItems: "start",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            border: `1px solid rgba(45, 226, 230, 0.58)`,
            px: { xs: 2, md: 2.5 },
            py: { xs: 1.8, md: 2.2 },
            minHeight: { md: 198 },
          }}
        >
          <Typography
            sx={{
              ...monoBodySx,
              fontSize: { xs: "1rem", md: "1.05rem" },
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              mb: 1.8,
            }}
          >
            Timeline
          </Typography>

          <Box display="grid" gap={1.1}>
            {TimelineAttributes.map((item) => (
              <Box
                key={`${item.year}-${item.title}`}
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "140px 1fr" },
                  gap: { xs: 0.3, md: 2.2 },
                }}
              >
                <Typography
                  sx={{
                    ...monoBodySx,
                    fontSize: { xs: "1rem", md: "0.98rem" },
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.year}
                </Typography>
                <Typography
                  sx={{
                    ...monoBodySx,
                    fontSize: { xs: "1rem", md: "0.98rem" },
                    lineHeight: 1.45,
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            px: { xs: 0.5, md: 1 },
            pt: { xs: 0.2, md: 0.1 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: 1.4,
            }}
          >
            <Box
              sx={{
                ...monoBodySx,
                fontSize: "1.2rem",
                letterSpacing: "0.05em",
              }}
            >
              ⊕⊘
            </Box>
            <Box sx={{ flex: 1, height: "1px", bgcolor: "rgba(45, 226, 230, 0.58)" }} />
          </Box>

          <Typography
            sx={{
              ...monoBodySx,
              fontSize: { xs: "1rem", md: "1.05rem" },
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              mb: 1.2,
            }}
          >
            Fun Notes
          </Typography>

          <Box display="grid" gap={1.25}>
            {funNotes.map((note) => (
              <Box
                key={note.title}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: 1.1,
                  alignItems: "start",
                }}
              >
                <Box sx={{ color: "#66d9ff", pt: 0.1 }}>{note.icon}</Box>
                <Typography
                  sx={{
                    ...monoBodySx,
                    fontSize: { xs: "1rem", md: "0.98rem" },
                    lineHeight: 1.45,
                    maxWidth: "12ch",
                  }}
                >
                  {note.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
