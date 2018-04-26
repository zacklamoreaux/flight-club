import React, { Component } from 'react'
import Card from '../Card/Card'
import './FindYourPair.css'

export default class FindYourPair extends Component {
  render() {
    return (
      <div className='fyp-wrapper'>
        <div className='fyp'>Men</div>
        <div className='fyp'>Women</div>
        <div className='fyp'>Kids</div>
      </div>
    )
  }
}