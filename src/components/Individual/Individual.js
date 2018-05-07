import React, { Component } from 'react';
import {getItem} from '../../ducks/reducer'
import { connect } from 'react-redux'
import ShoePic from '../ShoePic/ShoePic'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

class Individual extends Component {
  componentDidMount() {
    this.props.getItem(1)
  }
  render() {
    return (
      <div>
        <Header />
        <ShoePic item={this.props.item} />
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