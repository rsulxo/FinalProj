import React, { Component } from 'react';
import BookShelf from './bookShelf/BookShelf';
import ReactGA from 'react-ga';
import ttiPolyfill from 'tti-polyfill';


class Main extends Component {
  render() {

    ReactGA.initialize('UA-140139356-1', {
      debug: true,
      titleCase: false
    }); // Here we should use our GA id
    ReactGA.pageview('/homepage');
    ttiPolyfill.getFirstConsistentlyInteractive().then((tti) => {
      ReactGA.event({
        category: 'Performance Metrics',
        action: 'TTI',
        value: tti,
        nonInteraction: true
      });
      // Use `tti` value in some way.
      console.log(tti);
    })
    return (
      <div className='Main'>
        <BookShelf></BookShelf>
      </div>
    );
  }
}

export default Main;