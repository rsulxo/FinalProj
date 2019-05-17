import React, { Component } from 'react';
import './App.css';
import Header from './components/1header/Header';
import Main from './components/3main/Main';
import Footer from './components/4footer/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}
 
export default App;
