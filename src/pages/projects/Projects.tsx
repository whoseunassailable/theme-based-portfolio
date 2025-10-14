import { BlueprintFrame } from "./BlueprintFrame";
import { SectionHeading } from "../work-experience/components/SectionHeading";
import { SearchStack } from "./SearchStack";

export const Projects = () => {
  return (
    <BlueprintFrame>
      <SectionHeading title={"Projects"}></SectionHeading>
      <SearchStack />
    </BlueprintFrame>
  );
};
