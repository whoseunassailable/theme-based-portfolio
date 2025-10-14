import * as React from "react";
import { Box } from "@mui/material";
import { CustomizedTimeline } from "./CustomizedTimeline";
import { TimelineEntry } from "./TimelineEntry";
import { ExperienceCard } from "./ExperienceCard";
import { YearBadge } from "./YearBadge";
import { experiences } from "../constants/experiences";

const badges: React.ReactNode[] = [
  <YearBadge key="excelerate" year="2024" />,
  <YearBadge key="launch" year="2022–2024" />,
  <YearBadge key="mit-foss" year="2021" />,
];

export const WorkExperienceTimeline: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: { xs: 2, md: 5 },
        mb: { xs: 3, md: 5 },
      }}
    >
      <CustomizedTimeline>
        {experiences.map((exp, index) => {
          return (
            <TimelineEntry
              key={exp.heading}
              badge={badges[index] ?? <YearBadge year="" />}
            >
              <ExperienceCard
                heading={exp.heading}
                role={exp.role}
                summary={exp.summary}
                metricNumber={exp.metricNumber}
                metricInfo={exp.metricInfo}
                upOrDownIcon={exp.upOrDownIcon}
                sx={{ width: "100%", maxWidth: { md: "100%" } }}
              />
            </TimelineEntry>
          );
        })}
      </CustomizedTimeline>
    </Box>
  );
};
