import React, { Component } from 'react';
import '../main.css';
import NavBar from './NavBar';

class NavigationPanel extends Component {
  onCategorySelect = (filter) => {
    this.props.onMainFilterClick(filter);
  }
  render() {
    return (
      <div className='NavigationPanel'>
        <NavBar onFilterClick={this.onCategorySelect} activeTab={this.props.activeTab}></NavBar>
      </div>
    );
  }
}

export default NavigationPanel;