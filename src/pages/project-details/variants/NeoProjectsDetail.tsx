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

const problemDiagramMap: Record<string, string[]> = {
  uniquest: [
    "SCATTERED SCHOOL DATA",
    "MANUAL FIT CHECKING",
    "SLOW ADMISSION DECISIONS",
  ],
  "bots-on-hire": [
    "REPETITIVE APPLICATION FORMS",
    "PORTAL SWITCHING",
    "SUBMISSION ERRORS + REWORK",
  ],
  "koko-fresh-agent": [
    "MANUAL FIELD OPERATIONS",
    "VERIFICATION FRICTION",
    "SLOW TOKEN TRANSACTIONS",
  ],
  "koko-fresh-operator": [
    "WEAK MACHINE VISIBILITY",
    "DISPATCH MISMATCH RISK",
    "FORECASTING GAPS",
  ],
  feetback: [
    "RAW SENSOR STREAMS",
    "NO INSTANT GAIT CUES",
    "WEAK REHAB FEEDBACK LOOP",
  ],
  "pittsburgh-regional-transit": [
    "SPLIT SURVEY SOURCES",
    "NO ROUTE-LEVEL VIEW",
    "HARD TO PRIORITIZE REDESIGNS",
  ],
  careculator: [
    "FRAGMENTED CLINIC SEARCH",
    "OPAQUE COST TRADEOFFS",
    "LOW PATIENT DECISION CONFIDENCE",
  ],
};

const architectureDiagramMap: Record<string, string[]> = {
  uniquest: ["STUDENT APP", "FIT LOGIC", "NODE API", "MYSQL DATA"],
  "bots-on-hire": ["PYTHON RUNNER", "PORTAL MODULES", "BROWSER FLOW", "STATE TRACKING"],
  "koko-fresh-agent": ["AGENT APP", "BLOC + API", "VERIFICATION", "QR / NFC"],
  "koko-fresh-operator": ["OPERATOR CONSOLE", "DISPATCH FLOW", "DEVICE CAPTURE", "CLOUD STATE"],
  feetback: ["SESSION UI", "SENSOR SERVICES", "PRESSURE ANALYSIS", "AUDIO FEEDBACK"],
  "pittsburgh-regional-transit": ["ETL SCRIPTS", "SQLITE LAYER", "STATIC DASHBOARD", "AI ASSISTANT"],
  careculator: ["SEARCH UI", "RANKING API", "SQLITE DB", "DATA PIPELINE"],
};

export const NeoProjectsDetail = () => {
  const { currentProject, selectPreviousProject, selectNextProject } =
    useProjectDetails();
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const problemRef = useRef<HTMLDivElement | null>(null);
  const approachRef = useRef<HTMLDivElement | null>(null);
  const architectureRef = useRef<HTMLDivElement | null>(null);
  const outcomeRef = useRef<HTMLDivElement | null>(null);

  const currentProjectCard = projects.find(
    (project) => project.id === currentProject.id
  );

  const contentSectionSx = {
    pt: { xs: 1.6, md: 2 },
    pb: { xs: 1.8, md: 2.2 },
    px: { xs: 1.1, md: 1.4 },
  };
  const problemDiagramNodes =
    problemDiagramMap[currentProject.id] ?? [
      "USER FRICTION",
      "BROKEN WORKFLOW",
      "LOW DECISION QUALITY",
    ];
  const architectureDiagramNodes =
    architectureDiagramMap[currentProject.id] ??
    currentProject.architectureBlocks.map((block) => block.title.toUpperCase());

  const sectionRefMap: Record<string, HTMLElement | null> = {
    "Previous Project <---": null,
    PROBLEM: problemRef.current,
    APPROACH: approachRef.current,
    ARCHITECTURE: architectureRef.current,
    OUTCOME: outcomeRef.current,
    "Next Project --->": null,
  };

  const handleNavigationSelect = (value: string) => {
    setActiveNavItem(value);
    requestAnimationFrame(() => setActiveNavItem(null));

    if (value === "Previous Project <---") {
      selectPreviousProject();
      requestAnimationFrame(() => {
        containerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
      return;
    }

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
          rowGap: 0,
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
                gap: { xs: 1.25, md: 1.75 },
                pt: { xs: 1.5, md: 2 },
                pb: { xs: 2.5, md: 3 },
              }}
            >
              <Box
                sx={{
                  gridArea: "icon-container",
                  placeSelf: "center",
                  color: COLORS_NEO_EXTENDED.accent,
                  display: "grid",
                  placeItems: "center",
                  "& .MuiSvgIcon-root": {
                    fontSize: {
                      xs: "5rem",
                      sm: "5.75rem",
                      md: "6.5rem",
                    },
                  },
                }}
              >
                {currentProjectCard?.icon}
              </Box>

              <Box
                sx={{
                  gridArea: "project-detail-container",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.85,
                  justifyContent: "center",
                }}
              >
                <Typography sx={NeoTypographyForProjectDetailsPage.title}>
                  {currentProject.name}
                </Typography>
                <Typography sx={NeoTypographyForProjectDetailsPage.subtitle}>
                  {currentProject.oneLiner}
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={1}>
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
              <Box
                display="grid"
                sx={{
                  ...contentSectionSx,
                  gridTemplateColumns: {
                    md: "4.2fr 0.2fr 5.8fr",
                    xs: "1fr",
                  },
                  gridTemplateAreas: {
                    xs: `"problem-visual" "problem-copy"`,
                    md: `"problem-visual divider problem-copy"`,
                  },
                  alignItems: "start",
                  columnGap: 0,
                  rowGap: 1.1,
                }}
              >
                <Box
                  sx={{
                    gridArea: "problem-visual",
                    display: "grid",
                    alignContent: "start",
                    gap: 0.75,
                    minHeight: { md: 250 },
                    pr: { md: 1.35 },
                  }}
                >
                  {problemDiagramNodes.map((node, index) => (
                    <Box
                      key={node}
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr auto",
                        alignItems: "center",
                        gap: 0.9,
                      }}
                    >
                      <Box
                        sx={{
                          border: "2px solid rgba(0, 191, 255, 0.62)",
                          minHeight: { xs: 54, md: 62 },
                          display: "grid",
                          alignItems: "center",
                          px: 1.5,
                          py: 0.9,
                          background:
                            "linear-gradient(180deg, rgba(6, 26, 45, 0.36), rgba(6, 20, 34, 0.14))",
                        }}
                      >
                        <Typography
                          sx={{
                            ...NeoTypographyForProjectDetailsPage.kpiLabel,
                            letterSpacing: "0.09em",
                          }}
                        >
                          {node}
                        </Typography>
                      </Box>
                      {index < problemDiagramNodes.length - 1 && (
                        <Typography
                          sx={{
                            ...NeoTypographyForProjectDetailsPage.kpiValue,
                            fontSize: { xs: "1rem", md: "1.1rem" },
                          }}
                        >
                          ↓
                        </Typography>
                      )}
                    </Box>
                  ))}
                </Box>

                <Box
                  sx={{
                    gridArea: "divider",
                    bgcolor: COLORS_NEO_EXTENDED.accent,
                    width: "2px",
                    display: { xs: "none", md: "block" },
                    justifySelf: "center",
                    minHeight: "100%",
                  }}
                />

                <Typography
                  sx={{
                    ...NeoTypographyForProjectDetailsPage.bodyText,
                    gridArea: "problem-copy",
                    pl: { md: 1.35 },
                    pr: { xs: 0.4, md: 0.6 },
                  }}
                >
                  {currentProject.problem}
                </Typography>
              </Box>
            </Box>

            <Box ref={approachRef}>
              <SectionTitles title={sectionLabels.APPROACH} />
              <Box
                display="grid"
                sx={{
                  ...contentSectionSx,
                  gridTemplateColumns: {
                    md: "4.8fr 0.2fr 5fr",
                    xs: "1fr",
                  },
                  gridTemplateAreas: {
                    xs: `"approach-copy" "approach-flow"`,
                    md: `"approach-copy divider approach-flow"`,
                  },
                  columnGap: 0,
                  rowGap: 1.1,
                  alignItems: "start",
                }}
              >
                <Typography
                  sx={{
                    ...NeoTypographyForProjectDetailsPage.bodyText,
                    gridArea: "approach-copy",
                    pr: { md: 1.35 },
                    pl: { xs: 0.1, md: 0.35 },
                  }}
                >
                  {currentProject.approach}
                </Typography>

                <Box
                  sx={{
                    gridArea: "divider",
                    bgcolor: COLORS_NEO_EXTENDED.accent,
                    width: "2px",
                    display: { xs: "none", md: "block" },
                    justifySelf: "center",
                    minHeight: "100%",
                  }}
                />

                <Box
                  sx={{
                    gridArea: "approach-flow",
                    display: "grid",
                    gap: 0.8,
                    alignContent: "start",
                    pl: { md: 1.35 },
                    pr: { xs: 0.1, md: 0.35 },
                  }}
                >
                  <Typography
                    sx={{
                      ...NeoTypographyForProjectDetailsPage.kpiLabel,
                      mb: 0.1,
                      pl: { xs: 0, md: 0.3 },
                    }}
                  >
                    ACTIVITY FLOW
                  </Typography>
                  {currentProject.flowSteps.map((step, index) => (
                    <Box
                      key={step.title}
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "auto 1fr",
                        gap: 0.95,
                        alignItems: "start",
                        p: { xs: 1.4, md: 1.55 },
                        border: "1px solid rgba(107,163,200,0.28)",
                        borderRadius: "0px",
                        background:
                          "linear-gradient(180deg, rgba(5, 23, 40, 0.42), rgba(4, 18, 34, 0.28))",
                      }}
                    >
                      <Typography
                        sx={{
                          ...NeoTypographyForProjectDetailsPage.kpiValue,
                          fontSize: { xs: "1rem", md: "1.1rem" },
                          minWidth: "1.5ch",
                        }}
                      >
                        {index + 1}
                      </Typography>
                      <Box>
                        <Typography
                          sx={NeoTypographyForProjectDetailsPage.kpiLabel}
                        >
                          {step.title}
                        </Typography>
                        <Typography
                          sx={NeoTypographyForProjectDetailsPage.bodyText}
                        >
                          {step.detail}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            <Box ref={architectureRef}>
              <SectionTitles title={sectionLabels.ARCHITECTURE} />
              <Box
                display="grid"
                sx={{
                  ...contentSectionSx,
                  gridTemplateColumns: {
                    md: "4.9fr 0.2fr 5.1fr",
                    xs: "1fr",
                  },
                  gridTemplateAreas: {
                    xs: `"architecture-copy" "architecture-visual" "architecture-blocks"`,
                    md: `"architecture-copy divider architecture-visual" "architecture-blocks architecture-blocks architecture-blocks"`,
                  },
                  alignItems: "start",
                  columnGap: 0,
                  rowGap: 1.1,
                }}
              >
                <Typography
                  sx={{
                    ...NeoTypographyForProjectDetailsPage.bodyText,
                    gridArea: "architecture-copy",
                    pr: { md: 1.35 },
                    pl: { xs: 0.1, md: 0.35 },
                  }}
                >
                  {currentProject.architecture}
                </Typography>

                <Box
                  sx={{
                    gridArea: "divider",
                    bgcolor: COLORS_NEO_EXTENDED.accent,
                    width: "2px",
                    display: { xs: "none", md: "block" },
                    justifySelf: "center",
                    minHeight: "100%",
                  }}
                />

                <Box
                  sx={{
                    gridArea: "architecture-visual",
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      md: "repeat(4, minmax(0, 1fr))",
                    },
                    alignItems: "center",
                    gap: { xs: 0.75, md: 0.55 },
                    pl: { md: 1.35 },
                    pr: { xs: 0.1, md: 0.35 },
                  }}
                >
                  {architectureDiagramNodes.map((node, index) => (
                    <Box
                      key={node}
                      sx={{
                        display: "grid",
                        gridTemplateColumns: {
                          xs: "1fr",
                          md: index < architectureDiagramNodes.length - 1 ? "1fr auto" : "1fr",
                        },
                        alignItems: "center",
                        gap: { md: 0.5 },
                      }}
                    >
                      <Box
                        sx={{
                          border: "2px solid rgba(0, 191, 255, 0.62)",
                          minHeight: { xs: 54, md: 92 },
                          display: "grid",
                          placeItems: "center",
                          px: 1.15,
                          py: 1,
                          textAlign: "center",
                          background:
                            "linear-gradient(180deg, rgba(6, 26, 45, 0.36), rgba(6, 20, 34, 0.14))",
                        }}
                      >
                        <Typography
                          sx={{
                            ...NeoTypographyForProjectDetailsPage.kpiLabel,
                            letterSpacing: "0.08em",
                          }}
                        >
                          {node}
                        </Typography>
                      </Box>
                      {index < architectureDiagramNodes.length - 1 && (
                        <Typography
                          sx={{
                            ...NeoTypographyForProjectDetailsPage.kpiValue,
                            fontSize: { md: "1rem" },
                            display: { xs: "none", md: "block" },
                          }}
                        >
                          →
                        </Typography>
                      )}
                    </Box>
                  ))}
                </Box>

                <Box
                  display="grid"
                  sx={{
                    gridArea: "architecture-blocks",
                    gridTemplateColumns: {
                      xs: "1fr",
                      md: "repeat(3, minmax(0, 1fr))",
                    },
                    gap: 0.9,
                    pt: 0.2,
                  }}
                >
                  {currentProject.architectureBlocks.map((block) => (
                    <Box
                      key={block.title}
                      sx={{
                        p: { xs: 1.45, md: 1.65 },
                        minHeight: 132,
                        border: "1px solid rgba(107,163,200,0.32)",
                        borderRadius: "0px",
                        background:
                          "linear-gradient(180deg, rgba(5, 23, 40, 0.46), rgba(4, 18, 34, 0.3))",
                        boxShadow:
                          "inset 0 0 0 1px rgba(45, 226, 230, 0.06)",
                      }}
                    >
                      <Typography sx={NeoTypographyForProjectDetailsPage.kpiLabel}>
                        {block.title}
                      </Typography>
                      <Typography sx={NeoTypographyForProjectDetailsPage.bodyText}>
                        {block.detail}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            <Box ref={outcomeRef}>
              <SectionTitles title={sectionLabels.OUTCOME} />
              <Box
                display="grid"
                sx={{
                  ...contentSectionSx,
                  gridTemplateColumns: {
                    md: "6.5fr 0.2fr 6.5fr",
                    xs: "1fr",
                  },
                  gridTemplateAreas: {
                    xs: `"outcome-copy" "outcome-metrics"`,
                    md: `"outcome-copy middle-line outcome-metrics"`,
                  },
                  columnGap: 0,
                  rowGap: 1.1,
                  alignItems: "start",
                }}
              >
                <Typography
                  sx={{
                    ...NeoTypographyForProjectDetailsPage.bodyText,
                    gridArea: "outcome-copy",
                    pr: { md: 1.35 },
                    pl: { xs: 0.1, md: 0.35 },
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
                    minHeight: "100%",
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
                    gap: 0.95,
                    alignSelf: "start",
                    pl: { md: 1.35 },
                    pr: { xs: 0.1, md: 0.35 },
                  }}
                >
                  {currentProject.metrics.map((metric) => (
                    <Box key={metric.label} sx={{ alignSelf: "start" }}>
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

        <Box
          sx={{
            height: "2px",
            width: "100%",
            bgcolor: COLORS_NEO_EXTENDED.accent,
          }}
        />
      </Box>
      <VerticalLinesWithSpacing gridAreaNames={["v3", "space1", "v4"]} />
    </Box>
  );
};
