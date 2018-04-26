import React from 'react'
import Home from './components/Home/Home'
import Category from './components/Category/Category'
import Individual from './components/Individual/Individual'
import {HashRouter, Route} from 'react-router-dom'

export default (
  <HashRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/category' component={Category} />
      <Route path='individual' component={Individual} />
    </div>
  </HashRouter>
)