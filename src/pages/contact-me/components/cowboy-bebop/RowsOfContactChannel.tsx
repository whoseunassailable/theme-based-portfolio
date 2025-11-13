// RowsOfContactChannel.tsx
import { Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { cowboyBebopContactMeChannelsRow } from "../../../../styles/bebop-typography";
import { CowboyBebopContactChannelItem } from "./CowboyBebopContactChannelItem";

export const RowsOfContactChannel = () => {
  return (
    <Box sx={cowboyBebopContactMeChannelsRow}>
      <CowboyBebopContactChannelItem
        icon={<GitHubIcon sx={{ fontSize: "2.5vw", color: "#6CF1F0" }} />}
        label="DOCKING PORT"
        number="01"
      />

      <CowboyBebopContactChannelItem
        icon={<EmailIcon sx={{ fontSize: "2.5vw", color: "#6CF1F0" }} />}
        label="DOCKING PORT"
        number="02"
      />

      <CowboyBebopContactChannelItem
        icon={<LinkedInIcon sx={{ fontSize: "2.5vw", color: "#6CF1F0" }} />}
        label="PRIVATE CHANNEL"
        number="03"
      />
    </Box>
  );
};
