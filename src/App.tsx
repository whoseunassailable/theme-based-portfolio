import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeProviderWrapper from "./theme/ThemeProviderWrapper";
import { Home } from "./pages/Home";
import { WorkExperience } from "./pages/WorkExperience";
import { Projects } from "./pages/Projects";
import { ProjectDetails } from "./pages/ProjectDetails";
import { ContactMe } from "./pages/ContactMe";
import { AboutMe } from "./pages/AboutMe";
import { ProjectDetailsProvider } from "./context/ProjectDetailsContext";

function App() {
  return (
    <ThemeProviderWrapper>
      <ProjectDetailsProvider>
        <Router basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work_experience" element={<WorkExperience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects_detail" element={<ProjectDetails />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/about_me" element={<AboutMe />} />
          </Routes>
        </Router>
      </ProjectDetailsProvider>
    </ThemeProviderWrapper>
  );
}

export default App;
