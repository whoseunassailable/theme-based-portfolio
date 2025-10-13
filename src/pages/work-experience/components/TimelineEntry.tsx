import * as React from "react";
import {
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import type { SxProps, Theme } from "@mui/material";

export interface TimelineEntryProps {
  badge: React.ReactNode;
  children: React.ReactNode;
  oppositeContentSx?: SxProps<Theme>;
  separatorSx?: SxProps<Theme>;
  dotSx?: SxProps<Theme>;
  connectorSx?: SxProps<Theme>;
  contentSx?: SxProps<Theme>;
}

export const TimelineEntry: React.FC<TimelineEntryProps> = ({
  badge,
  children,
  oppositeContentSx,
  separatorSx,
  dotSx,
  connectorSx,
  contentSx,
}) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 0, px: 10, textAlign: "right", ...oppositeContentSx }}
      >
        {badge}
      </TimelineOppositeContent>

      <TimelineSeparator sx={{ zIndex: 2, ...separatorSx }}>
        <TimelineDot
          variant="outlined"
          sx={{
            borderColor: "rgba(0, 200, 255, .5)",
            boxShadow: "0 0 10px rgba(0, 200, 255, .35)",
            background:
              "radial-gradient(circle at 50% 50%, rgba(0,200,255,.2), transparent 60%)",
            ...dotSx,
          }}
        />
        <TimelineConnector sx={{ bgcolor: "divider", ...connectorSx }} />
      </TimelineSeparator>

      <TimelineContent sx={{ p: 0, ...contentSx }}>{children}</TimelineContent>
    </TimelineItem>
  );
};
