import { Box } from "@mui/material";
import { AboutMeText } from "./AboutMeText";
import { ProfilePic } from "./ProfilePic";

export const HeadingAndProfilePic = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gridTemplateAreas: {
          xs: `"heading" "profile-pic"`,
          md: `"heading profile-pic"`,
        },
      }}
    >
      <Box sx={{ gridArea: "heading" }}>
        <AboutMeText />
      </Box>
      <Box gridArea="profile-pic">
        <ProfilePic />
      </Box>
    </Box>
  );
};
