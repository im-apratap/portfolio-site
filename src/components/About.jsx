import GlassCard from '../ui/GlassCard';
import Reveal, { SectionHead } from '../ui/Reveal';
import './About.css';

const HIGHLIGHTS = [
  { icon: 'M13 10V3L4 14h7v7l9-11h-7z', label: 'Fast Learner' },
  { icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0013 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', label: 'Problem Solver' },
  { icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z', label: 'Goal Oriented' },
  { icon: 'M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6-4a3 3 0 11-3-3', label: 'Team Player' },
];

const FACTS = [
  { k: 'role', v: 'Full-Stack Developer · EEE undergrad' },
  { k: 'stack', v: 'MERN · React Native · Solana · GenAI' },
  { k: 'research', v: 'AI security · 2 published papers' },
  { k: 'currently', v: 'Building on the Solana ecosystem' },
  { k: 'location', v: 'Bihar, India · open to remote' },
  { k: 'status', v: 'Open to opportunities', lit: true },
];

const About = () => (
  <section id="about" className="about">
    <div className="about-inner">
      <SectionHead
        eyebrow="About"
        title={<>Built in the engine room, not the brochure.</>}
        description="Electrical & Electronics Engineering undergrad turned full-stack developer, building on the Solana ecosystem and researching AI security."
      />

      <div className="about-grid">
        <Reveal>
          <GlassCard className="about-card about-story">
            <div className="about-card-pad">
              <p className="about-eyebrow">/whoami</p>
              <p className="about-para">
                Hello! I'm a second-year Electrical &amp; Electronics Engineering student
                turned backend-focused full-stack developer, deeply passionate about
                crafting robust, scalable server-side systems that power seamless user
                experiences.
              </p>
              <p className="about-para">
                Currently specializing in the MERN stack with strong expertise in
                Node.js, Express.js, MongoDB, and React Native integration, I excel at
                building high-performance APIs, optimizing database architecture, and
                implementing RAG-based AI systems.
              </p>
              <p className="about-para">
                My research sits at the intersection of AI and security — I've
                authored two papers in AI security, probing how these systems fail
                and how to defend them. Alongside it, I'm building on the Solana
                ecosystem and contributing to real-world projects that solve
                meaningful problems through clean, efficient code.
              </p>
            </div>
          </GlassCard>
        </Reveal>

        <div className="about-side">
          <Reveal delay={0.08}>
            <GlassCard className="about-card">
              <div className="about-card-pad">
                <p className="about-eyebrow">spec sheet</p>
                <ul className="about-facts">
                  {FACTS.map((fact) => (
                    <li key={fact.k}>
                      <span className="fact-key">{fact.k}</span>
                      <span className={`fact-val ${fact.lit ? 'lit' : ''}`}>{fact.v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="about-highlights">
              {HIGHLIGHTS.map((item) => (
                <div key={item.label} className="about-highlight glass">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d={item.icon} />
                  </svg>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default About;
