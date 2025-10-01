import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { WorkExperience } from "./pages/WorkExperience";
import { Projects } from "./pages/Projects";
import { ProjectsDetail } from "./pages/ProjectsDetail";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<WorkExperience />}></Route>
        <Route path="/" element={<Projects />}></Route>
        <Route path="/" element={<ProjectsDetails />}></Route>
        <Route path="/" element={<Contact />}></Route>
        <Route path="/" element={<AboutMe />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
