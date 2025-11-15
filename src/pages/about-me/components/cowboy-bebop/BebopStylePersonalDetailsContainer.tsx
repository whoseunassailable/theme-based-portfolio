import { Box, Typography } from "@mui/material";
import CowboyBebopProfilePhoto from "../../../../assets/cowboy_bebop_profile_photo.jpeg";
import { cowboyBebopAboutMeCrewSubtitleMeta } from "../../../../styles/bebop-typography";

export const BebopStylePersonalDetailsContainer = () => {
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={"1fr 0.2fr 1fr"}
      py={"2vh"}
      gridTemplateAreas={`"column-1 space column-2"`}
    >
      <Box
        component={"img"}
        gridArea={"column-1"}
        src={CowboyBebopProfilePhoto}
        sx={{ placeSelf: "center" }}
      />
      <Box gridArea={"space"} />
      <Box gridArea={"column-2"} border={"1px solid #e6dcc5"}>
        <Typography p={"2vw"} sx={cowboyBebopAboutMeCrewSubtitleMeta}>
          Name : ROHAN BHANDE <hr />
          Alias : Space Developer <hr />
          Role : Full-Stack Engineer <hr />
          Skills : <br /> • Frontend <br />
          • Backend <br />
          • Data Science <br />
          • Mobile App <hr />
          Location: Earth (Sector 9)
        </Typography>
      </Box>
    </Box>
  );
};
