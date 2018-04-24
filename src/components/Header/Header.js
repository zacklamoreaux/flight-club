import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className='top'>
          <img src='https://www.flightclub.com/media/vaimo/uploadlogo/default/FC.png' alt='logo'/>
          <input type='text' />
        </div>
        <div className='bottom'>

        </div>
      </div>
    )
  }
}