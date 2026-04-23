import { HeadNavigator } from "../../../components/HeadNavigator";
import { SectionHeading } from "../../work-experience/components/neo/SectionHeading";
import { BlueprintFrame } from "../components/neo/BlueprintFrame";
import { DynamicProjectRowContainers } from "../components/neo/DynamicProjectContainers";
import { stackNames } from "../constants/stackNames";

export const NeoProjects = () => {
  return (
    <BlueprintFrame>
      <div id="projects-section" />
      <SectionHeading title={"Projects"}></SectionHeading>
      <HeadNavigator navigatorValues={stackNames} useSpaceLeft={false} />
      <DynamicProjectRowContainers />
    </BlueprintFrame>
  );
};
