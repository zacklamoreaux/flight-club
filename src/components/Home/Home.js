import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import FindYourPair from '../FindYourPair/FindYourPair'
import NewArrivals from '../NewArrivals/NewArrivals'
import TopCats from '../TopCats/TopCats'
import Recom from '../Recommendations/Recom'
import OurStores from '../OurStores/OurStores'

export default class Home extends Component {
  render() {
    return (
      <div>
        Home
        <Header />
        CAROUSEL
        <FindYourPair />
        <NewArrivals />
        <TopCats />
        <Recom />
        <OurStores />
        <Footer />
        Home
      </div>
    )
  }
}