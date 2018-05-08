import React, { Component } from 'react'
import axios from 'axios'
import Card from '../Card/Card' 
import './Display.css'
import { Link } from 'react-router-dom'

export default class Display extends Component {
  render() {
    // console.log(this.props.products)
    let display = this.props.products.map( (prod, i) => {
      return <Link key={i} to={`/individual/${prod.id}`}><Card item={prod} /></Link>
      console.log(prod)
      // console.log(prod.id)
    })
    return (
      <div className='display-wrapper'>
        <div className='display'>
          {display}
        </div>
        {/* {console.log(display)} */}
      </div>
    )
  }
}