import React, { Component } from 'react'
import './OurStores.css'

export default class OurStores extends Component {
  render() {
    return (
      <div className='os-wrapper'>
        <div className='store'>
          LA Store
        </div>
        <div className='store'>
          NYC Store
        </div>
      </div>
    )
  }
}