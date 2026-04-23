import {
  createContext,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import { projectKnowledge } from "../content/portfolioKnowledge";

type DetailProject = (typeof projectKnowledge)[number];

type ProjectDetailsContextType = {
  currentProject: DetailProject;
  detailProjects: DetailProject[];
  selectProject: (projectId: string) => void;
  selectNextProject: () => void;
};

const detailProjects = projectKnowledge;

const ProjectDetailsContext = createContext<ProjectDetailsContextType | null>(
  null
);

export const ProjectDetailsProvider = ({ children }: PropsWithChildren) => {
  const [selectedProjectId, setSelectedProjectId] = useState(
    detailProjects[0]?.id ?? ""
  );

  const currentProject = useMemo(() => {
    return (
      detailProjects.find((project) => project.id === selectedProjectId) ??
      detailProjects[0]
    );
  }, [selectedProjectId]);

  const selectProject = (projectId: string) => {
    if (!detailProjects.some((project) => project.id === projectId)) return;
    setSelectedProjectId(projectId);
  };

  const selectNextProject = () => {
    const currentIndex = detailProjects.findIndex(
      (project) => project.id === currentProject.id
    );
    const nextIndex = (currentIndex + 1) % detailProjects.length;
    setSelectedProjectId(detailProjects[nextIndex].id);
  };

  return (
    <ProjectDetailsContext.Provider
      value={{ currentProject, detailProjects, selectProject, selectNextProject }}
    >
      {children}
    </ProjectDetailsContext.Provider>
  );
};

export const useProjectDetails = () => {
  const context = useContext(ProjectDetailsContext);

  if (!context) {
    throw new Error(
      "useProjectDetails must be used inside ProjectDetailsProvider"
    );
  }

  return context;
};
