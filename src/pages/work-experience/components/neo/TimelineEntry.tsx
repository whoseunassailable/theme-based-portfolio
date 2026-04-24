import * as React from "react";
import { Box } from "@mui/material";
import {
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
} from "@mui/lab";
import { COLORS_NEO_EXTENDED } from "../../../../theme/colors";

export interface TimelineEntryProps {
  badge: React.ReactNode;
  children: React.ReactNode;
  index: number;
  markerPosition?: number;
  markerRef?: React.Ref<HTMLSpanElement>;
}

export const TimelineEntry: React.FC<TimelineEntryProps> = ({
  badge,
  children,
  index,
  markerPosition = 50,
  markerRef,
}) => {
  const dotSize = 24;
  const lanePosition = index % 2 === 0 ? 16 : 84;
  const badgeOffset = dotSize + 10;
  const badgeOnRight = lanePosition >= 50;

  return (
    <TimelineItem sx={{ minHeight: 280, alignItems: "stretch" }}>
      <TimelineOppositeContent sx={{ textAlign: "right" }} />

      <TimelineSeparator
        sx={{
          position: "relative",
          minHeight: "100%",
          flex: "0 0 120px",
          width: { xs: 84, md: 120 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: `${markerPosition}%`,
            left: badgeOnRight
              ? `calc(${lanePosition}% + ${badgeOffset}px)`
              : `calc(${lanePosition}% - ${badgeOffset}px)`,
            transform: badgeOnRight
              ? "translateY(-50%)"
              : "translate(-100%, -50%)",
            zIndex: 2,
            whiteSpace: "nowrap",
          }}
        >
          {badge}
        </Box>
        <TimelineDot
          ref={markerRef}
          variant="outlined"
          sx={{
            position: "absolute",
            top: `calc(${markerPosition}% - ${dotSize / 2}px)`,
            left: `calc(${lanePosition}% - ${dotSize / 2}px)`,
            borderColor: COLORS_NEO_EXTENDED.accent,
            boxShadow: "0 0 10px rgba(0, 200, 255, .35)",
            background:
              "radial-gradient(circle at 50% 50%, rgba(0,200,255,.2), transparent 60%)",
            m: 0,
            zIndex: 2,
          }}
        />
      </TimelineSeparator>

      <TimelineContent sx={{ p: 0 }}>{children}</TimelineContent>
    </TimelineItem>
  );
};
