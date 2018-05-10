import React, { Component } from 'react'
import axios from 'axios'
import './Category.css'
import { connect } from 'react-redux'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Display from '../Display/Display'
import Filter from '../Filter/Filter'
 
export default class Category extends Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get(`/clone/products/${this.props.match.params.category}`).then( res => {
      // console.log(res.data)
      this.setState({
        products: res.data
      })
    })
  }

  componentWillReceiveProps(nextProps) {
    // console.log('PROPS', this.props.match.params.category, nextProps.match.params.category)
    if(this.props.match.params.category !== nextProps.match.params.category) {
      axios.get(`/clone/products/${nextProps.match.params.category}`).then( res => {
        // console.log(res.data)
        this.setState({
          products: res.data
        })
      })
    }
  }

  render() {
    // console.log(this.state.products)
    return (
      <div className='page'>
        <Header />
          <h1 className='title'>{this.props.match.params.category}</h1>
            <div className='all'>
              <div className='filter'>
                <Filter products={this.state.products}/>
              </div>
            <div className='display'>
              <Display products={this.state.products}  />
            </div>
          </div>
        <Footer />
      </div>
    )
  }
}

