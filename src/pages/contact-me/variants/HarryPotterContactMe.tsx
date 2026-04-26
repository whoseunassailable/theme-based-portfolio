import { Box } from "@mui/material";
import harryContactDesign from "../../../assets/harry_contact_design.png";

const hotspotSx = {
  position: "absolute",
  background: "transparent",
  border: 0,
  cursor: "pointer",
  padding: 0,
  margin: 0,
  opacity: 0,
  zIndex: 2,
  "&:focus-visible": {
    opacity: 0.18,
    outline: "2px solid rgba(255, 219, 138, 0.95)",
    outlineOffset: "2px",
    background:
      "linear-gradient(180deg, rgba(255, 230, 181, 0.3), rgba(163, 108, 44, 0.22))",
  },
} as const;

const openLink = (href: string) => {
  window.open(href, "_blank", "noopener,noreferrer");
};

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
          width: "min(100vw, 1448px)",
          aspectRatio: "1448 / 1086",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={harryContactDesign}
          alt="Harry Potter contact design"
          sx={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover",
            userSelect: "none",
            WebkitUserDrag: "none",
          }}
        />

        <Box
          component="button"
          type="button"
          aria-label="Email Rohan"
          onClick={() => (window.location.href = "mailto:rohanbhandeworks@gmail.com")}
          sx={{
            ...hotspotSx,
            left: "16.2%",
            top: "37.3%",
            width: "27.7%",
            height: "10.2%",
          }}
        />

        <Box
          component="button"
          type="button"
          aria-label="Open LinkedIn"
          onClick={() => openLink("https://www.linkedin.com/in/rohan-bhande-08091a169/")}
          sx={{
            ...hotspotSx,
            left: "18.4%",
            top: "73.6%",
            width: "6.7%",
            height: "9.1%",
          }}
        />

        <Box
          component="button"
          type="button"
          aria-label="Open GitHub"
          onClick={() => openLink("https://github.com/whoseunassailable")}
          sx={{
            ...hotspotSx,
            left: "27.2%",
            top: "73.6%",
            width: "6.7%",
            height: "9.1%",
          }}
        />

        <Box
          component="button"
          type="button"
          aria-label="Email via owl"
          onClick={() => (window.location.href = "mailto:rohanbhandeworks@gmail.com")}
          sx={{
            ...hotspotSx,
            left: "36.3%",
            top: "73.6%",
            width: "6.7%",
            height: "9.1%",
          }}
        />

        <Box
          component="button"
          type="button"
          aria-label="Send via owl"
          onClick={() => (window.location.href = "mailto:rohanbhandeworks@gmail.com")}
          sx={{
            ...hotspotSx,
            left: "51.5%",
            top: "82.4%",
            width: "29.4%",
            height: "7.5%",
          }}
        />
      </Box>
    </Box>
  );
};
