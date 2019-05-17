import React, { Component } from 'react';
import './headerStyle.css';
import Logo from './Logo';

class Header extends Component {
  render () {
    return (
      <header>
        <Logo></Logo>
      </header>
    );
  }
}

export default Header;