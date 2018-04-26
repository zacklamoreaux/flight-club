import React, { Component } from 'react'
import Card from '../Card/Card' 
import './Display.css'

export default class Display extends Component {
  render() {
    return (
      <div className='display'>
        <Card id={1}/>
        <Card id={2}/>
        <Card id={3}/>
        <Card id={4}/>
        <Card id={5}/>
      </div>
    )
  }
}