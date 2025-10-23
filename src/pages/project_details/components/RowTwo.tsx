import { NeoTypographyForProjectDetailsPage } from "../styles/NeoTypographyForProjectDetailsPage";
import { ProjectIcon } from "./ProjectIcon";
import { ProjectNameAndDetails } from "./ProjectNameAndDetails";
import { Box } from "@mui/material";

export const RowTwo = () => {
  return (
    <Box
      display={"grid"}
      sx={{
        gridTemplateColumns: {
          md: "3.5fr 6.5fr",
          xs: "1fr",
        },
        gridTemplateAreas: {
          xs: `"icon-container project-detail-container"`,
        },
      }}
    >
      <ProjectIcon></ProjectIcon>
      <ProjectNameAndDetails
        titleStyle={NeoTypographyForProjectDetailsPage.bodyText}
        subTitleStyle={null}
        projectChipIcons={false}
        title={"The Problem"}
        subtitle={
          "Libraries were struggling with shelf space due to irrelevant book inventory."
        }
      ></ProjectNameAndDetails>
    </Box>
  );
};
