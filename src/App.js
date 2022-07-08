// import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import AboutSection from "./components/AboutSection";
import IntroSection from "./components/IntroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

const App = () => {
  return (
    <>
      {/* <div className="App">
    </div> */}
      <Navbar />
      <IntroSection />
      <AboutSection/>
      <SkillsSection />
      <ProjectsSection />
    </>
  );
};

export default App;
