import React, { Component } from 'react'
import axios from 'axios'
import './Header.css'

export default class Header extends Component {
  login() {
    axios.get('/auth')
  }
  getBrand() {
    axios.get('/clone/:brand')
  }
  render() {
    return (
      <div>
        <div className='header-top'>
          <div className='logo-wrapper'>
            <img src='https://www.flightclub.com/media/vaimo/uploadlogo/default/FC.png' alt='logo'/>
          </div>
          <div>
            <input type='text' className='search-bar' />
          </div>
          <div>
            <a href={process.env.REACT_APP_LOGIN}>
              <button className='login-btn' onClick={() => this.login()}>login</button>
            </a>
          </div>
        </div>
        <div className='header-bottom'>
          <div className="topnav">
            <a href="#air-jordan" onClick={() => this.getBrand()}>Air Jordan</a>
            <a href="#nike">Nike</a>
            <a href="#adidas">Adidas</a>
            <a href='#yeezy'>Yeezy</a>
            <a href='#footwear'>Footwear</a>
            <a href='#apparel'>Apparel</a>
            <a href='#accessories'>Accessories</a>
            <a href='#new-arrivals'>New Arrivals</a>
            <a href='#gift-cards'>Gift Cards</a>
            <a href='#price-drops'>Price Drops</a>
          </div>
        </div>
      </div>
    )
  }
}