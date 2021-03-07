import React from 'react';
import '../App.css';
import { Button } from './Button';

import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='https://www.youtube.com/watch?v=VTH1zCgC1kI' autoPlay loop muted />
      <h1>Nature awaits</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
      <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Learn more
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH VIDEO <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;