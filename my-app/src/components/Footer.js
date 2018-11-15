import React from 'react';
import './Footer.css';
import beaker from './beaker.png';

const Footer = () => {
  return (

    <div className="footer">

    {/* <img src={beaker} alt="beaker" className="beaker"></img> */}
   
        <div className="left">
            <ul>
                <span className="footer-title"><li><strong>Company</strong></li></span>
                <a href="#"><li>About</li></a>
                <a href="#"><li>Contact</li></a>
                <a href="#"><li>Press</li></a>
                <a href="#"><li>Media</li></a>
                <a href="#"><li>Careers</li></a>
                <a href="#"><li>Our Team</li></a>
                <a href="#"><li>Privacy Policy</li></a>
                <a href="#"><li>Terms of Use</li></a>
            </ul>
        </div>

        <div className="right">
            <ul>
                <span className="footer-title"><li><strong>Social</strong></li></span>
                <a href="#"><li>Twitter</li></a>
                <a href="#"><li>LinkedIn</li></a>
                <a href="#"><li>Facebook</li></a>
                <a href="#"><li>Instagram</li></a>
            </ul>
        </div>

        <span className="copy">Copyright &copy; 2018 Ipsum. All rights reserved.</span>

    </div>
  );
}

export default Footer;