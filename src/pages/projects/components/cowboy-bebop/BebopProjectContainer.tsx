import { Box, Typography } from "@mui/material";
import {
  bebopProjectSectionHeader,
  bebopProjectSectionMetaLabel,
  bebopProjectSectionStatus,
  bebopProjectSectionTag,
} from "../../../../styles/bebop-typography";

interface BebopProjectContainerProps {
  name: string;
  stack: string;
}

export const BebopProjectContainer = ({
  name,
  stack,
}: BebopProjectContainerProps) => {
  return (
    <Box
      mt={"10vh"}
      display={"flex"}
      flexDirection={"column"}
      height={"45vh"}
      width={"20vw"}
      bgcolor={"#99907C"}
      p={"2vw"}
    >
      <Typography sx={bebopProjectSectionHeader}>{name}</Typography>
      <Box mt={"2vh"} height={"40%"} width={"95%"} bgcolor={"whitesmoke"}></Box>
      <Typography mt={"2vh"} sx={bebopProjectSectionMetaLabel}>
        REWARD : 5000#
      </Typography>
      <Typography mt={"1vh"} sx={bebopProjectSectionTag}>
        {stack}
      </Typography>
      <Typography mt={"3vh"} sx={bebopProjectSectionStatus}>
        ACTIVE CASE
      </Typography>
    </Box>
  );
};
