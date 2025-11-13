import { Box, Typography } from "@mui/material";
import { CowboyBebopContactMeTitle } from "./components/CowboyBebopContactMeTitle";
import { CowboyBebopContactMeSubTitle } from "./components/CowboyBebopContactMeSubTitle";
import { CowboyBebopContactMeInputForm } from "./components/CowboyBebopContactMeInputForm";
import { RowsOfContactChannel } from "./components/RowsOfContactChannel";
import {
  cowboyBebopContactMeAlternativeChannelsHeading,
  cowboyBebopContactMeFooter,
} from "../../styles/bebop-typography";
import SecureLineClosed from "../../assets/secure_line_closed.png";

export const CowboyBebopContactMe = () => {
  return (
    <Box width={"60vw"} sx={{ placeSelf: "center" }}>
      <CowboyBebopContactMeTitle></CowboyBebopContactMeTitle>
      <CowboyBebopContactMeSubTitle></CowboyBebopContactMeSubTitle>
      <CowboyBebopContactMeInputForm></CowboyBebopContactMeInputForm>
      <Typography sx={cowboyBebopContactMeAlternativeChannelsHeading}>
        ALTERNATIVE CHANNELS
      </Typography>
      <RowsOfContactChannel></RowsOfContactChannel>
      <Typography sx={cowboyBebopContactMeFooter}>
        END TRANSMISSION // BEBOP FREQUENCY 2071
      </Typography>
      <Box
        height={"25vh"}
        width={"40vh"}
        component={"img"}
        src={SecureLineClosed}
        sx={{ placeSelf: "center" }}
      />
    </Box>
  );
};
