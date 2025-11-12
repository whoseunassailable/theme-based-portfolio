import { Typography } from "@mui/material";
import { bebopProjectsDetailSectionBody } from "../../../../styles/bebop-typography";

export const CowboyProjectsDetailInvestigationSummary = () => {
  return (
    <Typography
      width={"60vw"}
      mb={"2vh"}
      sx={{ ...bebopProjectsDetailSectionBody, placeSelf: "center" }}
    >
      Python features implemented such as press forming, cutting, coating steel,
      resistance welding, and assembly into car body parts.
    </Typography>
  );
};
