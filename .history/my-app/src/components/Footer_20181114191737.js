import React from 'react';
import './Footer.css';

const Footer = () => {
  return (

    <div className="footer">

        <div className="left">
            <ul>
                <span className="footer-title"><li><strong>Company</strong></li></span>
                <a><li>About</li></a>
                <a><li>Contact</li></a>
                <a><li>Press</li></a>
                <a><li>Media</li></a>
                <a><li>Careers</li></a>
                <a><li>Our Team</li></a>
                <a><li>Privacy Policy</li></a>
                <a><li>Terms of Use</li></a>
            </ul>
        </div>

        <div className="right">
            <ul>
                <span className="footer-title"><li><strong>Social</strong></li></span>
                <a><li>Twitter</li></a>
                <a><li>LinkedIn</li></a>
                <a><li>Facebook</li></a>
                <a><li>Instagram</li></a>
            </ul>
        </div>

    </div>
  );
}

export default Footer;