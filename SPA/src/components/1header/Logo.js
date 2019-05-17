import React, { Component } from 'react';
import './headerStyle.css';
import logo from './logo.png';

class Logo extends Component {
  render() {
    return (
      <div className='logo'>
        <img src={logo} alt="Logo" height="50px" width="200px" />
      </div>
    );
  }
}

export default Logo;

