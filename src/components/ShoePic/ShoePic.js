import React, { Component } from 'react'

export default class ShoePic extends Component {
  render() {
    return (
      <div>
        <img src={this.props.item.imgurl} />
      </div>
    )
  }
}
