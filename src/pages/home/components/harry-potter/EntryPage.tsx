import { Box, Button, Typography } from "@mui/material";
import {
  potterHomeTitle,
  potterHomeSubtitle,
  potterHomePrimaryButton,
  potterHomeSecondaryButton,
} from "../../../../styles/potter-typography";
import mainEntryPage from "../../../../assets/main-entry-page-background.png";

export const EntryPage = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      component="main"
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${mainEntryPage})`,
        // backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography sx={potterHomeTitle}>
        Greetings, <br />
        Muggle or Wizard
      </Typography>
      <Typography sx={potterHomeSubtitle}>
        Tell me... <br />
        how much do you know about the <br />
        Wizarding World of Harry Potter?
      </Typography>
      <Button sx={potterHomePrimaryButton}>I'm a True Wizard</Button>
      <Button sx={potterHomeSecondaryButton}>Not much, I'm a Muggle</Button>
    </Box>
  );
};
