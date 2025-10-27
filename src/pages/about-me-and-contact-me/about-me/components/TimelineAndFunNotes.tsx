// src/components/TimelineAndFunNotes.tsx
import * as React from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import CoffeeIcon from "@mui/icons-material/Coffee";
import StarBorderIcon from "@mui/icons-material/StarBorder";

type Variant = "timeline" | "funnotes";

interface TimelineEntry {
  year: string;
  title: string;
  subtitle?: string;
  detail?: string;
}

const mono: React.CSSProperties = {
  fontFamily: `"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace`,
  letterSpacing: "0.05em",
  lineHeight: 1.35,
};

const lineColor = "#9BD2FF";

// ---- DATA ----
const TIMELINE: TimelineEntry[] = [
  { year: "2022", title: "B.Tech Computer Science (NIT-WPU)" },
  { year: "2022–2024", title: "Flutter Developer @ Lounch Ventures" },
  { year: "2024", title: "Data Analyst Intern @ Excelerate" },
  { year: "2026 (exp.)", title: "Master’s in Applied AI & Data Science" },
];

const FUN_NOTES = [
  { icon: <FitnessCenterIcon />, text: "Gym enthusiast" },
  { icon: <RestaurantIcon />, text: "Loves exploring new cuisines" },
  { icon: <NightsStayIcon />, text: "Night-owl coder" },
  { icon: <SportsEsportsIcon />, text: "Sci-fi & strategy games" },
  { icon: <MusicNoteIcon />, text: "Learning guitar (beginner)" },
  { icon: <CoffeeIcon />, text: "Coffee > tea" },
  { icon: <StarBorderIcon />, text: "Occasional open-source contributor" },
];

// ---- PRESENTATION ----
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      sx={{
        ...mono,
        fontSize: { xs: "0.85rem", md: "0.95rem" },
        textTransform: "uppercase",
        color: lineColor,
        opacity: 0.9,
        mb: 1,
      }}
    >
      {children}
    </Typography>
  );
}

function TimelineList() {
  return (
    <Stack spacing={1.25}>
      {TIMELINE.map((item, idx) => (
        <Box key={idx}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              columnGap: 2,
              alignItems: "start",
            }}
          >
            <Typography
              sx={{ ...mono, color: lineColor, opacity: 0.9, minWidth: "7ch" }}
            >
              {item.year}
            </Typography>
            <Box>
              <Typography
                sx={{ ...mono, color: lineColor, fontSize: "0.95rem" }}
              >
                {item.title}
              </Typography>
              {item.subtitle && (
                <Typography
                  sx={{
                    ...mono,
                    color: lineColor,
                    opacity: 0.8,
                    fontSize: "0.85rem",
                  }}
                >
                  {item.subtitle}
                </Typography>
              )}
              {item.detail && (
                <Typography
                  sx={{
                    ...mono,
                    color: lineColor,
                    opacity: 0.7,
                    fontSize: "0.8rem",
                  }}
                >
                  {item.detail}
                </Typography>
              )}
            </Box>
          </Box>

          {idx !== TIMELINE.length - 1 && (
            <Divider
              sx={{
                borderColor: lineColor,
                opacity: 0.25,
                mt: 1.25,
              }}
            />
          )}
        </Box>
      ))}
    </Stack>
  );
}

function FunNotesList() {
  return (
    <List dense disablePadding>
      {FUN_NOTES.map((n, i) => (
        <ListItem
          key={i}
          disableGutters
          sx={{
            py: 0.4,
            color: lineColor,
          }}
        >
          <ListItemIcon sx={{ minWidth: 28, color: lineColor, opacity: 0.9 }}>
            {n.icon}
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              sx: { ...mono, fontSize: "0.95rem", color: lineColor },
            }}
            primary={n.text}
          />
        </ListItem>
      ))}
    </List>
  );
}

export function TimelineAndFunNotes({
  variant = "timeline",
}: {
  variant?: Variant;
}) {
  const title = variant === "timeline" ? "Timeline" : "Fun Notes";

  return (
    <Box
      sx={{
        display: "grid",
        border: `1px solid ${lineColor}`,
        borderRadius: 1.5,
        p: { xs: 1.5, md: 2 },
        mx: { xs: "2.5vw", md: "2.5vw" },
        color: lineColor,
        background: "transparent",
      }}
    >
      <SectionTitle>{title}</SectionTitle>
      {variant === "timeline" ? <TimelineList /> : <FunNotesList />}
    </Box>
  );
}
