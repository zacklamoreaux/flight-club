import React, { Component } from 'react'

export default class Checkout extends Component {
  render() {
    return (
      <div>
        {this.props.item.brand}
        <br />
        {this.props.item.model} {this.props.item.name}
        <br />
        ${this.props.item.price}
        <br />
        <button>New</button>
        <button>Used</button>
        <br />
        {this.props.item.size}
        <br />
        <button>Add to Cart</button>
      </div>
    )
  }
}
