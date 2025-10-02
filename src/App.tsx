import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeProviderWrapper from "./theme/ThemeProviderWrapper";
import { Home } from "./pages/Home";
import { WorkExperience } from "./pages/WorkExperience";
import { Projects } from "./pages/Projects";
import { ProjectsDetail } from "./pages/ProjectsDetail";
import { Contact } from "./pages/Contact";
import { AboutMe } from "./pages/AboutMe";

function App() {
  return (
    <ThemeProviderWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/work_experience" element={<WorkExperience />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/projects_detail" element={<ProjectsDetail />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about_me" element={<AboutMe />}></Route>
        </Routes>
      </Router>
    </ThemeProviderWrapper>
  );
}

export default App;
