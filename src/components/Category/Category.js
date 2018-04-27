import React, { Component } from 'react'
import {getProducts} from '../../ducks/reducer'
import { connect } from 'react-redux'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Display from '../Display/Display'
import Filter from '../Filter/Filter'

class Category extends Component {

  componentDidMount() {
    this.props.getProducts(this.props.match.params.products)
  }

  render() {
    console.log(this.props.match)
    return (
      <div>
        <Header />
        <Filter />
        <Display  />
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {products} = state
  console.log(products)
  return {
    products
  }
}

export default connect(mapStateToProps, {getProducts})(Category)