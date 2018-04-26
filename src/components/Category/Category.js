import React, { Component } from 'react'
import getCategory from '../../ducks/reducer'
import { connect } from 'react-redux'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Display from '../Display/Display'

class Category extends Component {

  componentDidMount() {
    getCategory(this.props.match.params.category)
  }

  render() {
    console.log(this.props.match)
    return (
      <div>
        <Header />
        <Display  />
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {category} = state
  return {
    category
  }
}

export default connect(mapStateToProps, {getCategory})(Category)