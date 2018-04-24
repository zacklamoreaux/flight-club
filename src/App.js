import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='divider'>

        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
