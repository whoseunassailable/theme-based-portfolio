import * as React from "react";
import {
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import { COLORS_NEO_EXTENDED } from "../../../theme/colors";

export interface TimelineEntryProps {
  badge: React.ReactNode;
  children: React.ReactNode;
}

export const TimelineEntry: React.FC<TimelineEntryProps> = ({
  badge,
  children,
}) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent sx={{ textAlign: "right" }}>
        {badge}
      </TimelineOppositeContent>

      <TimelineSeparator>
        <TimelineDot
          variant="outlined"
          sx={{
            borderColor: COLORS_NEO_EXTENDED.accent,
            boxShadow: "0 0 10px rgba(0, 200, 255, .35)",
            background:
              "radial-gradient(circle at 50% 50%, rgba(0,200,255,.2), transparent 60%)",
          }}
        />
        <TimelineConnector sx={{ bgcolor: COLORS_NEO_EXTENDED.accent }} />
      </TimelineSeparator>

      <TimelineContent sx={{ p: 0 }}>{children}</TimelineContent>
    </TimelineItem>
  );
};
