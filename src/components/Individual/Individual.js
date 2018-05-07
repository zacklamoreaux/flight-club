import React, { Component } from 'react';
import {getItem} from '../../ducks/reducer'
import { connect } from 'react-redux'
import ShoePic from '../ShoePic/ShoePic'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Checkout from '../CheckOut/Checkout'
import './Individual.css'

class Individual extends Component {
  componentDidMount() {
    console.log(this.props.match.params.individual)
    this.props.getItem(this.props.match.params.individual)
  }
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <ShoePic item={this.props.item} />
        <Checkout item={this.props.item} />
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {item} = state
  return {
    item
  }
}

export default connect(mapStateToProps, {getItem})(Individual)