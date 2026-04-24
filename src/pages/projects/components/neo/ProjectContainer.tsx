import { Box, Button, Typography } from "@mui/material";
import type { ReactNode } from "react";
import ElectricBorder from "../../../../components/ElectricBorder";
import { COLORS_NEO_EXTENDED } from "../../../../theme/colors";
import { useProjectDetails } from "../../../../context/ProjectDetailsContext";
import { useLocation, useNavigate } from "react-router-dom";

interface ProjectContainerProps {
  gridArea: string;
  projectId: string;
  projectStack: string;
  nameOfProject: string;
  shortSummary: string;
  icon: ReactNode;
  detailEnabled: boolean;
  externalUrl?: string;
}

export const ProjectContainer: React.FC<ProjectContainerProps> = ({
  gridArea,
  projectId,
  projectStack,
  nameOfProject,
  shortSummary,
  icon,
  detailEnabled,
  externalUrl,
}) => {
  const accent = COLORS_NEO_EXTENDED.accent;
  const softGlow = COLORS_NEO_EXTENDED.glowSoft;
  const glow2 = COLORS_NEO_EXTENDED.glow2;
  const { selectProject } = useProjectDetails();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToProjectDetails = () => {
    requestAnimationFrame(() => {
      document
        .getElementById("neo-project-details")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const handleViewProject = () => {
    if (detailEnabled) {
      selectProject(projectId);

      if (location.pathname === "/") {
        scrollToProjectDetails();
        return;
      }

      if (location.pathname === "/projects_detail") {
        scrollToProjectDetails();
        return;
      }

      navigate("/projects_detail");
      return;
    }

    if (externalUrl) {
      window.open(externalUrl, "_blank", "noopener,noreferrer");
    }
  };

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
          px: { xs: 2.25, sm: 2.75, md: 3.25, lg: 3.75 },
          pt: { xs: 3.25, sm: 3.75, md: 4.25, lg: 4.75 },
          pb: { xs: 2.5, sm: 2.75, md: 3.25, lg: 3.75 },
          display: "grid",
          gridTemplateRows: "auto minmax(112px, auto) 120px minmax(144px, auto) auto",
          alignItems: "center",
          justifyItems: "center",
          rowGap: 2,
          gridArea: "container-1",
          height: "90%",
          width: "90%",
          borderRadius: "0.5vh",
        }}
      >
        <Typography
          display="flex"
          sx={{
            fontSize: { xs: "0.95rem", sm: "1.02rem", md: "1.1rem", lg: "1.2rem" },
            fontFamily: "'Orbitron', monospace",
            textTransform: "uppercase",
            letterSpacing: { xs: "0.12em", md: "0.16em" },
            color: COLORS_NEO_EXTENDED.accent,
            fontWeight: 300,
            alignSelf: "start",
            textAlign: "center",
            mt: { xs: 0.25, sm: 0.35, md: 0.5 },
          }}
        >
          {projectStack}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            minHeight: { xs: 76, sm: 88, md: 100 },
            width: "100%",
            pt: { xs: 0.25, sm: 0.35, md: 0.5 },
          }}
        >
          <Typography
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              fontSize: "clamp(1.75rem, 2.2vw, 2.8rem)",
              fontFamily: "Arial",
              textTransform: "uppercase",
              color: COLORS_NEO_EXTENDED.accent,
              fontWeight: 700,
              textAlign: "center",
              lineHeight: 1.12,
              letterSpacing: { xs: "0.03em", md: "0.05em" },
              alignSelf: "flex-start",
              width: "100%",
            }}
          >
            {nameOfProject}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "120px",
          }}
        >
          {icon}
        </Box>

        <Typography
          display="flex"
          sx={{
            fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
            fontWeight: 300,
            fontSize: { md: 20 },
            letterSpacing: 0.3,
            lineHeight: 1.4,
            color: COLORS_NEO_EXTENDED.heading,
            textAlign: "center",
            alignItems: "start",
            justifyContent: "center",
            minHeight: { md: "144px" },
          }}
        >
          {shortSummary}
        </Typography>

        <Button
          variant="outlined"
          onClick={handleViewProject}
          sx={{
            borderColor: COLORS_NEO_EXTENDED.buttonBorder,
            letterSpacing: 0.3,
            alignSelf: "end",
          }}
        >
          View Project
        </Button>
      </Box>
    </ElectricBorder>
  );
};
