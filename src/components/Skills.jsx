import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "HTML/CSS" },
        { name: "Tailwind CSS" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js" },
        { name: "WebSocket" },
        { name: "MongoDB" },
        { name: "REST APIs" },
        { name: "MySQL" },
      ],
    },
    {
      title: "Generative AI",
      skills: [
        { name: "LLM APIs" },
        { name: "LangChain" },
        { name: "Vector DB" },
        { name: "Memo0" },
        { name: "STT & TTS" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git" },
        { name: "Docker" },
        { name: "AWS" },
        { name: "CI/CD" },
      ],
    },
    {
      title: "Mobile",
      skills: [
        { name: "React Native" },
        { name: "Expo" },
        { name: "Mobile UI/UX" },
      ],
    },
    {
      title: "Web3",
      skills: [
        { name: "Solana" },
        { name: "Rust" },
        { name: "Smart Contracts" },
        { name: "Testing" },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">02.</span>
          Skills & Technologies
        </h2>
        <p className="section-subtitle">
          A comprehensive overview of my technical expertise and the tools I
          work with
        </p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="tech-badges">
          <h3 className="badges-title">Technologies I Work With</h3>
          <div className="badges-container">
            {[
              "React",
              "Node.js",
              "MongoDB",
              "Express",
              "React Native",
              "Git",
              "Docker",
              "MySQL",
              "Next.js",
              "Tailwind CSS",
              "Web3",
              "Solana",
              "Langchain",
              "OpenAI API",
              "Gemini API",
              "PostgreSQL",
              "Clerk",
              "Bun",
              "Sentry",
            ].map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="tech-badges">
          <h3 className="badges-title">Programming Languages I Know</h3>
          <div className="badges-container">
            {["JavaScript", "TypeScript", "Python", "C++", "C"].map(
              (lang, index) => (
                <span key={index} className="tech-badge">
                  {lang}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
