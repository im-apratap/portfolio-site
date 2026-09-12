import GlassCard from '../ui/GlassCard';
import Reveal, { SectionHead } from '../ui/Reveal';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'WebSocket', 'MongoDB', 'REST APIs', 'MySQL'],
  },
  {
    title: 'Generative AI',
    skills: ['LLM APIs', 'LangChain', 'Vector DB', 'Memo0', 'STT & TTS'],
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD'],
  },
  {
    title: 'Mobile',
    skills: ['React Native', 'Expo', 'Mobile UI/UX'],
  },
  {
    title: 'Web3',
    skills: ['Solana', 'Rust', 'Smart Contracts', 'Testing'],
  },
];

const TECH_MARQUEE = [
  'React', 'Node.js', 'MongoDB', 'Express', 'React Native', 'Git', 'Docker',
  'MySQL', 'Next.js', 'Tailwind CSS', 'Web3', 'Solana', 'Langchain',
  'OpenAI API', 'Gemini API', 'PostgreSQL', 'Clerk', 'Bun', 'Sentry',
];

const LANG_MARQUEE = ['JavaScript', 'TypeScript', 'Python', 'C++', 'C'];

const MarqueeBand = ({ items, reverse = false, speed = 36 }) => {
  const doubled = [...items, ...items];
  return (
    <div className="marquee mask-fade-x">
      <div
        className={`marquee-track ${reverse ? 'reverse' : ''}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee-item">
            {item}
            <span className="marquee-sep" aria-hidden>·</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => (
  <section id="skills" className="skills">
    <div className="skills-inner">
      <SectionHead
        eyebrow="Skills"
        title={<>Every tool below ships in real projects — not a roadmap.</>}
        description="The stack I reach for when building server-side systems, mobile apps and everything in between."
      />

      <div className="skills-grid">
        {SKILL_CATEGORIES.map((category, index) => (
          <Reveal key={category.title} delay={(index % 3) * 0.08}>
            <GlassCard className="skill-card">
              <div className="skill-pad">
                <div className="skill-head">
                  <span className="skill-index tnum">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="skill-title">{category.title}</h3>
                </div>
                <div className="skill-list">
                  {category.skills.map((skill) => (
                    <div key={skill} className="skill-row">
                      <span className="skill-name">{skill}</span>
                      <span className="skill-glyph" aria-hidden>▸</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="marquee-block glass">
          <p className="marquee-label">Technologies I work with</p>
          <MarqueeBand items={TECH_MARQUEE} speed={42} />
          <p className="marquee-label">Languages I know</p>
          <MarqueeBand items={LANG_MARQUEE} reverse speed={24} />
        </div>
      </Reveal>
    </div>
  </section>
);

export default Skills;
