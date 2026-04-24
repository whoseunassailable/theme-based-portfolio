import { Box } from "@mui/material";
import { ProjectIcon } from "./ProjectIcon";
import { ProjectNameAndDetails } from "./ProjectNameAndDetails";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { NeoTypographyForProjectDetailsPage } from "../../styles/NeoTypographyForProjectDetailsPage";
import { COLORS_NEO_EXTENDED } from "../../../../theme/colors";

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
        icon={
          <AutoStoriesIcon
            sx={{
              height: { xs: "5rem", sm: "5.75rem", md: "6.5rem" },
              width: { xs: "5rem", sm: "5.75rem", md: "6.5rem" },
              color: COLORS_NEO_EXTENDED.accent,
            }}
          />
        }
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
