import axios from 'axios'

const initialState = {
  products: [],
  item: {
    id: 0,
    brand: '',
    model: '',
    name: '',
    img: '',
    gender: '',
    price: 0,
    color: '',
    size: []
    }
}

const GET_PRODUCTS = 'GET_PRODUCTS';
const GET_ITEM = 'GET_ITEM';

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

export function getItem(id) {
  let item = axios.get(`/clone/product/${id}`).then( res => {
    console.log(res.data)
    return res.data
  })
  return {
    type: GET_ITEM,
    payload: item
  }
}

export default function reducer( state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS  + '_FULFILLED' :
    console.log(action.payload)
      return Object.assign({}, state, { 'products': action.payload })
    case GET_ITEM  + '_FULFILLED':
      return Object.assign({}, state, { 'item': action.payload })
    default:
      return state;
  }
}