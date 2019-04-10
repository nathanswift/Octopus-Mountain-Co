import React from 'react';
import OmLogo from '../assets/images/OmLogo.svg';
import './LoadingWave.css';

const LoadingWave = () => (
  <div className="lds-ripple">
    <img src={OmLogo} className="OmLogo" alt="OmLogo" />
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
);

export default LoadingWave;
