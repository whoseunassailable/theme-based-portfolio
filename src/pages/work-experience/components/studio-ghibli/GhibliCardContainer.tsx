import { Box, Typography } from "@mui/material";
import ghibliCardContainerTheme from "../../../../assets/ghibli-card-container.png";
import {
  ghibliWorkBulletTypography,
  ghibliWorkCompanyTypography,
  ghibliWorkDatesTypography,
  ghibliWorkRoleTypography,
  ghibliWorkTagTypography,
} from "../../../../styles/ghibli-typography";

export type WorkExperience = {
  company: string;
  position: string;
  duration: string;
  summary: string[];
  stack: string;
};

type Props = {
  experience: WorkExperience;
};

export const GhibliCardContainer = ({ experience }: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${ghibliCardContainerTheme})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        height: "auto",
        minHeight: "45vh",
        width: "22vw",
        minWidth: 260,
        px: "2.5vw",
        py: "4vh",
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
      }}
    >
      <Typography sx={ghibliWorkCompanyTypography}>
        {experience.company}
      </Typography>
      <Typography sx={ghibliWorkRoleTypography}>
        {experience.position}
      </Typography>
      <Typography sx={{ ...ghibliWorkDatesTypography, mb: 1 }}>
        {experience.duration}
      </Typography>
      {experience.summary.map((line) => (
        <Typography sx={ghibliWorkBulletTypography} key={line}>
          • {line}
        </Typography>
      ))}
      <Typography sx={{ ...ghibliWorkTagTypography, mt: "auto", pt: 1 }}>
        {experience.stack}
      </Typography>
    </Box>
  );
};
