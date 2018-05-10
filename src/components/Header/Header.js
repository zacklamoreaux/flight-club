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
            <input placeholder='Search' type='text' className='search-bar' />
          </div>
          <div className='ht-right'>
          <button type='dropbtn'>$ USD</button>
            <a href={process.env.REACT_APP_LOGIN}>
              <button className='login-btn' onClick={() => this.login()}>login</button>
            </a>
          <Link to='/cart'><button>Cart</button></Link>
          </div>
        </div>
        <div className='header-bottom'>
          <div className="topnav">
            <Link to='/category/Air Jordan'>AIR JORDAN</Link>
            <Link to='/category/Nike'>NIKE</Link>
            <Link to='/category/Adidas'>ADIDAS</Link>
            <Link to='/category/Yeezy'>YEEZY</Link>
            <Link to='/category/Footwear'>FOOTWEAR</Link>
            <Link to='/category/Apparel'>APPAREL</Link>
            <Link to='/category/Accessories'>ACCESSORIES</Link>
            <Link to='/category/New Arrivals'>NEW ARRIVALS</Link>
            <Link to='/category/Gift Cards'>GIFT CARDS</Link>
            <Link to='/category/Price Drops'>PRICE DROPS</Link>
          </div>
        </div>
      </div>
    )
  }
}