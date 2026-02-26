import { RESUME_CONFIG } from "../config/resume.config";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-content">
          <div className="home-text">
            <h1 className="home-greeting">Hello, I'm</h1>
            <h1 className="home-name">Aaditya Pratap</h1>
            <h2 className="home-title">Software Developer</h2>
            <p className="home-description">
              Dedicated Backend Developer & EEE student specializing in MERN
              stack and React Native. Expert in Node.js, Express, MongoDB, and
              building scalable systems. Currently exploring ML and Web3.
            </p>
            <div className="home-buttons">
              <a href="#projects" className="brutal-btn">
                View My Work
              </a>
              <a
                href="#contact"
                className="brutal-btn"
                style={{ backgroundColor: "var(--bg-white)" }}
              >
                Get In Touch
              </a>
              <a
                href={RESUME_CONFIG.RESUME_URL}
                className="brutal-btn btn-resume"
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Resume
              </a>
            </div>
          </div>
          <div className="home-visual">
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
  stack: ["MERN", "React Native"],
  learning: ["Web3", "ML"]
};`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
