import React, { Component } from 'react'
import './Card.css'

export default class Card extends Component {

  render() {
    let { imgurl, brand, model, name, price} = this.props.item
    return (
      <div className='card'>
        <div className='img-wrapper'>
          <img className='img' src={imgurl} alt='shoe' />
        </div>  
        <div className='prod-info'>
          {brand}
          <br/>
          <br/>
          {model} {name}
          <br/>
          <br/>
          ${price}
        </div>
      </div>
    )
  }
}