import React, { Component } from 'react'

import axios from 'axios'

import './Cart.css'
// import CartItem from '../CartItem/CartItem'

export default class Cart extends Component {
  constructor() {
    super()
    this.state = {
      cartItems: []
    }
    this.getCart = this.getCart.bind(this)
  }
  componentDidMount() {
    this.getCart()
  }

  getCart() {
    axios.get('/clone/cart').then(res => {
      this.setState({
        cartItems: res.data
      })
    }).catch(console.error)
  }

  remove(id) {
    console.log('id: ', id)
    axios.delete(`/clone/cart/${id}`).then(res => {
      this.getCart()
    }).catch(console.error)
  }

  checkout() {
    axios.post('/clone/order').then(res => {
      console.log(res)
      this.props.history.push('/orders')
    }).catch(console.error)
  }

  render() {
    const cart = this.state.cartItems.map((c,i) => { return <CartItem n={i} key={i} item={c} refreshCart={this.getCart} /> })
    const cartTotal = (this.state.cartItems.reduce((s,v) => s + (v.quantity * v.price), 0)).toFixed(2) || '0.00'

    return (
      <div className='cart-container'>
        <section className='cart-line-items'>
          <div className='cart-item cart-header'>
            <h3>Product</h3>
            <p className='quantity'>Quantity</p>
            <p className='price'>Unit Price</p>
            <p className='price'>Price</p>
            <div></div>
          </div>
          {
            cart.length
            ?
            cart
            :
            <h3>No items in cart</h3>
          }
        </section>
        <hr />
        <div className='cart-total'>
          <h3>Total: {cartTotal || 0}</h3>
          <br/>
          <button onClick={() => this.checkout()} >Checkout</button>
        </div>
      </div>
    )
  }
}
