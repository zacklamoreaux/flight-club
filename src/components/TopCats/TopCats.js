import React, { Component } from 'react'
import './TopCats.css'

export default class TopCats extends Component {
  render() {
    return (
      <div className='tc-wrapper'>
      {/* <h1>TOP CATEGORIES</h1>     */}
        <div className='box'>
          <img src='https://www.flightclub.com/media/wysiwyg/home/Air_Jordan_800564_1_Resized.jpg' alt='' className='img' />
          <p>Air Jordans</p>
        </div>
        <div className='box'>
          <img src='https://www.flightclub.com/media/wysiwyg/home/NMD_800255_1_Resized_1.jpg' alt='' className='img' />
          <p>NMD</p>
        </div>
        <div className='box'>
          <img src='https://www.flightclub.com/media/wysiwyg/home/Adidas_Yeezy_Resized_1.jpg' alt='' className='img' />
          <p>Yeezy</p>
        </div>
        <div className='box'>
          <img src='https://www.flightclub.com/media/wysiwyg/home/Ultra_Boost_800247_1_Resized_1.jpg' alt='' className='img' />
          <p>Ultra Boost</p>
        </div>
        <div className='box'>
          <img src='https://www.flightclub.com/media/wysiwyg/home/Nike_Basketball_801114_1_Resized_1.jpg' alt='' className='img' />
          <p>Nike Basketball</p>
        </div>
        <div className='box'>
          <img src='https://www.flightclub.com/media/wysiwyg/home/Nike_Running_801821_1_Resized_1.jpg' alt='' className='img' />
          <p>Nike Running</p>
        </div>
      </div>
    )
  }
}