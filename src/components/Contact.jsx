import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { EMAILJS_CONFIG } from '../config/emailjs.config';
import { RESUME_CONFIG } from '../config/resume.config';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status message when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    // Validate EmailJS configuration
    if (!EMAILJS_CONFIG.PUBLIC_KEY || !EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID) {
      setSubmitStatus({
        type: 'error',
        message: 'Email service not configured. Please check your .env file and ensure all EmailJS variables are set.'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Initialize EmailJS with public key
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        reply_to: formData.email,
      };

      // Send email
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      // Success
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly at imaadityapratap@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/im-apratap", icon: "github" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/imaadityapratap/",
      icon: "linkedin",
    },
    { name: "Twitter", url: "https://x.com/im_apratap", icon: "twitter" },
    { name: "Instagram", url: "https://www.instagram.com/im_apratap", icon: "instagram" },
    { name: "Email", url: "mailto:imaadityapratap@gmail.com", icon: "email" },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">04.</span>
          Get In Touch
        </h2>
        <p className="section-subtitle">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">Let's Connect</h3>
            <p className="contact-info-text">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              feel free to reach out. I'll do my best to get back to you as soon as possible.
            </p>
            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="detail-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>imaadityapratap@gmail.com</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="detail-icon">💼</div>
                <div>
                  <h4>Availability</h4>
                  <p>Open for opportunities</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="detail-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>Bihar, India</p>
                </div>
              </div>
            </div>
            <div className="social-links">
              <h4 className="social-title">Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (social.url === '#') e.preventDefault();
                    }}
                  >
                    {social.icon === 'github' && <FaGithub size={24} />}
                    {social.icon === 'linkedin' && <FaLinkedin size={24} />}
                    {social.icon === 'twitter' && <FaTwitter size={24} />}
                    {social.icon === 'instagram' && <FaInstagram size={24} />}
                    {social.icon === 'email' && <FaEnvelope size={24} />}
                  </a>
                ))}
              </div>
            </div>
            <div className="resume-section">
              <a 
                href={RESUME_CONFIG.RESUME_URL}
                className="resume-download-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter Your Name"
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
                placeholder="Enter Your Email Address"
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
                rows="6"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus.type && (
              <div className={`form-status ${submitStatus.type}`}>
                {submitStatus.type === 'success' ? '✓' : '✗'} {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

