import React from 'react'
import logo from '../assets/logo.png';
import '../Footer/Footer.css'
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="Bazar Products Logo" className="footer-logo" />
          <h2>Bazar Products</h2>
          <p>Discover a curated selection of high quality products tailored to your needs. At Bazar Products, we strive to bring you the best in fashion, beauty, home essentials, and more.</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Links</h3>
            <Link to="/">Home</Link>
            <Link to="/womens">Women</Link>
            <Link to="/products">Products</Link>
            <Link to="/mens">Men</Link>
            <Link to="/kid">Kids</Link>
          </div>
          <div className="footer-column">
            <h3>Community</h3>
            <Link to="/about">About</Link>
            <Link to="/discord">Discord</Link>
            <Link to="/instagram">Instagram</Link>
            <Link to="/facebook">Facebook</Link>
            <Link to="/twitter">Twitter</Link>
          </div>
          <div className="footer-column">
            <h3>Help</h3>
            <Link to="/contact">Contact</Link>
            <Link to="/faqs">FAQs</Link>
            <Link to="/app">BP App</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright @Bazar Products. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;