import { ProjectNameAndDetails } from "../../neo/ProjectNameAndDetails";
import { NeoTypographyForProjectDetailsPage } from "../../../styles/NeoTypographyForProjectDetailsPage";
import { Box } from "@mui/material";
import libraryShelfLogo from "../../../assets/library_shelf.png";
import { ProjectIcon } from "../../neo/ProjectIcon";

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
      <ProjectIcon
        icon={
          <Box
            component={"img"}
            src={libraryShelfLogo}
            alt="A library shelf logo"
            sx={{ background: "transparent" }}
          />
        }
      />
      <ProjectNameAndDetails
        titleStyle={NeoTypographyForProjectDetailsPage.subheading}
        subTitleStyle={NeoTypographyForProjectDetailsPage.bodyText}
        projectChipIcons={false}
        title={"The Problem"}
        subtitle={
          "Libraries often struggle to keep their shelves relevant. Many books occupy space but attract little to no readership, while popular genres remain understocked. Without reader-driven insights, owners rely on intuition rather than data — leading to shelf space inefficiency and outdated inventory selections. Readers log and rate the books they’ve read. Each book is tagged by genre and content. The system analyzes these patterns — identifying frequently enjoyed genres and recurring titles — to generate data-driven recommendations. These insights are then shared with library owners, helping them prioritize which books and genres to stock, ensuring shelves reflect real reader interests."
        }
      />
    </Box>
  );
};
