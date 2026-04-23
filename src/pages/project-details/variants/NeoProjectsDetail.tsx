import { Box, Chip, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { HeadNavigator } from "../../../components/HeadNavigator";
import { useProjectDetails } from "../../../context/ProjectDetailsContext";
import { COLORS_NEO_EXTENDED } from "../../../theme/colors";
import { projects } from "../../projects/constants/projectCard";
import { projectDetailSpecific } from "../../projects/constants/stackNames";
import { RowFour } from "../components/neo/RowFour";
import { RowOne } from "../components/neo/RowOne";
import { RowThree } from "../components/neo/RowThree";
import { RowTwo } from "../components/neo/RowTwo";
import { SectionTitles } from "../components/neo/SectionTitles";
import { VerticalLinesWithSpacing } from "../components/neo/VerticalLinesWithSpacing";
import { NeoTypographyForProjectDetailsPage } from "../styles/NeoTypographyForProjectDetailsPage";

const sectionLabels = {
  PROBLEM: "problem",
  APPROACH: "approach",
  ARCHITECTURE: "architecture",
  OUTCOME: "outcome",
} as const;

export const NeoProjectsDetail = () => {
  const { currentProject, selectNextProject } = useProjectDetails();
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const problemRef = useRef<HTMLDivElement | null>(null);
  const approachRef = useRef<HTMLDivElement | null>(null);
  const architectureRef = useRef<HTMLDivElement | null>(null);
  const outcomeRef = useRef<HTMLDivElement | null>(null);

  const currentProjectCard = projects.find(
    (project) => project.id === currentProject.id
  );

  const sectionRefMap: Record<string, HTMLElement | null> = {
    PROBLEM: problemRef.current,
    APPROACH: approachRef.current,
    ARCHITECTURE: architectureRef.current,
    OUTCOME: outcomeRef.current,
    "Next Project --->": null,
  };

  const handleNavigationSelect = (value: string) => {
    setActiveNavItem(value);
    requestAnimationFrame(() => setActiveNavItem(null));

    if (value === "Next Project --->") {
      selectNextProject();
      requestAnimationFrame(() => {
        containerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
      return;
    }

    sectionRefMap[value as keyof typeof sectionRefMap]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Box
      id="neo-project-details"
      ref={containerRef}
      sx={{
        display: "grid",
        gridTemplateColumns: {
          md: "2px 0.3fr 2px 5fr 2px 0.3fr 2px",
          xs: "1fr",
        },
        gridTemplateAreas: {
          md: `"v1 space1 v2 content v3 space2 v4"`,
          xs: `"content"`,
        },
        minHeight: "100vh",
        my: "20vh",
      }}
    >
      <VerticalLinesWithSpacing gridAreaNames={["v1", "space1", "v2"]} />
      <Box
        sx={{
          gridArea: "content",
          display: "grid",
          gridTemplateRows: "repeat(3, auto)",
          rowGap: "4vh",
        }}
      >
        <HeadNavigator
          navigatorValues={projectDetailSpecific}
          useSpaceLeft={false}
          mt={0}
          height="10vh"
          onSelect={handleNavigationSelect}
          value={activeNavItem}
        />

        {currentProject.id === "readiculous" ? (
          <>
            <RowOne />

            <Box ref={problemRef}>
              <SectionTitles title={sectionLabels.PROBLEM} />
              <RowTwo />
            </Box>

            <Box ref={approachRef}>
              <SectionTitles title={sectionLabels.APPROACH} />
              <RowThree />
            </Box>

            <Box ref={architectureRef}>
              <SectionTitles title={sectionLabels.ARCHITECTURE} />
              <RowFour />
            </Box>

            <Box ref={outcomeRef}>
              <SectionTitles title={sectionLabels.OUTCOME} />
            </Box>
          </>
        ) : (
          <>
            <Box
              display="grid"
              sx={{
                gridTemplateColumns: {
                  md: "3.5fr 6.5fr",
                  xs: "1fr",
                },
                gridTemplateAreas: {
                  xs: `"icon-container" "project-detail-container"`,
                  md: `"icon-container project-detail-container"`,
                },
                gap: 3,
              }}
            >
              <Box
                sx={{
                  gridArea: "icon-container",
                  placeSelf: "center",
                  color: COLORS_NEO_EXTENDED.accent,
                }}
              >
                {currentProjectCard?.icon}
              </Box>

              <Box
                sx={{
                  gridArea: "project-detail-container",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  justifyContent: "center",
                }}
              >
                <Typography sx={NeoTypographyForProjectDetailsPage.title}>
                  {currentProject.name}
                </Typography>
                <Typography sx={NeoTypographyForProjectDetailsPage.subtitle}>
                  {currentProject.oneLiner}
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={1.5}>
                  <Chip
                    label={currentProject.category}
                    size="small"
                    sx={{
                      ...NeoTypographyForProjectDetailsPage.tagText,
                      borderRadius: "999px",
                    }}
                  />
                  {currentProject.metrics.map((metric) => (
                    <Chip
                      key={metric.label}
                      label={`${metric.label}: ${metric.value}`}
                      size="small"
                      sx={{
                        ...NeoTypographyForProjectDetailsPage.tagText,
                        borderRadius: "999px",
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>

            <Box ref={problemRef}>
              <SectionTitles title={sectionLabels.PROBLEM} />
              <Typography sx={NeoTypographyForProjectDetailsPage.bodyText}>
                {currentProject.problem}
              </Typography>
            </Box>

            <Box ref={approachRef}>
              <SectionTitles title={sectionLabels.APPROACH} />
              <Typography sx={NeoTypographyForProjectDetailsPage.bodyText}>
                {currentProject.approach}
              </Typography>
            </Box>

            <Box ref={architectureRef}>
              <SectionTitles title={sectionLabels.ARCHITECTURE} />
              <Typography sx={NeoTypographyForProjectDetailsPage.bodyText}>
                {currentProject.architecture}
              </Typography>
            </Box>

            <Box ref={outcomeRef}>
              <SectionTitles title={sectionLabels.OUTCOME} />
              <Box
                display="grid"
                sx={{
                  gridTemplateColumns: {
                    md: "6.5fr 0.2fr 6.5fr",
                    xs: "1fr",
                  },
                  gridTemplateAreas: {
                    xs: `"outcome-copy" "outcome-metrics"`,
                    md: `"outcome-copy middle-line outcome-metrics"`,
                  },
                  gap: 3,
                }}
              >
                <Typography
                  sx={{
                    ...NeoTypographyForProjectDetailsPage.bodyText,
                    gridArea: "outcome-copy",
                  }}
                >
                  {currentProject.outcome}
                </Typography>

                <Box
                  sx={{
                    gridArea: "middle-line",
                    bgcolor: COLORS_NEO_EXTENDED.accent,
                    width: "2px",
                    display: { xs: "none", md: "block" },
                    justifySelf: "center",
                  }}
                />

                <Box
                  sx={{
                    gridArea: "outcome-metrics",
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      md: "repeat(2, minmax(0, 1fr))",
                    },
                    gap: 3,
                    alignSelf: "center",
                  }}
                >
                  {currentProject.metrics.map((metric) => (
                    <Box key={metric.label}>
                      <Typography
                        sx={NeoTypographyForProjectDetailsPage.kpiLabel}
                      >
                        {metric.label}
                      </Typography>
                      <Typography
                        sx={NeoTypographyForProjectDetailsPage.kpiValue}
                      >
                        {metric.value}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Box>
      <VerticalLinesWithSpacing gridAreaNames={["v3", "space1", "v4"]} />
    </Box>
  );
};
