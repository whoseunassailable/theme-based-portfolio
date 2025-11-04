import { Typography } from "@mui/material";
import { bebopBountySubhead } from "../../../styles/bebop-typography";

interface BebopProjectsSubHeadingProps {
  gridName: string;
}

export const BebopProjectsSubHeading = ({
  gridName,
}: BebopProjectsSubHeadingProps) => {
  return (
    <Typography gridArea={gridName} variant="h2" sx={bebopBountySubhead}>
      Projects with a price tag across the galaxy.
    </Typography>
  );
};
