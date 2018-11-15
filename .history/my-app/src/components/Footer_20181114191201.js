import React from 'react';
import './Footer.css';

const Footer = () => {
  return (

    <div className="footer">

        <div className="left">
            <ul>
                <span className="company"><li>Company</li></span>
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