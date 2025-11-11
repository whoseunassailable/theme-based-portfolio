import { Box, Typography } from "@mui/material";

export const CowboyProjectInfo = () => {
  return (
    <Box
      mt={"5vh"}
      border={`1px solid #F5F1EA`}
      height={"55vh"}
      display="grid"
      gridTemplateColumns={`1.5fr 1fr`}
      gridTemplateAreas={`"column-1 column-2"`}
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
            <Typography sx={{ placeSelf: "center" }}>UNIQUEST</Typography>
          </Box>
        </Box>
      </Box>
      <Box gridArea={"column-2"}>Great</Box>
    </Box>
  );
};
