import { Box, Typography } from "@mui/material";
import { pageOptions } from "../../../../constants/pageOptions";
import { CowboyBebopThemeButton } from "./CowboyBebopThemeButton";

const sectionMap: Record<string, { id: string; block?: ScrollLogicalPosition }> =
  {
    Home: { id: "main", block: "start" },
    Work: { id: "bebop-work-section", block: "start" },
    Projects: { id: "bebop-projects-section", block: "start" },
    "Project Details": {
      id: "bebop-project-details-section",
      block: "start",
    },
    Contact: { id: "bebop-contact-section", block: "start" },
    "About me": { id: "bebop-about-section", block: "start" },
  };

export const CowboyBebopNavbar = () => {
  const handleNavigate = (pageName: string) => {
    const target = sectionMap[pageName];
    if (!target) return;

    document.getElementById(target.id)?.scrollIntoView({
      behavior: "smooth",
      block: target.block ?? "start",
    });
  };

  return (
    <Box
      height={"10vh"}
      width={"90vw"}
      display={"grid"}
      gridTemplateColumns={"1fr auto"}
      alignItems={"center"}
    >
      <Box
        sx={{
          gap: "2vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {pageOptions.map((pageName) => (
          <Box
            key={pageName}
            onClick={() => handleNavigate(pageName)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                handleNavigate(pageName);
              }
            }}
            sx={{
              cursor: "pointer",
              px: 0.4,
              py: 0.2,
              borderRadius: "999px",
            }}
          >
            <Typography
              variant="h5"
              className=".bebop-nav"
              sx={{
                fontWeight: 700,
                color: "#f4e6c9",
                letterSpacing: "0.05em",
                transition: "color 160ms ease, text-shadow 160ms ease",
                "&:hover": {
                  color: "#ffcf9b",
                  textShadow: "0 0 10px rgba(219, 86, 62, 0.24)",
                },
              }}
            >
              {pageName}
            </Typography>
          </Box>
        ))}
      </Box>
      <CowboyBebopThemeButton />
    </Box>
  );
};
