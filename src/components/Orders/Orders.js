import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import './Orders.css'

export default class Orders extends Component {
  constructor() {
    super()
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    axios.get('/clone/user/orders').then( res => {
      this.setState({
        orders: res.data
      })
    }).catch(console.error)
  }

  render() {
    let orders = this.state.orders.map((c, i) => {
      let ts = new Date(c.order_ts)
      return (<Link to={`/order/${c.order_id}`} className='order' key={i} 
      style={{backgroundColor: i%2?'#BBB':'white'}}>
        <h4>{`${ts.getMonth()}/${ts.getDate()}/${ts.getFullYear()}`}</h4>
        <p>${c.items.reduce((s, v) => s + (v.price * v.quantity), 0).toFixed(2)}</p>
        <p>{c.items.length}</p>
        <p>{c.fulfilled ? 'Fulfilled' : 'Pending'}</p>
      </Link>
    )
    })

    return (
      <section className='orders'>
        <h3>My Orders:</h3>
        <div>
          <div className='order order-heading'>
            <h4>Placed</h4>
            <h4>Total</h4>
            <h4># of items</h4>
            <h4>Status</h4>
          </div>
          {orders}
        </div>
      </section>
    )
  }
}
