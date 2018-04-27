import axios from 'axios'

const initialState = {
  products: [],
  shoe: {}
}

const GET_PRODUCTS = 'GET_PRODUCTS';
const GET_SHOE = 'GET_SHOE';

export function getProducts(brand) {
  let products = axios.get(`/clone/products/${brand}`).then( res => {
    console.log(res.data)
    return res.data
  })
  return {
    type: GET_PRODUCTS,
    payload: products
  }
}

export function getShoe(id) {
  let shoe = axios.get(`/clone/product/${id}`).then( res => {
    return res.data
  })
  return {
    type: GET_SHOE,
    payload: shoe
  }
}

export default function reducer( state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return Object.assign({}, state, { 'products': action.payload })
    case GET_SHOE:
      return Object.assign({}, state, { 'shoe': action.payload })
    default:
      return state;
  }
}