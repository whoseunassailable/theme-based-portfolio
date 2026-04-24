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
  iconScale?: number;
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
  iconScale = 1,
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
      height="61vh"
      radius="0.5vh"
      accent={accent}
      glow2={glow2}
      softGlow={softGlow}
      thickness={2}
      style={{
        width: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(180deg, rgba(5, 23, 40, 0.72), rgba(4, 18, 34, 0.62))",
      }}
    >
      <Box
        sx={{
          px: { xs: 2.1, sm: 2.4, md: 2.85, lg: 3.15 },
          pt: { xs: 0.35, sm: 0.45, md: 0.55, lg: 0.7 },
          pb: { xs: 0.35, sm: 0.45, md: 0.55, lg: 0.7 },
          display: "grid",
          gridTemplateRows:
            "auto minmax(52px, auto) minmax(96px, auto) minmax(98px, auto) auto",
          alignItems: "start",
          justifyItems: "stretch",
          rowGap: { xs: 0.55, md: 0.75 },
          gridArea: "container-1",
          height: "100%",
          width: "100%",
          borderRadius: "0.5vh",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "0.82rem",
              sm: "0.88rem",
              md: "0.94rem",
              lg: "1rem",
            },
            fontFamily: "'Orbitron', monospace",
            textTransform: "uppercase",
            letterSpacing: { xs: "0.12em", md: "0.15em" },
            color: COLORS_NEO_EXTENDED.subheading,
            fontWeight: 400,
            textAlign: "left",
          }}
        >
          {projectStack}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            minHeight: { xs: 52, sm: 58, md: 64 },
            width: "100%",
          }}
        >
          <Typography
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              fontSize: "clamp(1.4rem, 1.8vw, 2.2rem)",
              fontFamily: "'Rajdhani', 'Arial Narrow', Arial, sans-serif",
              color: COLORS_NEO_EXTENDED.heading,
              fontWeight: 700,
              textAlign: "left",
              lineHeight: 1.05,
              letterSpacing: { xs: "0.01em", md: "0.02em" },
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
            minHeight: { xs: 84, md: 92 },
            borderTop: "1px solid rgba(107, 163, 200, 0.2)",
            borderBottom: "1px solid rgba(107, 163, 200, 0.2)",
            py: { xs: 0.45, md: 0.6 },
            color: COLORS_NEO_EXTENDED.heading,
            position: "relative",
            "&:before": {
              content: '""',
              position: "absolute",
              inset: { xs: "8px 14px", md: "10px 18px" },
              border: "1px solid rgba(107, 163, 200, 0.12)",
              borderRadius: "10px",
              background:
                "radial-gradient(circle at 50% 50%, rgba(45, 226, 230, 0.05), transparent 70%)",
            },
            "& .MuiSvgIcon-root": {
              width: { xs: 52, sm: 58, md: 64 },
              height: { xs: 52, sm: 58, md: 64 },
              filter: "drop-shadow(0 0 10px rgba(45, 226, 230, 0.12))",
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              transform: `scale(${iconScale})`,
              transformOrigin: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icon}
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            alignContent: "start",
            rowGap: { xs: 0.4, md: 0.55 },
            minHeight: { xs: 98, md: 110 },
            alignSelf: "start",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Rajdhani', Arial, sans-serif",
              fontWeight: 500,
              fontSize: { xs: "0.95rem", md: "1.02rem" },
              lineHeight: 1.25,
              color: COLORS_NEO_EXTENDED.fg,
              textAlign: "left",
              alignSelf: "start",
            }}
          >
            {shortSummary}
          </Typography>
        </Box>

        <Button
          variant="outlined"
          onClick={handleViewProject}
          sx={{
            borderColor: COLORS_NEO_EXTENDED.buttonBorder,
            color: COLORS_NEO_EXTENDED.link,
            letterSpacing: "0.08em",
            justifySelf: "start",
            alignSelf: "start",
            px: 1.65,
            py: 0.65,
            mb: 0,
            fontSize: { xs: "0.84rem", md: "0.9rem" },
            fontFamily: "'Orbitron', monospace",
            "&:hover": {
              borderColor: COLORS_NEO_EXTENDED.accent,
              backgroundColor: "rgba(45, 226, 230, 0.08)",
            },
          }}
        >
          View Project
        </Button>
      </Box>
    </ElectricBorder>
  );
};
