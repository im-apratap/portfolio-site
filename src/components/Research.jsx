import GlassCard from '../ui/GlassCard';
import Reveal, { SectionHead } from '../ui/Reveal';
import './Research.css';

const PAPERS = [
  {
    arxivId: '2602.22242',
    title: 'Analysis of LLMs Against Prompt Injection and Jailbreak Attacks',
    status: 'published',
    statusLabel: 'Published',
    venue: 'LM-SHIELD · ACM AsiaCCS 2026',
    date: 'Jun 2026',
    abstract:
      'An empirical vulnerability study across 10 open-source LLMs — Phi, Mistral, DeepSeek-R1, Llama 3.2, Qwen and Gemma variants — using a large, manually curated dataset of 94 prompt-injection and 73 jailbreak scenarios. Five lightweight inference-time defences mitigate straightforward attacks, but are consistently bypassed by long, reasoning-heavy prompts.',
    authors: [
      { name: 'Piyush Jaiswal', me: false, star: true },
      { name: 'Aaditya Pratap', me: true, star: true },
      { name: 'Shreyansh Saraswati' },
      { name: 'Harsh Kasyap' },
      { name: 'Somanath Tripathy' },
    ],
    authorsNote: '*equal contribution',
    stats: [
      { value: '10', label: 'models evaluated' },
      { value: '167', label: 'attack scenarios' },
      { value: '5', label: 'defences tested' },
    ],
    topics: ['Prompt Injection', 'Inference-Time Defence', 'LLM Safety'],
    primaryLabel: 'ACM DL',
    primaryHref: 'https://dl.acm.org/doi/10.1145/3803628.3807972',
    pdf: 'https://arxiv.org/pdf/2602.22242',
    abs: 'https://arxiv.org/abs/2602.22242',
  },
  {
    arxivId: '2608.21895',
    title:
      'Breaking the Assumptions: Auditing Input-Side Jailbreak Defenses Against Semantic Attacks',
    status: 'review',
    statusLabel: 'Under review',
    venue: 'AsiaCCS 2027',
    date: 'Aug 2026',
    abstract:
      'An audit of six input-side jailbreak defenses on locally deployed LLMs. For each defense — from SmoothLLM to perplexity filtering — we extract the assumption it relies on, derive the failure signature a violation should produce, and test that prediction on six open-weight models (14B–35B) with 100 semantic jailbreak prompts from 40+ public sources, totalling 13,800 evaluation records.',
    authors: [
      { name: 'Aaditya Pratap', me: true },
      { name: 'Harsh Kasyap' },
      { name: 'Somanath Tripathy' },
    ],
    authorsNote: null,
    stats: [
      { value: '6', label: 'defenses audited' },
      { value: '6', label: 'open-weight models' },
      { value: '13.8k', label: 'evaluation records' },
    ],
    topics: ['Semantic Jailbreaks', 'Certified Robustness', 'Defense Auditing'],
    primaryLabel: 'Read PDF',
    primaryHref: 'https://arxiv.org/pdf/2608.21895',
    pdf: null,
    abs: 'https://arxiv.org/abs/2608.21895',
  },
];

const Research = () => (
  <section id="research" className="research">
    <div className="research-inner">
      <SectionHead
        eyebrow="Research"
        title={<>Published, not just pushed.</>}
        description="Two papers in AI security — how LLMs fail under adversarial prompts, and why the defences built to stop it don't."
      />

      <div className="pub-stream">
        {PAPERS.map((paper, index) => (
          <Reveal key={paper.arxivId} delay={index * 0.06}>
            <article className="pub-row">
              <div className="pub-rail" aria-hidden>
                <span className="pub-node" />
              </div>
              <GlassCard className="pub-card">
                <div className="pub-pad">
                  <div className="pub-top">
                    <div className="pub-id">
                      <span className={`pub-status ${paper.status}`}>{paper.statusLabel}</span>
                      <span className="pub-venue">{paper.venue}</span>
                      <span className="pub-date">{paper.date}</span>
                    </div>
                    <span className="pub-arxiv">arXiv:{paper.arxivId}</span>
                  </div>

                  <h3 className="pub-title">{paper.title}</h3>

                  <p className="pub-authors">
                    {paper.authors.map((author, i) => (
                      <span key={author.name}>
                        {i > 0 ? <span className="pub-author-sep"> · </span> : null}
                        <span className={`pub-author ${author.me ? 'me' : ''}`}>
                          {author.name}
                          {author.star ? '*' : ''}
                        </span>
                      </span>
                    ))}
                    {paper.authorsNote ? (
                      <span className="pub-authors-note"> — {paper.authorsNote}</span>
                    ) : null}
                  </p>

                  <p className="pub-abstract">{paper.abstract}</p>

                  <div className="pub-stats">
                    {paper.stats.map((stat) => (
                      <span key={stat.label} className="pub-stat">
                        <span className="pub-stat-value tnum">{stat.value}</span>
                        <span className="pub-stat-label">{stat.label}</span>
                      </span>
                    ))}
                  </div>

                  <div className="pub-topics">
                    {paper.topics.map((topic) => (
                      <span key={topic} className="pub-chip">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="pub-actions">
                    <a
                      href={paper.primaryHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pub-link primary"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden
                      >
                        <path
                          d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{paper.primaryLabel}</span>
                    </a>
                    <a
                      href={paper.abs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pub-link secondary"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Cite on arXiv</span>
                    </a>
                  </div>
                </div>
              </GlassCard>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Research;
