import * as React from "react";
import { Timeline } from "@mui/lab";

interface CustomizedTimelineProps {
  children?: React.ReactNode; // Expect multiple <TimelineEntry/> items
}

export const CustomizedTimeline: React.FC<CustomizedTimelineProps> = ({
  children,
}) => {
  return (
    <Timeline
      position="alternate"
      sx={{
        maxWidth: 1100,
        mx: "auto",
        position: "relative",
        "& .MuiTimelineItem-root:before": { display: "none" },

        "& .MuiTimelineOppositeContent-root": {
          m: 0,
          p: 0,
          pr: 1,
          textAlign: "right",
        },
        "& .MuiTimelineContent-root": { m: 10 },

        "&:before": {
          content: '""',
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          width: 1,
          bgcolor: "transparent",
          transform: "translateX(-0.5px)",
          zIndex: 0,
          pointerEvents: "none",
        },

        "& .MuiTimelineSeparator-root, & .MuiTimelineContent-root, & .MuiTimelineOppositeContent-root":
          { position: "relative", zIndex: 1 },
      }}
    >
      {children}
    </Timeline>
  );
};
