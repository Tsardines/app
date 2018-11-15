import React from 'react';
import './Footer.css';

const Footer = () => {
  return (

    <div className="footer">

        <div className="left">
            <ul>
                <span className="footer-title"><li>Company</li></span>
                <li>About</li>
                <li>Contact</li>
                <li>Press</li>
                <li>Media</li>
                <li>Careers</li>
                <li>Our Team</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
            </ul>
        </div>

        <div className="right">
            <ul>
                <span className="footer-title"><li>Social</li></span>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>Instagram</li>
            </ul>
        </div>

    </div>
  );
}

export default Footer;