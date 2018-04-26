import React, { Component } from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';
import Home from './components/Home/Home';
import router from './router'


class App extends Component {
  render() {
    return (
      <div>
        {router}
      </div>
    );
  }
}

export default App;
