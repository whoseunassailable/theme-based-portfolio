import { Box, Button, Typography } from "@mui/material";
import {
  potterHomeTitle,
  potterHomeSubtitle,
  potterHomePrimaryButton,
  potterHomeSecondaryButton,
} from "../../../../styles/potter-typography";
import mainEntryPage from "../../../../assets/main-entry-page-background.png";

interface EntryPageProps {
  onWizardSelect: () => void;
  onMuggleSelect: () => void;
}

export const EntryPage = ({
  onWizardSelect,
  onMuggleSelect,
}: EntryPageProps) => {
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
      <Button sx={potterHomePrimaryButton} onClick={onWizardSelect}>
        I&apos;m a True Wizard
      </Button>
      <Button sx={potterHomeSecondaryButton} onClick={onMuggleSelect}>
        Not much, I&apos;m a Muggle
      </Button>
    </Box>
  );
};
