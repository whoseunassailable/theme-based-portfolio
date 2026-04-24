import { useState } from "react";
import { HeadNavigator } from "../../../components/HeadNavigator";
import { SectionHeading } from "../../work-experience/components/neo/SectionHeading";
import { BlueprintFrame } from "../components/neo/BlueprintFrame";
import { DynamicProjectRowContainers } from "../components/neo/DynamicProjectContainers";
import { stackNames } from "../constants/stackNames";

export const NeoProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <BlueprintFrame>
      <div id="projects-section" />
      <SectionHeading title={"Projects"}></SectionHeading>
      <HeadNavigator
        navigatorValues={stackNames}
        useSpaceLeft={false}
        onSelect={setSelectedCategory}
        value={selectedCategory}
      />
      <DynamicProjectRowContainers selectedCategory={selectedCategory} />
    </BlueprintFrame>
  );
};
