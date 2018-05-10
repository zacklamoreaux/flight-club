import React from 'react'
import Home from './components/Home/Home'
import Category from './components/Category/Category'
import Individual from './components/Individual/Individual'
import {HashRouter, Route} from 'react-router-dom'
// import Cart from './components/Cart/Cart';

export default (
  <HashRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/category/:category' component={Category} />
      <Route path='/individual/:individual' component={Individual} />
      {/* <Route path='/cart' component={Cart} /> */}
    </div>
  </HashRouter>
)