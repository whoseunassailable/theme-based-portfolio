import { Box } from "@mui/material";
import { ProjectIcon } from "./ProjectIcon";
import { ProjectNameAndDetails } from "./ProjectNameAndDetails";
import { NeoTypographyForProjectDetailsPage } from "../styles/NeoTypographyForProjectDetailsPage";

export const RowOne = () => {
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
        titleStyle={NeoTypographyForProjectDetailsPage.title}
        subTitleStyle={NeoTypographyForProjectDetailsPage.subtitle}
        projectChipIcons={true}
        title={"READICULOUS"}
        subtitle={
          "Book recommendation systems to optimize library inventories ."
        }
      />
    </Box>
  );
};
