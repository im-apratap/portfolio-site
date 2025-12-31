import { RESUME_CONFIG } from '../config/resume.config';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-content">
          <div className="home-text">
            <h1 className="home-greeting">Hello, I'm</h1>
            <h1 className="home-name">
              <span className="gradient-text">Aaditya Pratap</span>
            </h1>
            <h2 className="home-title">Software Developer</h2>
            <p className="home-description">
              Dedicated Backend Developer & EEE student specializing in MERN
              stack and React Native. Expert in Node.js, Express, MongoDB, and
              building scalable RAG systems. Currently exploring ML and Web3.
            </p>
            <div className="home-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
              <a
                href={RESUME_CONFIG.RESUME_URL}
                className="btn btn-resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2.5V12.5M10 12.5L6.25 8.75M10 12.5L13.75 8.75M3.75 15.625H16.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Resume
              </a>
            </div>
          </div>
          <div className="home-visual">
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
            <div className="code-snippet">
              <div className="code-header">
                <span className="code-dot red"></span>
                <span className="code-dot yellow"></span>
                <span className="code-dot green"></span>
              </div>
              <div className="code-content">
                <pre>
                  {`const developer = {
  name: "Aaditya Pratap",
  role: "Software Developer",
  stack: ["MERN", "React Native", "GenAI"],
  learning: ["Web3", "ML", "DevOps"]
};`}
                </pre>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

