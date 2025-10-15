import { BlueprintFrame } from "./components/BlueprintFrame";
import { SectionHeading } from "../work-experience/components/SectionHeading";
import { SearchStack } from "./components/SearchStack";
import { DynamicProjectRowContainers } from "./components/DynamicProjectContainers";

export const Projects = () => {
  return (
    <BlueprintFrame>
      <SectionHeading title={"Projects"}></SectionHeading>
      <SearchStack />
      <DynamicProjectRowContainers />
    </BlueprintFrame>
  );
};
