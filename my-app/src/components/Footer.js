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
                <a href="https://www.google.com"><li>About</li></a>
                <a href="https://www.google.com"><li>Contact</li></a>
                <a href="https://www.google.com"><li>Press</li></a>
                <a href="https://www.google.com"><li>Media</li></a>
                <a href="https://www.google.com"><li>Careers</li></a>
                <a href="https://www.google.com"><li>Our Team</li></a>
                <a href="https://www.google.com"><li>Privacy Policy</li></a>
                <a href="https://www.google.com"><li>Terms of Use</li></a>
            </ul>
        </div>

        <div className="right">
            <ul>
                <span className="footer-title"><li><strong>Social</strong></li></span>
                <a href="https://www.google.com"><li>Twitter</li></a>
                <a href="https://www.linkedin.com/in/haley-sulcer"><li>LinkedIn</li></a>
                <a href="https://www.google.com"><li>Facebook</li></a>
                <a href="https://www.instagram.com/hjsulcer"><li>Instagram</li></a>
            </ul>
        </div>

        <span className="copy">Copyright &copy; 2018 Ipsum. All rights reserved.</span>

    </div>
  );
}

export default Footer;