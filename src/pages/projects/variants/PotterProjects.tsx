import { Box } from "@mui/material";
import harryProjectsDesign from "../../../assets/harry_projects_design.png";
import { useProjectDetails } from "../../../context/ProjectDetailsContext";

const hotspotSx = {
  position: "absolute",
  background: "transparent",
  border: 0,
  cursor: "pointer",
  padding: 0,
  margin: 0,
  opacity: 0,
  zIndex: 2,
  "&:focus-visible": {
    opacity: 0.18,
    outline: "2px solid rgba(255, 219, 138, 0.95)",
    outlineOffset: "2px",
    background:
      "linear-gradient(180deg, rgba(255, 230, 181, 0.3), rgba(163, 108, 44, 0.22))",
  },
} as const;

const displayedProjectIds = [
  "readiculous",
  "feetback",
  "fresh-agent",
  "pittsburgh-regional-transit",
  "bots-on-hire",
  "uniquest",
] as const;

const cardHotspots = [
  { left: "16.1%", top: "27.6%" },
  { left: "39.1%", top: "27.6%" },
  { left: "62.2%", top: "27.6%" },
  { left: "16.1%", top: "56.3%" },
  { left: "39.1%", top: "56.3%" },
  { left: "62.2%", top: "56.3%" },
] as const;

export const PotterProjects = () => {
  const { selectProject } = useProjectDetails();

  const openProjectDetail = (projectId: string) => {
    selectProject(projectId);
    document
      .getElementById("potter-project-details-section")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
          width: "min(100vw, 1448px)",
          aspectRatio: "1448 / 1086",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={harryProjectsDesign}
          alt="Harry Potter projects design"
          sx={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover",
            userSelect: "none",
            WebkitUserDrag: "none",
          }}
        />

        <Box
          component="button"
          type="button"
          aria-label="Flutter Charms"
          sx={{
            ...hotspotSx,
            top: "16.7%",
            left: "32.8%",
            width: "16.5%",
            height: "5.6%",
          }}
        />

        <Box
          component="button"
          type="button"
          aria-label="Data Divinations"
          sx={{
            ...hotspotSx,
            top: "16.7%",
            left: "50.3%",
            width: "17.5%",
            height: "5.6%",
          }}
        />

        {cardHotspots.map((hotspot, index) => (
          <Box
            key={`${displayedProjectIds[index]}-card`}
            component="button"
            type="button"
            aria-label={`Open ${displayedProjectIds[index]} case file`}
            onClick={() => openProjectDetail(displayedProjectIds[index])}
            sx={{
              ...hotspotSx,
              left: hotspot.left,
              top: hotspot.top,
              width: "20.4%",
              height: "22.7%",
            }}
          />
        ))}

        <Box
          component="button"
          type="button"
          aria-label="Open the full grimoire"
          onClick={() =>
            document
              .getElementById("potter-project-details-section")
              ?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          sx={{
            ...hotspotSx,
            left: "34.8%",
            top: "89.9%",
            width: "32.1%",
            height: "7.5%",
          }}
        />
      </Box>
    </Box>
  );
};
