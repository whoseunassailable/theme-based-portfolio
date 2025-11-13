import { Box, Typography } from "@mui/material";
import { RowsOfContactChannel } from "./components/cowboy-bebop/RowsOfContactChannel";
import {
  cowboyBebopContactMeAlternativeChannelsHeading,
  cowboyBebopContactMeFooter,
} from "../../styles/bebop-typography";
import SecureLineClosed from "../../assets/secure_line_closed.png";
import { CowboyBebopContactMeInputForm } from "./components/cowboy-bebop/CowboyBebopContactMeInputForm";
import { CowboyBebopContactMeSubTitle } from "./components/cowboy-bebop/CowboyBebopContactMeSubTitle";
import { CowboyBebopContactMeTitle } from "./components/cowboy-bebop/CowboyBebopContactMeTitle";

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
