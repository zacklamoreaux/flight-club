import React, { Component } from 'react'
import axios from 'axios';
import './Card.css'

export default class Card extends Component {
  constructor() {
    super() 

    this.state = {
      img: '',
      brand: '',
      model: '',
      name: '',
      price: ''
    }
  }

  componentDidMount() {
    console.log(this.props)
    this.getProduct()
  }

  getProduct() {
    axios.get(`/clone/product/${this.props.id}`).then(res => {
      const { imgurl, brand, model, name, price } = res.data
      this.setState({
        img: imgurl,
        brand: brand,
        model: model,
        name: name,
        price: price
      })
    })
    .catch(console.error)
  }

  render() {
    return (
      <div className='card'>
        <div className='img-wrapper'>
          <img className='img' src={this.state.img} alt='shoe' />
        </div>  
        <div className='prod-info'>
          {this.state.brand}
          {this.state.model}
          {this.state.name}
          {this.state.price}
        </div>
      </div>
    )
  }
}