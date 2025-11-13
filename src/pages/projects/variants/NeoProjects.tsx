import { BlueprintFrame } from "../components/variants/neo/BlueprintFrame";
import { SectionHeading } from "../../work-experience/components/SectionHeading";
import { HeadNavigator } from "../../../components/HeadNavigator";
import { DynamicProjectRowContainers } from "../components/variants/neo/DynamicProjectContainers";
import { stackNames } from "../constants/stackNames";

export const NeoProjects = () => {
  return (
    <BlueprintFrame>
      <SectionHeading title={"Projects"}></SectionHeading>
      <HeadNavigator navigatorValues={stackNames} useSpaceLeft={false} />
      <DynamicProjectRowContainers />
    </BlueprintFrame>
  );
};
