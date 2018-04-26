import React, { Component } from 'react'
import getCategory from '../../ducks/reducer'
import { connect } from 'react-redux';

class Category extends Component {
  render() {
    return (
      <div>
        Header
        Filter
        Display
        Footer
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    category: state.category
  }
}

export default connect(mapStateToProps, {getCategory})(Category)