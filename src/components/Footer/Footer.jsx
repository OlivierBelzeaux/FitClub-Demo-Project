import React from 'react';

// Styles
import './Footer.css';

// Assets
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className='footer-container'>
      <hr />
      <div className='footer'>
        <div className='social-links'>
          <img
            src={github}
            alt='github logo'
          />
          <img
            src={instagram}
            alt='instgram logo'
          />
          <img
            src={linkedin}
            alt='linkedin logo'
          />
        </div>
        <div className='logo-f'>
          <img
            src={logo}
            alt='logo fitclub'
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
