import React, { Component } from 'react'
import './TopCats.css'

export default class TopCats extends Component {
  render() {
    return (
      <div className='tc-wrapper'>        
        <div className='tc'>Air Jordan</div>
        <div className='tc'>NMD</div>
        <div className='tc'>Yeezy</div>        
        <div className='tc'>Ultra Boost</div>
        <div className='tc'>Nike Basketball</div>
        <div className='tc'>Nike Running</div>
      </div>
    )
  }
}