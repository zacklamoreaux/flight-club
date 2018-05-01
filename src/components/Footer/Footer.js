import React, { Component } from 'react';
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer-wrapper'>
        <div className='footer-logo'>
          <img src='https://www.flightclub.com/media/vaimo/uploadlogo/default/FC.png' className='logo' alt='logo'/>
        </div>
        <div className='footer-top'>
          <div>
            CONTACT CUSTOMER CARE
          </div>
          <div>
            @FLIGHTCLUB
          </div>
          <div>
            FLIGHTCLUB NEWSLETTER
          </div>
        </div>
        <div className='footer-bottom'>
          <div>
            CUSTOMER SERVICE
          </div>
          <div>
            ABOUT FLIGHT CLUB
          </div>
          <div>
            TOP CATEGORIES
          </div>
          <div>
            FIND US
          </div>
        </div>
      </div>
    )
  }
}