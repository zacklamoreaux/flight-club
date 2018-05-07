import React, { Component } from 'react'
import './FindYourPair.css'
import { Link } from 'react-router-dom'

export default class FindYourPair extends Component {
  render() {
    return (
      <div className='fyp-wrapper'>
      <div>
        <h1 className='title'>FIND YOUR PAIR</h1>
      </div>
          <br />
        <div className='links'>
        <Link to='/category/Men'>
          <div className='fyp'>Men</div>
        </Link>
          <div className='fyp'>Women</div>
          <div className='fyp'>Kids</div>
        </div>
      </div>
    )
  }
}