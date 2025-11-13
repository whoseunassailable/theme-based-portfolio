import { Typography } from "@mui/material";
import { bebopBountyHeader } from "../../../../../styles/bebop-typography";

interface BebopProjectsHeadingProps {
  gridName: string;
}

export const BebopProjectsHeading = ({
  gridName,
}: BebopProjectsHeadingProps) => {
  return (
    <Typography gridArea={gridName} variant={"h1"} sx={bebopBountyHeader}>
      Bounty Files
    </Typography>
  );
};
