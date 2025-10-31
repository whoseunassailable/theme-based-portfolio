import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeProviderWrapper from "./theme/ThemeProviderWrapper";
import { Home } from "./pages/home/Home";
import { NeoWorkExperience } from "./pages/work-experience/WorkExperience";
import { NeoProjects } from "./pages/projects/Projects";
import { NeoProjectsDetail } from "./pages/project-details/ProjectsDetail";
import { NeoContactMe } from "./pages/contact-me/ContactMe";
import { NeoAboutMe } from "./pages/about-me/AboutMe";

function App() {
  return (
    <ThemeProviderWrapper>
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work_experience" element={<NeoWorkExperience />} />
          <Route path="/projects" element={<NeoProjects />} />
          <Route path="/projects_detail" element={<NeoProjectsDetail />} />
          <Route path="/contact" element={<NeoContactMe />} />
          <Route path="/about_me" element={<NeoAboutMe />} />
        </Routes>
      </Router>
    </ThemeProviderWrapper>
  );
}

export default App;
