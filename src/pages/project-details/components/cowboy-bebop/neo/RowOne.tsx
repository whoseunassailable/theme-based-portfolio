import { Box } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { NeoTypographyForProjectDetailsPage } from "../../../styles/NeoTypographyForProjectDetailsPage";
import { ProjectIcon } from "../../neo/ProjectIcon";
import { ProjectNameAndDetails } from "../../neo/ProjectNameAndDetails";
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
      <ProjectIcon
        icon={<AutoStoriesIcon sx={{ height: "15vw", width: "15vw" }} />}
      />
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
