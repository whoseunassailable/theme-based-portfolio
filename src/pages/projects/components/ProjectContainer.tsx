import { Box, Button, Typography } from "@mui/material";
import { COLORS_NEO_EXTENDED } from "../../../theme/colors";
import type { ReactNode } from "react";
import ElectricBorder from "../../../components/ElectricBorder";

interface ProjectContainerProps {
  gridArea: string;
  projectStack: string;
  nameOfProject: string;
  shortSummary: string;
  icon: ReactNode;
}

export const ProjectContainer: React.FC<ProjectContainerProps> = ({
  gridArea,
  projectStack,
  nameOfProject,
  shortSummary,
  icon,
}) => {
  const accent = COLORS_NEO_EXTENDED.accent;
  const softGlow = COLORS_NEO_EXTENDED.glowSoft;
  const glow2 = COLORS_NEO_EXTENDED.glow2;

  return (
    <ElectricBorder
      gridArea={gridArea}
      height="80vh"
      radius="0.5vh"
      accent={accent}
      glow2={glow2}
      softGlow={softGlow}
      thickness={2}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          p: { sm: 2, md: 4 },
          alignItems: "center",
          justifyContent: "space-around",
          display: "flex",
          gap: 2,
          flexDirection: "column",
          gridArea: "container-1",
          height: "90%",
          width: "90%",
          borderRadius: "0.5vh",
        }}
      >
        <Typography
          display="flex"
          sx={{
            fontSize: { md: "2.3vh" },
            fontFamily: "'Orbitron', monospace",
            textTransform: "uppercase",
            letterSpacing: "0.10em",
            color: COLORS_NEO_EXTENDED.accent,
            fontWeight: 300,
          }}
        >
          {projectStack}
        </Typography>

        <Box>
          <Typography
            display="flex"
            sx={{
              fontSize: { md: "4vh" },
              fontFamily: "Arial",
              textTransform: "uppercase",
              color: COLORS_NEO_EXTENDED.accent,
              fontWeight: 700,
            }}
          >
            {nameOfProject}
          </Typography>
        </Box>

        {icon}

        <Typography
          display="flex"
          sx={{
            fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
            fontWeight: 300,
            fontSize: { md: 20 },
            letterSpacing: 0.3,
            lineHeight: 1.4,
            color: COLORS_NEO_EXTENDED.heading,
          }}
        >
          {shortSummary}
        </Typography>

        <Button
          variant="outlined"
          sx={{
            borderColor: COLORS_NEO_EXTENDED.buttonBorder,
            letterSpacing: 0.3,
          }}
        >
          View Project
        </Button>
      </Box>
    </ElectricBorder>
  );
};
