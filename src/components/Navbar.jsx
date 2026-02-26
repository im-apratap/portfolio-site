import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
            Aaditya Pratap
          </a>
        </div>
        <div className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
            Home
          </a>
          <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
            About
          </a>
          <a href="#skills" onClick={(e) => handleNavClick(e, "skills")}>
            Skills
          </a>
          <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>
            Projects
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
            Contact
          </a>
        </div>
        <div className="nav-actions">
          <div
            className={`nav-toggle ${isMobileMenuOpen ? "active" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
