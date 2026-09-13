import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { EMAILJS_CONFIG } from '../config/emailjs.config';
import { RESUME_CONFIG } from '../config/resume.config';
import GlassCard from '../ui/GlassCard';
import Reveal, { SectionHead } from '../ui/Reveal';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    if (!EMAILJS_CONFIG.PUBLIC_KEY || !EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID) {
      setSubmitStatus({
        type: 'error',
        message:
          'Email service not configured. Please check your .env file and ensure all EmailJS variables are set.',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        reply_to: formData.email,
      };

      await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, templateParams);

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! I will get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        type: 'error',
        message:
          'Failed to send message. Please try again or contact me directly at imaadityapratap@gmail.com',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/im-apratap', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/imaadityapratap/', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://x.com/im_apratap', icon: 'twitter' },
    { name: 'Instagram', url: 'https://www.instagram.com/im_apratap', icon: 'instagram' },
    { name: 'Email', url: 'mailto:imaadityapratap@gmail.com', icon: 'email' },
  ];

  return (
    <>
      <section id="contact" className="contact">
        <div className="contact-inner">
          <SectionHead
            eyebrow="Contact"
            title={<>Nothing is upsold. Let's just build.</>}
            description="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions."
          />

          <div className="contact-grid">
            <div className="contact-info">
              <Reveal>
                <div className="contact-channels">
                  <div className="contact-channel glass">
                    <span className="channel-icon" aria-hidden>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="3" />
                        <path d="m22 7-10 6L2 7" />
                      </svg>
                    </span>
                    <div>
                      <p className="channel-label">Email</p>
                      <a href="mailto:imaadityapratap@gmail.com" className="channel-value">
                        imaadityapratap@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="contact-channel glass">
                    <span className="channel-icon" aria-hidden>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 8v4l3 2" />
                      </svg>
                    </span>
                    <div>
                      <p className="channel-label">Availability</p>
                      <p className="channel-value lit">Open for opportunities</p>
                    </div>
                  </div>
                  <div className="contact-channel glass">
                    <span className="channel-icon" aria-hidden>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    <div>
                      <p className="channel-label">Location</p>
                      <p className="channel-value">Bihar, India · remote-friendly</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="contact-socials">
                  <p className="contact-socials-label">Follow me</p>
                  <div className="social-icons">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        className="social-icon glass"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                      >
                        {social.icon === 'github' && <FaGithub size={17} />}
                        {social.icon === 'linkedin' && <FaLinkedin size={17} />}
                        {social.icon === 'twitter' && <FaTwitter size={17} />}
                        {social.icon === 'instagram' && <FaInstagram size={17} />}
                        {social.icon === 'email' && <FaEnvelope size={17} />}
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <a
                  href={RESUME_CONFIG.RESUME_URL}
                  className="btn secondary contact-resume-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeLinecap="round" />
                    <polyline points="7 10 12 15 17 10" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="12" y1="15" x2="12" y2="3" strokeLinecap="round" />
                  </svg>
                  <span>Download Resume</span>
                </a>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <GlassCard className="contact-form-card">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <p className="form-eyebrow">/message — encrypted in transit</p>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Your message here..."
                    />
                  </div>
                  <button type="submit" className="btn primary submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending…' : 'Send Message'}
                  </button>
                  {submitStatus.type ? (
                    <div className={`form-status ${submitStatus.type}`} role="status">
                      {submitStatus.type === 'success' ? '✓' : '✗'} {submitStatus.message}
                    </div>
                  ) : null}
                </form>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src="/hallows_logo.svg" alt="" width="22" height="22" />
                <span>Aaditya Pratap</span>
              </div>
              <p className="footer-tagline">
                Full-stack developer and AI security researcher. MERN, React Native,
                Solana, generative AI — built to scale, shipped to production.
              </p>
              <div className="footer-badges">
                <span className="footer-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2l2.9 6.26L21.5 9.3l-4.75 4.4L17.8 20 12 16.6 6.2 20l1.05-6.3L2.5 9.3l6.6-1.04L12 2z" />
                  </svg>
                  18 public repos
                </span>
                <span className="footer-badge">AI security · 1 pub · 1 in review</span>
                <span className="footer-badge">Open to work</span>
              </div>
            </div>

            <nav className="footer-col" aria-label="Site">
              <p className="footer-col-title">Site</p>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
            </nav>

            <nav className="footer-col" aria-label="Elsewhere">
              <p className="footer-col-title">Elsewhere</p>
              <a href="https://github.com/im-apratap" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/imaadityapratap/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href="https://x.com/im_apratap" target="_blank" rel="noopener noreferrer">
                X / Twitter
              </a>
              <a href="mailto:imaadityapratap@gmail.com">Email</a>
            </nav>
          </div>

          <div className="footer-legal">
            <span>© {new Date().getFullYear()} Aaditya Pratap</span>
            <span>Building on Solana · researching AI security</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
