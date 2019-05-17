import React, { Component } from 'react';
import './bookStyle.css';

class BookCover extends Component{
  render() {
    return (
      <div className='BookCover'>
        <img src={require('../booksImgs/'+this.props.img)} alt="img"/>
      </div>
    );
  }
}

export default BookCover;