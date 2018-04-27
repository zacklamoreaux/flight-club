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
            <Link to='/category/air_jordan'>Air Jordan</Link>
            <Link to='/category/nike'>Nike</Link>
            <Link to='/category/adidas'>Adidas</Link>
            <Link to='/category/yeezy'>Yeezy</Link>
            <Link to='/category/footwear'>Footwear</Link>
            <Link to='/category/apparel'>Apparel</Link>
            <Link to='/category/accessories'>Accessories</Link>
            <Link to='/category/new_arrivals'>New Arrivals</Link>
            <Link to='/category/gift_cards'>Gift Cards</Link>
            <Link to='/category/price_drops'>Price Drops</Link>
          </div>
        </div>
      </div>
    )
  }
}