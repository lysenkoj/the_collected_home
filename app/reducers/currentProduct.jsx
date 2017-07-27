import axios from 'axios';
import {browserHistory} from "react-router";
import { loadProduct } from '../actionCreators';


/* ------------       REDUCER     ------------------ */

export default function reducer (previousState = {}, action) {
  switch (action.type) {

    case 'LOAD_PRODUCT':
      return action.product;

    case 'CLEAR_PRODUCT':
      return {};

    case 'ADD_PRODUCT':
      return action.product;

    case 'UPDATE_PRODUCT':
      return Object.assign({}, previousState, action.product);

    default:
      return previousState;
  }
}


/* ------------       DISPATCHERS     ------------------ */


export const fetchAndGoToProduct = sku => {
  return dispatch => {
    axios.get(`/api/products/${sku}`)
      .then(product => dispatch(loadProduct(product.data)))
      .catch(err => console.error('Fetching product failed', err))
  }
}

export const updateProduct = product => {
  return dispatch => {
    axios.put(`/api/products/${product.sku}`, product)
      .then(() => {
        dispatch(fetchAndGoToProduct(product.sku))
      })
      .catch(err => console.error('Fetching product failed', err))
  }
}

export const addNewProduct = (product, categoryProduct) => {
  return dispatch => {
    axios.post(`/api/products`, product)
      .then(() => axios.post(`/api/category_products`, categoryProduct))
      .then(() => {
        dispatch(fetchAndGoToProduct(product.sku))
      })
      .catch(err => console.error('Fetching product failed', err))
  }
}