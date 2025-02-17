import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h3>Ghar Dekho</h3>
          <p>Your trusted partner in finding the perfect property. We make real estate simple and accessible for everyone.</p>
          <div className="footer__social">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <div className="footer__section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/properties">Properties</a></li>
            <li><a href="/agents">Our Agents</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>

        <div className="footer__section">
          <h4>Contact Info</h4>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>123 Real Estate Avenue, City Name</span>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <span>+1 234 567 8900</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>info@ghardekho.com</span>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h4>Newsletter</h4>
          <p>Subscribe to our newsletter for the latest updates and offers.</p>
          <form className="footer__newsletter">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Ghar Dekho. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;