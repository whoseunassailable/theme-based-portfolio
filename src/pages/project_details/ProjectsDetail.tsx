import { Box } from "@mui/material";
import { HeadNavigator } from "../../components/HeadNavigator";
import { projectDetailSpecific } from "../projects/constants/stackNames";
import { VerticalLinesWithSpacing } from "./components/VerticalLinesWithSpacing";
import { RowOne } from "./components/RowOne";
import { SectionTitles } from "./components/SectionTitles";
import { RowTwo } from "./components/RowTwo";
import { RowThree } from "./components/RowThree";
import { RowFour } from "./components/RowFour";

export const ProjectsDetail = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          md: "2px 0.3fr 2px 5fr 2px 0.3fr 2px",
          xs: "1fr",
        },
        gridTemplateAreas: {
          md: `"v1 space1 v2 content v3 space2 v4"`,
          xs: `"content"`,
        },
        minHeight: "100vh",
        my: "20vh",
      }}
    >
      <VerticalLinesWithSpacing gridAreaNames={["v1", "space1", "v2"]} />
      {/* Main Content Area */}
      <Box
        sx={{
          gridArea: "content",
          display: "grid",
          gridTemplateRows: "repeat(3, auto)",
          rowGap: "4vh",
        }}
      >
        <HeadNavigator
          navigatorValues={projectDetailSpecific}
          useSpaceLeft={false}
          mt={0}
          height="10vh"
        />
        <RowOne></RowOne>
        <SectionTitles title={"Problem"} />
        <RowTwo></RowTwo>
        <SectionTitles title={"Approach"} />
        <RowThree></RowThree>
        <SectionTitles title={"Architecture"} />
        <RowFour></RowFour>
        <SectionTitles title={"Outcome"} />
      </Box>
      <VerticalLinesWithSpacing gridAreaNames={["v3", "space1", "v4"]} />
    </Box>
  );
};
