import React from 'react';
import Copyright from './Copyright';
import '../css/GetInTouch.css';

export default function GetInTouch() {
  return (
    <div className='get-in-touch-container'>
        <h2 className='section-text get-in-touch-heading'>Get in Touch</h2>
        <p className='heading-underline'></p>
        <p className='section-text'>Feel free to get in touch and learn more around Master Site</p>
        <a href='./GetInTouch.js' className='section-text get-in-touch-cta'>Contact Us</a>
        <Copyright />
    </div>
  )
}
