import { Box, Typography } from "@mui/material";
import { bebopProjectsDetailSectionMetaValue } from "../../../../styles/bebop-typography";

export const CowboyProjectInfo = () => {
  return (
    <Box
      mt={"5vh"}
      border={`1px solid #F5F1EA`}
      height={"55vh"}
      width={"60vw"}
      display="grid"
      gridTemplateColumns={`1.5fr 1fr`}
      gridTemplateAreas={`"column-1 column-2"`}
      sx={{ placeSelf: "center" }}
    >
      <Box gridArea={"column-1"}>
        <Box border={`2vh solid #F5F1EA`} height={"100%"} pl={"2vw"} pt={"2vw"}>
          EVIDENCE PHOTO F001
          <Box
            border={"1px solid #F5F1EA"}
            height={"94%"}
            pl={"2vw"}
            pt={"2vw"}
          >
            <Typography
              sx={{
                ...bebopProjectsDetailSectionMetaValue,
                placeSelf: "center",
              }}
            >
              UNIQUEST
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        gridArea={"column-2"}
        p={"5vh"}
        sx={bebopProjectsDetailSectionMetaValue}
      >
        CASE ID: <br /> 2071-09-001 <br />
        <br />
        TARGET: <br /> UNIQUEST <br />
        <br />
        REWARD: <br /> REACT <br />
        <br />
        STATUS: <br /> ACTIVE CASE <br />
        <br />
        YEAR: <br /> 2025
      </Box>
    </Box>
  );
};
