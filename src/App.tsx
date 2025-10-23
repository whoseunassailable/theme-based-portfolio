import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeProviderWrapper from "./theme/ThemeProviderWrapper";
import { Home } from "./pages/home/Home";
import { WorkExperience } from "./pages/work-experience/WorkExperience";
import { Projects } from "./pages/projects/Projects";
import { ProjectsDetail } from "./pages/project_details/ProjectsDetail";
import { Contact } from "./pages/Contact";
import { AboutMe } from "./pages/AboutMe";

function App() {
  return (
    <ThemeProviderWrapper>
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work_experience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects_detail" element={<ProjectsDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about_me" element={<AboutMe />} />
        </Routes>
      </Router>
    </ThemeProviderWrapper>
  );
}

export default App;
