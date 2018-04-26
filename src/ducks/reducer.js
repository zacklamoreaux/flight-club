import axios from 'axios'

const initialState = {
  category: []
}

const GET_CATEGORY = 'GET_CATEGORY';

export function getCategory(category) {
  let brand = axios.get(`/clone/products/${category}`).then( res => {
    return res.data
  })
  return {
    type: GET_CATEGORY,
    payload: brand
  }
}

export default function reducer( state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY:
      return Object.assign({}, state, { 'category': action.payload })
  
    default:
      break;
  }
}