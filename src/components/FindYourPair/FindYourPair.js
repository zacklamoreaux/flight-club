import React, { Component } from 'react'
import './FindYourPair.css'
import { Link } from 'react-router-dom'

export default class FindYourPair extends Component {
  render() {
    return (
      <div className='fyp-wrapper'>
        <div className='title'>
          <h1>FIND YOUR PAIR</h1>
        </div>
        <div className='boxes'>
          {/* <Link to='/category/Men'> */}
          <div className='box'>
            <div className='img-wrapper'>
              <img src='https://www.flightclub.com/media/wysiwyg/home/Men_801781_1_Resized.jpg' alt='pic' className='img' />
              <br />
              <h2>MEN</h2>
            </div>
          </div>
          {/* </Link> */}
          <div className='box'>
          <div className='img-wrapper'>
              <img src='https://www.flightclub.com/media/wysiwyg/home/Women_802113_1_Resized_1.jpg' alt='pic' className='img' />
              <br />
              <h2>WOMEN</h2>
            </div>
          </div>
          <div className='box'>
          <div className='img-wrapper'>
              <img src='https://www.flightclub.com/media/wysiwyg/home/Kids_012603_1_Resized.jpg' alt='pic' className='img' />
              <br />
              <h2>KIDS</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}