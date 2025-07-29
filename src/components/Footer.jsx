import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-column footer-brand">
          <h2>Raju Welding Shop</h2>
          <p>Strong Designs, Stronger Trust</p>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>
          <p><FaPhoneAlt /> 98494 99223</p>
          <p><FaPhoneAlt /> 77025 54582</p>
          <a href="https://wa.me/919849499223" target="_blank" rel="noreferrer">
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>

        <div className="footer-column footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#designs">Designs</a></li>
            <li><a href="#works">Works</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Raju Welding Shop | All Rights Reserved</p>
      </div>

      <button className="footer-scroll-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
