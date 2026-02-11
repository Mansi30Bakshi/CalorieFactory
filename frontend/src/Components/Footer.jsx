import React from 'react'
import "./Footer.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h3 className='footer-title'>Calorie Factory</h3>
          <p className='footer-description'>
            Your trusted partner in healthy eating and calorie management.
          </p>
        </div>

        <div className='footer-section'>
          <h4 className='footer-subtitle'>Quick Links</h4>
          <ul className='footer-links'>
            <li><a href="/" className='footer-link'>Home</a></li>
            <li><a href="/menu" className='footer-link'>Menu</a></li>
            <li><a href="/about" className='footer-link'>About us</a></li>
            <li><a href="/contact" className='footer-link'>Contact us</a></li>
          </ul>
        </div>

        <div className='footer-section'>
          <h4 className='footer-subtitle'>Contact Info</h4>
          <ul className='footer-contact'>
            <li>390 R, near narayan dutt hospital, Model Town, Panipat, Haryana 132103</li>
            <li>+91 9306305717</li>
            <li>✉️ info@caloriefactory.com</li>
          </ul>
        </div>

        <div className='footer-section'>
          <h4 className='footer-subtitle'>Follow Us</h4>
          <div className='social-links'>
          <a href="https://www.instagram.com/calorie_factory/" className='social-link' target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>  
  </a>
          </div>
        </div>
      </div>
      
      <div className='footer-bottom'>
        <p>&copy; {currentYear} Calorie Factory. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer