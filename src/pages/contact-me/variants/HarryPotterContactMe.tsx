import { Box, Button, Typography } from "@mui/material";
import contactMeTheme from "../../../assets/contact-me-theme.png";
import {
  potterContactMePageButton,
  potterContactMePageButtonLabel,
  potterContactMePageInput,
  potterContactMePageLabel,
  potterContactMePageMessageInput,
  potterContactMePageTitle,
} from "../../../styles/potter-typography";

export const HarryPotterContactMe = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#000",
      }}
    >
      <Box
        sx={{
          width: "100vw",
          aspectRatio: "12 / 9",
          position: "relative",
          backgroundImage: `url(${contactMeTheme})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          px: "30vw",
        }}
      >
        <Typography sx={potterContactMePageTitle}>Contact</Typography>
        <Typography sx={potterContactMePageLabel}>Name</Typography>
        <Box sx={potterContactMePageInput}></Box>
        <Typography sx={potterContactMePageLabel}>Email</Typography>
        <Box sx={potterContactMePageInput}></Box>
        <Typography sx={potterContactMePageMessageInput}>Message</Typography>
        <Button sx={potterContactMePageButton}>
          <Typography sx={potterContactMePageButtonLabel}>
            Send via Owl
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};
