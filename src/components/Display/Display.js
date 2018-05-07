import React, { Component } from 'react'
import axios from 'axios'
import Card from '../Card/Card' 
import './Display.css'
import { Link } from 'react-router-dom'

export default class Display extends Component {
  render() {
    console.log(this.props.products)
    let display = this.props.products.map( (prod, i) => {
      <Card key={i} id={prod.id} />
      // console.log(prod.id)
    })
    return (
      <div>
        <Card id='10' />
        {display}
        {console.log(display)}
      </div>
    )
  }
}