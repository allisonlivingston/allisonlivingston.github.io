import './App.css';
import Nav from "./Components/Nav";
import Landing from './Components/Landing';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <div style={{ position: "absolute" }}>
        <Landing />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
