import React, { Component } from 'react';
import './footerStyle.css';

class FooterContent extends Component {
  render () {
    return (
<footer className="footer">
  <div className="footer-left col-md-4 col-sm-6">
    <p className="about">
      <span> About the company</span> 
      BookShelf is an online book store which has books ranging from all genres and for all ages.
    </p>
  </div>
  <div className="footer-center col-md-4 col-sm-6">
    <div>
      <i className="fa fa-map-marker"></i>
      <p><span> Goldsmiths, University of London</span> London, United Kingdom</p>
    </div>
    <div>
      <i className="fa fa-phone"></i>
      <p> (+44) 0208 123 4567</p>
    </div>
    <div>
      <i className="fa fa-envelope"></i>
      <p><a href=""> rsule002@gold.ac.uk</a></p>
    </div>
  </div>
  <div className="footer-right col-md-4 col-sm-6">
    <h2> BookShelf - 2019</h2>
  </div>
</footer>
    );

  }

}

export default FooterContent;
