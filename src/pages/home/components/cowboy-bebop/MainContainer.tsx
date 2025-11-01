import { Box, Button, Typography } from "@mui/material";
import { Send } from "@mui/icons-material";
import cowboy_bebop_image from "../../../../assets/cowboy_bebop_home.jpeg";
import music_note_icon from "../../../../assets/music_note_icon.png";

export const MainContainer = () => {
  return (
    <Box
      height={"75vh"}
      width={"90vw"}
      display={"grid"}
      gridTemplateAreas={`"container-1 container-2"`}
      gridTemplateColumns={"1fr 1fr"}
    >
      <Box
        gridArea={"container-1"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"start"}
      >
        <Typography
          variant="h1"
          className="bebop-hero-title"
          sx={{
            mt: "15vh",
            fontSize: "10vh",
            lineHeight: "8vh",
            fontWeight: "700",
          }}
        >
          <center>
            Rohan <br />
            Bhande
          </center>
        </Typography>

        <Typography variant="h4" sx={{ mt: "5vh", fontWeight: 700 }}>
          <center>SEE YOU, SPACE DEVELOPER....</center>
        </Typography>
        <Typography mt={"1.5vh"} variant="h6" sx={{ fontWeight: 700 }}>
          FRONTEND | BACKEND | DATA SCIENCE | MOBILE APP
        </Typography>
        <Box mt={"5vh"}>
          <Button
            variant="outlined"
            startIcon={<Send />}
            onClick={() => alert("Clicked me!")}
          >
            PLAY
          </Button>
        </Box>
        <Box
          component="img"
          src={music_note_icon}
          alt="Music Note Icon"
          sx={{
            mt: "3vh",
            alignItems: "end",
            justifyContent: "end",
            background: "transparent",
            height: "10%",
            width: "10%",
            objectFit: "contain",
          }}
        />
      </Box>

      <Box gridArea={"container-2"}>
        <Box
          component="img"
          src={cowboy_bebop_image}
          alt="Cowboy Bebop Image"
          sx={{
            background: "transparent",
            height: "90%",
            width: "90%",
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
};
