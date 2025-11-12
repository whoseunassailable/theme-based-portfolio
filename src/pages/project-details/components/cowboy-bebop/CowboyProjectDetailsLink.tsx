import { Box, Button, Typography } from "@mui/material";

export const CowboyProjectDetailsLink = () => {
  return (
    <Box
      my="2vh"
      display="grid"
      gridTemplateAreas={`"button1 spacer button2"`}
      gridTemplateColumns="1fr 0.2fr 1fr"
    >
      <Button
        variant="outlined"
        color="primary"
        sx={{ gridArea: "button1", height: "8vh" }}
      >
        <Typography fontSize={"3vh"} color="#C74435">
          SOURCE CODE
        </Typography>
      </Button>
      <Box sx={{ gridArea: "spacer" }} />
      <Button
        variant="outlined"
        color="primary"
        sx={{ gridArea: "button2", height: "8vh" }}
      >
        <Typography fontSize={"3vh"} color="#C74435">
          RUN LIVE PROJECT
        </Typography>
      </Button>
    </Box>
  );
};
