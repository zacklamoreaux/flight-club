import React, { Component } from 'react'
import './Filter.css'

export default class Filter extends Component {
  render() {
    return (
      <div className='filter'>
        Filter
        <br />
        <button type='dropbtn'>Model</button>
        <br />
        <button>Year</button>
        <br />
        <button>US Size</button>
        <br />
        <button>Color</button>
        <br />
        <button>Price</button>
      </div>
    )
  }
}
