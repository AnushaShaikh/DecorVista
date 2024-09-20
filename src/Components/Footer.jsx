import React from 'react';
import './Footer.css'; // Make sure to keep the CSS styling
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>DecorVista</h2>
          <p>
            Etiam consequat sem ullamcorper, euismod metus sit amet, tristique justo.
            
          </p>
          <p className="footer-phone">
            <a href="tel:05506803412">0 (550) 680-34-12</a>
            <br />
            Round-the-clock
          </p>
          <div className="footer-social-icons">
            {/* Replace "#" with your actual social media links */}
            <a href="#" aria-label="Twitter" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Facebook" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="social-icon">
              <FaInstagram />
            </a>
            <a href="#" aria-label="YouTube" className="social-icon">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <ul>
            <li><a href="#">Interior Design</a></li>
            <li><a href="#">Design Agency</a></li>
            <li><a href="#">Mattress Shop</a></li>
            <li><a href="#">Our Products</a></li>
          </ul>
        </div>

        <div className="footer-posts">
          <h3>Latest Posts</h3>
          <ul>
            <li><a href="#">Articles</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Clients</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© All Rights Reserved - DecorVista 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
