import React, { useState } from 'react';
import './App.css';
import "typeface-julius-sans-one";
import '@fontsource/crimson-text';
import '@fontsource/archivo-narrow';
import Landing from './Components/Landing';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import SkillsModal from './Components/SkillsModal';
import ProjectModal from './Components/ProjectModal';
import Loader from "./Components/Loader";
import SuccessModal from "./Components/SuccessModal";

function App() {
  const [isSkillsModalVisible, setIsSkillsModalVisible] = useState(false);
  const [isProjectModalVisible, setIsProjectModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectedProject = (data) => {
    setSelectedProject(data);
    setIsProjectModalVisible(true);
  }

  return (
    <div className="App">
      <div id="gradient"></div>
      { isSkillsModalVisible && <SkillsModal setIsModalVisible={setIsSkillsModalVisible} /> }
      { isProjectModalVisible && <ProjectModal data={selectedProject} setIsModalVisible={setIsProjectModalVisible} setSelectedProject={setSelectedProject} /> }
      { isLoading && <Loader /> }
      { isSuccessModalVisible && <SuccessModal setIsModalVisible={setIsSuccessModalVisible} />}
      <div style={{ position: "absolute", width: "100%" }}>
        <Landing />
        <About setIsModalVisible={setIsSkillsModalVisible} />
        <Projects handleSelectedProject={handleSelectedProject} />
        <Contact setIsLoading={setIsLoading} setIsModalVisible={setIsSuccessModalVisible} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
