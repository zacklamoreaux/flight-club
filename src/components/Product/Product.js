import React, { Component } from 'react'
import axios from 'axios'

export default class Product extends Component {
  constructor() {
    super()
    this.state = {
      product: {},
      quantity: 1
    }
  }

  componentDidMount() {
    axios.get(`/clone/product/${this.props.match.params.id}`).then(res => {
      this.setState({
        product: res.data
      })
    }).catch(console.error)
  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  addToCart(e) {
    e.preventDefault();
    axios.post('/clone/cart', {productID: this.state.product.id, quantity: this.state.quantity}).then( res => {
      this.props.history.push('/')
    }).catch(console.error)
  }

  render() {
    let {product} = this.state
    return (
      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        <form onSubmit={e => this.addToCart(e)}>
          <input type='number' onChange={e => this.handleInput(e)} name='quantity' value={this.state.quantity} />
          <button type='submit'>Add to Cart</button>
        </form>
      </div>
    )
  }
}
