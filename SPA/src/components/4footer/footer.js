import React, { Component } from 'react';
import './footerStyle.css';
import FooterContent from './FooterContent';

class Footer extends Component {
  render () {
    return (
        <footer>
            <FooterContent></FooterContent>
        </footer>
    );
  }
}

export default Footer;