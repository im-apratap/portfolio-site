import GlassCard from '../ui/GlassCard';
import Reveal, { SectionHead } from '../ui/Reveal';
import './Projects.css';

const PROJECTS = [
  {
    title: 'SolShare',
    tag: 'v0.9',
    date: 'Active development',
    description:
      "A Web3 bill-splitting mobile app built on Solana. Features AI receipt scanning, on-chain settlements, and a modern UI powered by React Native and Bun.",
    tech: ['React Native', 'Solana', 'TypeScript', 'Bun'],
    category: 'Web3',
    status: 'Ongoing',
    githubLink: 'https://github.com/im-apratap/SolShare',
    demoLink: 'https://www.youtube.com/shorts/hNDvW_cN51s',
  },
  {
    title: 'OmniSplit',
    tag: 'v0.8',
    date: 'Active development',
    description:
      'Expense splitter that settles group debts through real-money UPI payment links, with a Gemini Vision AI receipt scanner that prefills expenses from a photo and a Node.js + PostgreSQL backend.',
    tech: ['React Native', 'Expo', 'Gemini AI', 'PostgreSQL', 'Prisma'],
    category: 'Mobile · AI',
    status: 'Ongoing',
    githubLink: 'https://github.com/im-apratap/OmniSplit',
    demoLink: 'https://bill-spliting.vercel.app',
  },
  {
    title: 'DropRoom',
    tag: 'v1.0',
    date: 'Stable',
    description:
      'Anonymous, real-time pastebin and file-sharing workspace. Instantly create a room, share code & files (up to 5MB) via a 6-digit code, and sync across devices without signing up.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSockets'],
    category: 'Full Stack',
    status: 'Completed',
    githubLink: 'https://github.com/im-apratap/DropRoom',
    demoLink: 'https://droproom.vercel.app/',
  },
  {
    title: 'Vibe-Verse',
    tag: 'wip',
    date: 'Active development',
    description:
      'Social platform with photo/video posts, real-time feed, comments, likes, follows, messaging, content moderation, and secure user authentication.',
    tech: ['React Native', 'Expo', 'Node.js', 'MongoDB'],
    category: 'Mobile',
    status: 'Ongoing',
    githubLink: 'https://github.com/im-apratap/Vibe-Verse',
  },
];

const Projects = () => (
  <section id="projects" className="projects">
    <div className="projects-inner">
      <SectionHead
        eyebrow="Projects"
        title={<>Shipped, not promised.</>}
        description="Selected builds pulled from my GitHub — open source, deployed and battle-tested."
      />

      <div className="release-stream">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.06}>
            <article className="release-row">
              <div className="release-rail" aria-hidden>
                <span className="release-node" />
              </div>
              <GlassCard className="release-card">
                <div className="release-pad">
                  <div className="release-top">
                    <div className="release-id">
                      <span className={`release-tag ${project.status === 'Ongoing' ? 'wip' : 'stable'}`}>
                        {project.tag}
                      </span>
                      {project.tag === 'wip' ? (
                        <span className="release-latest">latest</span>
                      ) : null}
                      <span className="release-date">{project.date}</span>
                    </div>
                    <span className={`release-status ${project.status.toLowerCase()}`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="release-title">{project.title}</h3>
                  <p className="release-desc">{project.description}</p>

                  <div className="release-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="release-chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="release-actions">
                    {project.demoLink ? (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="release-link primary"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Live demo</span>
                      </a>
                    ) : null}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="release-link secondary"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.21.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                      </svg>
                      <span>View source</span>
                    </a>
                    <span className="release-category">{project.category}</span>
                  </div>
                </div>
              </GlassCard>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="projects-cta">
          <a
            href="https://github.com/im-apratap?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary projects-all-btn"
          >
            <span>Full history on GitHub</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Projects;
