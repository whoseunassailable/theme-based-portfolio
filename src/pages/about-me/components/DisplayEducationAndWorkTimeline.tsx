import { Box, Typography } from "@mui/material";
import { AboutMeAndContactStyles } from "../../about-me-and-contact-me/styles/AboutMeAndContactMeStyles";

interface DisplayEducationAndWorkTimelineProps {
  year: string;
  title: string;
}

export const DisplayEducationAndWorkTimeline = ({
  year,
  title,
}: DisplayEducationAndWorkTimelineProps) => {
  return (
    <Box
      height={"2.5vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography width={"15vw"} sx={AboutMeAndContactStyles.monoText3}>
        {year}
      </Typography>
      <Typography width={"26vw"} sx={AboutMeAndContactStyles.monoText3}>
        {title}
      </Typography>
    </Box>
  );
};
