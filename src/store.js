import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './ducks/reducer'
import promiseMiddleware from 'redux-promise-middleware'

let middleware = promiseMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, applyMiddleware(middleware))