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
          <Link to='/category/Men'>
          <div className='box'>
            <img src='https://www.flightclub.com/media/wysiwyg/home/Men_801781_1_Resized.jpg' alt='pic' className='img' />
            <br />
            <p>MEN</p>
          </div>
          </Link>
          <Link to='/category/Women'>
            <div className='box'>
              <img src='https://www.flightclub.com/media/wysiwyg/home/Women_802113_1_Resized_1.jpg' alt='pic' className='img' />
              <br />
              <p>WOMEN</p>
            </div>
          </Link>
          <Link to='/category/Kids'>
            <div className='box'>
              <img src='https://www.flightclub.com/media/wysiwyg/home/Kids_012603_1_Resized.jpg' alt='pic' className='img' />
              <br />
              <p>KIDS</p>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}