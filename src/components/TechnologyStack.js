import React from 'react';
import '../css/TechnologyStack.css';
import HTMLLogo from '../assets/html-logo.png';
import CSSLogo from '../assets/css-logo.png';
import JSLogo from '../assets/js-logo.png';
import SASSLogo from '../assets/sass-logo.png';
import JQUERYLogo from '../assets/jquery-logo.png';
import SmartyLogo from '../assets/smarty-logo.png';
import PHPLogo from '../assets/php-logo.png';
import AWSLogo from '../assets/aws-logo.png';

export default function TechnologyStack() {
  return (
    <div className='technology-stack-container'>
        <h2 className='section-text technology-stack-heading'>Technology Stack</h2>
        <p className='heading-underline'></p>
        <div className='technology-stack-cta-container'>
            <a href='./TechnologyStack.js'><img src={HTMLLogo} alt='HTML Logo' className='technology-stack-cta html-logo'/></a>
            <a href='./TechnologyStack.js'><img src={CSSLogo} alt='CSS Logo' className='technology-stack-cta css-logo'/></a>
            <a href='./TechnologyStack.js'><img src={JSLogo} alt='JS Logo' className='technology-stack-cta js-logo'/></a>
            <a href='./TechnologyStack.js'><img src={SASSLogo} alt='Sass Logo' className='technology-stack-cta sass-logo'/></a>
            <a href='./TechnologyStack.js'><img src={JQUERYLogo} alt='jQuery Logo' className='technology-stack-cta jquery-logo'/></a>
            <a href='./TechnologyStack.js'><img src={SmartyLogo} alt='Smarty Logo' className='technology-stack-cta smarty-logo'/></a>
            <a href='./TechnologyStack.js'><img src={PHPLogo} alt='PHP Logo' className='technology-stack-cta php-logo'/></a>
            <a href='./TechnologyStack.js'><img src={AWSLogo} alt='AWS Logo' className='technology-stack-cta aws-logo'/></a>
        </div>
    </div>
  )
}
