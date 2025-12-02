import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
import logo from "../assets/HeaderLogo.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleNavClick = (section) => {
    setMenuOpen(false);
    if (!isHome) {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
          offset: -80,
        });
      }, 100);
    }
  };

  const NavItem = ({ to, children }) => {
    if (isHome) {
      return (
        <ScrollLink
          to={to}
          smooth={true}
          duration={500}
          offset={-80}
          onClick={() => setMenuOpen(false)}
          style={{ cursor: "pointer" }}
        >
          {children}
        </ScrollLink>
      );
    }
    return (
      <span
        onClick={() => handleNavClick(to)}
        style={{ cursor: "pointer" }}
      >
        {children}
      </span>
    );
  };

  return (
    <nav className="glass-nav">
      <div className="nav-container">

        {/* LEFT - LOGO */}
        <div className="nav-left">
          <div onClick={() => handleNavClick("home")} style={{ cursor: "pointer" }}>
            <img src={logo} className="nav-logo" alt="logo" />
          </div>
        </div>

        {/* HAMBURGER (mobile) */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* RIGHT - LINKS */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><NavItem to="home">Home</NavItem></li>
          <li><NavItem to="about">About Us</NavItem></li>
          <li><NavItem to="gallery">Gallery</NavItem></li>
          <li><NavItem to="community">Community</NavItem></li>
          <li><NavItem to="blog">Blog</NavItem></li>
          <li><NavItem to="contact">Get In Touch</NavItem></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
