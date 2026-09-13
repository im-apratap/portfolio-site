import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Research from './components/Research';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Global background stack behind the whole page. */}
      <div className="backdrop" aria-hidden>
        <div className="layer-canvas" />
        <div className="layer-dots dot-matrix" />
        <div className="layer-grid grid-lines-strong" />
        <div className="layer-wash" />
        <div className="layer-vignette" />
      </div>

      <Navbar />
      <main>
        <Home />
        <About />
        <Research />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
