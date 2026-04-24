import * as React from "react";
import { Box } from "@mui/material";
import { CustomizedTimeline } from "./CustomizedTimeline";
import { TimelineEntry } from "./TimelineEntry";
import { ExperienceCard } from "./ExperienceCard";
import { YearBadge } from "./YearBadge";
import { experiences } from "../../constants/experiences";
import { COLORS_NEO_EXTENDED } from "../../../../theme/colors";

type Point = {
  x: number;
  y: number;
};

export const WorkExperienceTimeline: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const markerRefs = React.useRef<Array<HTMLSpanElement | null>>([]);
  const [points, setPoints] = React.useState<Point[]>([]);

  React.useEffect(() => {
    const updatePoints = () => {
      const container = containerRef.current;
      if (!container) {
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const nextPoints = markerRefs.current
        .map((marker) => {
          if (!marker) {
            return null;
          }

          const rect = marker.getBoundingClientRect();
          return {
            x: rect.left - containerRect.left + rect.width / 2,
            y: rect.top - containerRect.top + rect.height / 2,
          };
        })
        .filter((point): point is Point => point !== null);

      setPoints(nextPoints);
    };

    updatePoints();

    const resizeObserver = new ResizeObserver(() => {
      updatePoints();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    markerRefs.current.forEach((marker) => {
      if (marker) {
        resizeObserver.observe(marker);
      }
    });

    window.addEventListener("resize", updatePoints);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updatePoints);
    };
  }, []);

  const connectorSegments = React.useMemo(() => {
    const dotRadius = 12;

    return points.slice(0, -1).map((point, index) => {
      const nextPoint = points[index + 1];
      const dx = nextPoint.x - point.x;
      const dy = nextPoint.y - point.y;
      const length = Math.hypot(dx, dy);

      if (!length) {
        return null;
      }

      const offsetX = (dx / length) * dotRadius;
      const offsetY = (dy / length) * dotRadius;

      return {
        x1: point.x + offsetX,
        y1: point.y + offsetY,
        x2: nextPoint.x - offsetX,
        y2: nextPoint.y - offsetY,
      };
    });
  }, [points]);

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: { xs: 2, md: 5 },
        mb: { xs: 3, md: 5 },
        position: "relative",
      }}
    >
      <Box
        component="svg"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {connectorSegments.map((segment, index) =>
          segment ? (
            <line
              key={`${segment.x1}-${segment.y1}-${index}`}
              x1={segment.x1}
              y1={segment.y1}
              x2={segment.x2}
              y2={segment.y2}
              stroke={COLORS_NEO_EXTENDED.accent}
              strokeWidth="2"
              strokeLinecap="round"
            />
          ) : null,
        )}
      </Box>
      <CustomizedTimeline>
        {experiences.map((exp, index) => {
          return (
            <TimelineEntry
              key={exp.heading}
              badge={<YearBadge year={exp.dateLabel ?? ""} />}
              index={index}
              markerPosition={exp.markerPosition}
              markerRef={(node) => {
                markerRefs.current[index] = node;
              }}
            >
              <ExperienceCard
                heading={exp.heading}
                role={exp.role}
                summary={exp.summary}
                labelList={exp.labelList}
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
