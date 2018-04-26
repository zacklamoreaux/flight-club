import axios from 'axios'

const initialState = {
  id: '',
  brand: '',
  model: '',
  name: '',
  imgurl: '',
  gender: '',
  price: '',
  color: '',
  size: ''
}

const GET_CATEGORY = 'GET_CATEGORY';
const GET_INDIVIDUAL = 'GET_INDIVIDUAL';

export function getCategory(category) {
  let brand = axios.get(`/clone/products/${category}`).then( res => {
    return res.data
  })
  return {
    type: GET_CATEGORY,
    payload: brand
  }
}

export function getIndividual(individual) {
  let shoe = axios.get(`/clone/products${individual}`).then( res => {
    return res.data
  })
  return {
    type: GET_INDIVIDUAL,
    payload: shoe
  }
}

export default function reducer( state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY:
      return Object.assign({}, state, { 'brand': action.payload })
    case GET_INDIVIDUAL:
      return Object.assign({}, state, { 'shoe': action.payload })
    default:
      return state;
  }
}