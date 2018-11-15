import React from 'react';
import './Footer.css';

const Footer = () => {
  return (

    <div className="footer">

        <div className="left">
            <h1>Company</h1>
            <ul>
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
            <h1>Social</h1>
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