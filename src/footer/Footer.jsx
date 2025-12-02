import { useState } from 'react';
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/headerLogo.png';
import './Footer.css'; // Custom CSS

const Footer = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleLinkClick = () => {

        setMenuOpen(false);

    };

    return (
        <footer className="footer">
            <div className="footer-content container">
                <div className="footer-section about">
                    <img src={logo} alt="Arekatika Logo" className="footer-logo" />

                    <div className="socials">
                        <a href="https://www.linkedin.com" aria-label="LinkedIn" className="social-icon"><Linkedin /></a>
                        <a href="https://x.com/" aria-label="Twitter" className="social-icon"><Twitter /></a>
                        <a href="https://www.facebook.com" aria-label="Facebook" className="social-icon"><Facebook /></a>
                        <a href="https://www.instagram.com" aria-label="Instagram" className="social-icon"><Instagram /></a>
                    </div>
                </div>

                <div className="footer-section services">
                    <h3>Legal</h3>
                    <ul>
                        <li><Link to="/cancellation">CancellationsRefunds</Link></li>
                        <li><Link to="/privacy">PrivacyPolicy</Link></li>
                        <li><Link to="/shipping">ShippingPolicy</Link></li>
                        <li><Link to="/terms">TermsConditions</Link></li>

                    </ul>
                </div>




                <div className="footer-section contact">
                    <h3>Contact Info</h3>
                    <p><MapPin className="icon" />  Arekatika Meat Udyog Ltd, 4-6-238/A, Esamia Bazar, Koti, Hyderabad - 500027 </p>
                    <p><Phone className="icon" /> +91-9603331555</p>
                    <p><Mail className="icon" /> care@arekatikameat.com</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Arekatika Meat Udyog Ltd. All rights reserved.</p>

            </div>
        </footer>
    );
};

export default Footer;
