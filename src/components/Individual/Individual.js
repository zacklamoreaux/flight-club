import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import ShoePic from '../ShoePic/ShoePic'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Checkout from '../CheckOut/Checkout'
import './Individual.css'

export default class Individual extends Component {
  constructor() {
    super () 
    this.state = {
      item: {}
    }
  }

  componentDidMount() {
    axios.get(`/clone/product/${this.props.match.params.individual}`).then( res => {
      console.log(res.data)
      this.setState({
        item: res.data
      })
    })
  }
  
  render() {
    return (
      <div className='wrapper'>
        <Header />    
        <ShoePic item={this.state.item} />
        <Checkout item={this.state.item} />
        <Footer />
      </div>
    )
  }
}

