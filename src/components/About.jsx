import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">01.</span>
          About Me
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              Hello! I'm a second-year Electrical & Electronics Engineering
              student turned backend-focused full-stack developer, deeply
              passionate about crafting robust, scalable server-side systems
              that power seamless user experiences.
            </p>
            <p className="about-description">
              Currently specializing in the MERN stack with strong expertise in
              Node.js, Express.js, MongoDB, and React Native integration, I
              excel at building high-performance APIs, optimizing database
              architecture, and implementing RAG-based AI systems.
            </p>
            <p className="about-description">
              Actively expanding into Machine Learning and Web3 technologies,
              I'm constantly pushing my boundaries while contributing to
              real-world projects that solve meaningful problems through clean,
              efficient code.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <span>Fast Learner</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">💡</span>
                <span>Problem Solver</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🎯</span>
                <span>Goal Oriented</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🤝</span>
                <span>Team Player</span>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">8+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Focused towards Work</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

