import React, { Component } from 'react'
import axios from 'axios'
import './Header.css'
import {Link} from 'react-router-dom'

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
          <div className='ht-left'>
            <Link to='/'>
              <img src='https://www.flightclub.com/media/vaimo/uploadlogo/default/FC.png' alt='logo' className='logo' />
            </Link>
            <input type='text' className='search-bar' />
          </div>
          <div className='ht-right'>
            <a href={process.env.REACT_APP_LOGIN}>
              <button className='login-btn' onClick={() => this.login()}>login</button>
            </a>
          </div>
        </div>
        <div className='header-bottom'>
          <div className="topnav">
            <Link to='/category/Air%20Jordan'>Air Jordan</Link>
            <Link to='/category/Nike'>Nike</Link>
            <Link to='/category/Adidas'>Adidas</Link>
            <Link to='/category/Yeezy'>Yeezy</Link>
            <Link to='/category/Footwear'>Footwear</Link>
            <Link to='/category/Apparel'>Apparel</Link>
            <Link to='/category/Accessories'>Accessories</Link>
            <Link to='/category/New%20Arrivals'>New Arrivals</Link>
            <Link to='/category/Gift%20Cards'>Gift Cards</Link>
            <Link to='/category/Price%20Drops'>Price Drops</Link>
          </div>
        </div>
      </div>
    )
  }
}