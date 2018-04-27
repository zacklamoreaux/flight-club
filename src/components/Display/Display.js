import React, { Component } from 'react'
import axios from 'axios'
import Card from '../Card/Card' 
import './Display.css'

export default class Display extends Component {
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
    this.getProducts()
  }

  getProducts() {
    axios.get(`/clone/products/${this.props.brand}`).then( res => {
      const { imgurl, brand, model, name, price } = res.data
      this.setState({
        img: imgurl,
        brand: brand,
        model: model,
        name: name,
        price: price
      })
    })
  }

  render() {
    return (
      <div className='display'>
        <Card id={1}/>
      </div>
    )
  }
}