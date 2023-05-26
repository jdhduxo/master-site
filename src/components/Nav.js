import React from 'react';
import MasterSiteLogo from '../assets/master-site-logo.png';
import '../css/Nav.css';

const ScrollToIntro = e => { 
  e.preventDefault();
  window.scrollTo(0,880);
};

const ScrollToTechStack = e => {
  e.preventDefault();
  window.scrollTo(0,1700);
}

const ScrollToGetIntouch = e => {
  e.preventDefault();
  window.scrollTo(0,2580);
}

export default function Header() {
  return (
    <div className='nav'>
      <div className='nav-container'>
          <div className='nav-logo-container'>
              <img src={MasterSiteLogo} alt='Master Site Logo' className='nav-logo'/>
          </div>
          <div className='nav-cta-container'>
              <a href='./Header' className='nav-cta intro-cta' onClick={ScrollToIntro}>What is Master Site?</a>
              <a href='./Header' className='nav-cta technology-stack-cta' onClick={ScrollToTechStack}>Technology Stack</a>
              <a href='./Header' className='nav-cta get-in-touch-cta' onClick={ScrollToGetIntouch}>Get in Touch</a>
          </div>
      </div>
    </div>
  );
}
