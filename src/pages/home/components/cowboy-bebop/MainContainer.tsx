import { Box, Button, Typography } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import cowboy_bebop_image from "../../../../assets/cowboy_bebop_home.jpeg";
import music_note_icon from "../../../../assets/music_note_icon.png";

const COWBOY_BEBOP_TRACK_URL =
  "https://archive.org/download/Cowboy-Bebop-OST-Collection/Cowboy%20Bebop%20OST%20Collection/Cowboy%20Bebop%20CD-BOX%20Original%20Sound%20Track%20Limited%20Edition/Disc%201/02.%20Seatbelts%20-%20Tank%21%20%28TV%20Edit%29.mp3";

export const MainContainer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackStatus, setTrackStatus] = useState("Tank! (TV Edit)");

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const handleEnded = () => {
      setIsPlaying(false);
      setTrackStatus("Tank! (TV Edit)");
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    audioElement.addEventListener("ended", handleEnded);
    audioElement.addEventListener("pause", handlePause);

    return () => {
      audioElement.removeEventListener("ended", handleEnded);
      audioElement.removeEventListener("pause", handlePause);
    };
  }, []);

  const handleTogglePlayback = async () => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    if (isPlaying) {
      audioElement.pause();
      setTrackStatus("Tank! (TV Edit)");
      return;
    }

    try {
      await audioElement.play();
      setIsPlaying(true);
      setTrackStatus("Now Playing: Tank! (TV Edit)");
    } catch {
      setIsPlaying(false);
      setTrackStatus("Playback unavailable");
    }
  };

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
            onClick={handleTogglePlayback}
            sx={{
              borderRadius: "16px",
              borderColor: "rgba(219, 86, 62, 0.92)",
              color: "#f4e6c9",
              fontFamily: '"IBM Plex Mono","Roboto Mono",monospace',
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              px: 2.2,
              py: 1,
              background:
                "linear-gradient(180deg, rgba(62, 20, 16, 0.88), rgba(20, 9, 8, 0.94))",
              "&:hover": {
                borderColor: "#ff7b5d",
                background:
                  "linear-gradient(180deg, rgba(88, 30, 24, 0.96), rgba(30, 12, 10, 1))",
              },
            }}
          >
            {isPlaying ? "PAUSE" : "PLAY"}
          </Button>
        </Box>
        <Typography
          sx={{
            mt: "1.8vh",
            fontFamily: '"IBM Plex Mono","Roboto Mono",monospace',
            letterSpacing: "0.08em",
            fontSize: "0.82rem",
            textTransform: "uppercase",
            color: "#f4e6c9",
          }}
        >
          {trackStatus}
        </Typography>
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
        <audio ref={audioRef} src={COWBOY_BEBOP_TRACK_URL} preload="none" />
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
