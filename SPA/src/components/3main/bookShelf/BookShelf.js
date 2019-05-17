import React, { Component } from 'react';
import '../main.css';
import NavigationPanel from './NavigationPanel';
import Books from './Books';
import bookInfo from '../../../books.json';
const R = require('ramda');

const getFirstItem = R.pipe(
  R.pathOr(null, ['store']),
  R.defaultTo('fiction'),
  R.head,
  R.propOr('fiction', 'category'),
);

class BookShelf extends Component {
  constructor(props) {
    super(props);
		this.state = {
			activeFilter: getFirstItem(bookInfo),
		};
	}
  
  onFilterChange = (filter) => {
    this.setState({activeFilter: filter});
  }
  render() {
    let currentBooks = [];
    for (let i=0; i<bookInfo.store.length; i++) {
      if (bookInfo.store[i].category === this.state.activeFilter) {
        currentBooks = bookInfo.store[i].books;
        break;
      }
    }
    return (
      <div className='BookShelf'>
        <NavigationPanel onMainFilterClick={this.onFilterChange} activeTab={this.state.activeFilter}></NavigationPanel>
        <Books books={currentBooks}></Books>
      </div>
    );
  }
}

export default BookShelf;