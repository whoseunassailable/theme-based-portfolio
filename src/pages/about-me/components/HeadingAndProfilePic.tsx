import { Box } from "@mui/material";
import { AboutMeText } from "./AboutMeText";
import { ProfilePic } from "./ProfilePic";

export const HeadingAndProfilePic = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 0.5fr 1fr " },
        gridTemplateAreas: {
          xs: `"heading" "profile-pic"`,
          md: `"heading space profile-pic "`,
        },
      }}
    >
      <Box sx={{ gridArea: "heading" }}>
        <AboutMeText />
      </Box>
      <Box sx={{ gridArea: "space" }} />
      <Box gridArea="profile-pic">
        <ProfilePic />
      </Box>
    </Box>
  );
};
