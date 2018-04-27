import React, { Component } from 'react'
import axios from 'axios'
import Card from '../Card/Card' 
import './Display.css'

export default class Display extends Component {
  constructor() {
    super() 

    this.state = {

    }
  }
  componentDidMount() {

  }

  render() {
    return (
      <div className='display'>
        <Card id={9}/>
      </div>
    )
  }
}