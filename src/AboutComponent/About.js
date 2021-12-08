import React from 'react';
import './About.css';

class AboutComponent extends React.Component {
  render() {
    return (
        <img
          src={require('../res/Saarang-gif.gif')}
          id="logo"
          alt="Saarang '22 - Lores & Legacies"
          className="logocenter"
        />
    );
  }
}

export default AboutComponent;