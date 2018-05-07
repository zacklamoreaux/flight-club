import React, { Component } from 'react'
import './OurStores.css'

export default class OurStores extends Component {
  render() {
    return (
      <div className='os-wrapper'>
        <div className='la-store'>
          LA Store
        </div>
        <div className='ny-store'>
          NYC Store
        </div>
      </div>
    )
  }
}