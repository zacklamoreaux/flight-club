import React, { Component } from 'react'
import './Category.css'
import {getProducts} from '../../ducks/reducer'
import { connect } from 'react-redux'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Display from '../Display/Display'
import Filter from '../Filter/Filter'

class Category extends Component {

  componentDidMount() {
    console.log(this.props.match.params.category)
    this.props.getProducts(this.props.match.params.category)
  }

  render() {
    console.log(this.props.products)
    return (
      <div>
        <Header />
        <h1 className='title'>{this.props.match.params.category}</h1>
        <div className='filter'>
          <Filter product={this.props.products}/>
        </div>
        <div className='display'>
          <Display products={this.props.products}  />
        </div>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {products} = state
  // console.log(products)
  return {
    products
  }
}

export default connect(mapStateToProps, {getProducts})(Category)