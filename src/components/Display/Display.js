import React, { Component } from 'react'
import axios from 'axios'
import Card from '../Card/Card' 
import './Display.css'
import { Link } from 'react-router-dom'

export default class Display extends Component {
  constructor() {
    super() 

    this.state = {

    }
  }
  componentDidMount() {

  }

  render() {
    console.log(this.props.products)
    return (
      <div className='display'>
        <Link to='/individual/10'>
          <Card id={10}/>
        </Link>
      </div>
    )
  }
}