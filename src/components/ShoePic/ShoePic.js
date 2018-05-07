import React, { Component } from 'react'
import './ShoePic.css'

export default class ShoePic extends Component {
  render() {
    return (
      <div className='pic-wrapper'>
        <img src={this.props.item.imgurl} className='pic' />
      </div>
    )
  }
}
