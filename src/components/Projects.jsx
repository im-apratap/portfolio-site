import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Real-time Video Conferencing",
      description:
        "Real-time video conferencing platform with low-latency calls, screen sharing, chat, user authentication and intelligent transcription features.",
      tech: ["React", "Stream", "Sentry", "MongoDB", "Axios", "Whisper"],
      category: "Full Stack",
      featured: true,
      status: "Completed",
      githubLink: "https://github.com/im-apratap/qubit-video",
    },
    {
      title: "Video Streaming Platform",
      description:
        "Video streaming platform supporting uploads, adaptive playback, user profiles, playlists, comments, likes, subscription, and secure access control.",
      tech: ["Nodejs", "Express", "MongoDB", "Multer", "Cloudinary", "JWT"],
      category: "Backend",
      featured: true,
      status: "Completed",
      githubLink:
        "https://github.com/im-apratap/video-sharing-platform-backend",
    },
    {
      title: "Device Control via Gesture",
      description:
        "Hand gesture-based interface enabling real-time device control, customizable gesture-command mapping, multi-gesture recognition, and visual feedback for accuracy.",
      tech: ["Python", "Mediapipe", "OpenCV", "TensorFlow", "Scikit-learn"],
      category: "ML",
      featured: true,
      status: "Ongoing",
      githubLink: "",
    },
    {
      title: "Generative AI chatbot with Memory integration",
      description:
        "Generative AI chatbot offering contextual, memory-aware conversations, personalization, long-term user profiling, knowledge retrieval, and dynamic multi-step reasoning workflows.",
      tech: ["LLM APIs", "mem0", "LangChain", "LangGraph", "QdrantDB"],
      category: "GenAI",
      featured: true,
      status: "Completed",
      githubLink: "",
    },
    {
      title: "Todo Mobile App",
      description:
        "Cross-platform todo app with real-time sync, recurring tasks, reminders, categories, priorities, offline support, and collaborative shared lists.",
      tech: ["React Native", "Expo", "Convex", "Typescript"],
      category: "Mobile",
      featured: false,
      status: "Completed",
      githubLink: "https://github.com/im-apratap/Todo-MobileApp",
    },
    {
      title: "Social Media App",
      description:
        "Social platform with photo/video posts, real-time feed, comments, likes, follows, messaging, content moderation, and secure user authentication.",
      tech: ["Multer", "Cloudinary", "Arcjet", "Expo", "Clerk", "MongoDB"],
      category: "Full Stack & mobile",
      featured: false,
      status: "Ongoing",
      githubLink: "https://github.com/im-apratap/Vibe-Verse",
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      "Full Stack": "#ff4757",
      "AI/ML": "#ff8c42",
      Mobile: "#ff6b35",
      Web3: "#ff7043",
    };
    return colors[category] || "#ff4757";
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">03.</span>
          Featured Projects
        </h2>
        <p className="section-subtitle">
          Some of my projects showcasing my skills and experience across
          different technologies
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${project.featured ? "featured" : ""}`}
            >
              <div className="project-header">
                <div
                  className="project-category"
                  style={{ color: getCategoryColor(project.category) }}
                >
                  {project.category}
                </div>
                <div className="project-badges">
                  {project.featured && (
                    <span className="featured-badge">⭐ Featured</span>
                  )}
                  <span
                    className={`status-badge ${project.status.toLowerCase()}`}
                  >
                    {project.status === "Ongoing" ? (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    ) : (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    )}
                    {project.status}
                  </span>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <span>View Project</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M7.5 5L12.5 10L7.5 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2ZM11 14H9V9H11V14ZM11 8H9V6H11V8Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
