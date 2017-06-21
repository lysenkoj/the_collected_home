import axios from 'axios';
import { browserHistory } from 'react-router-dom';

/* -----------------    ACTIONS     ------------------ */

const SELECT_PRODUCTS = 'SELECT_PRODUCTS';
const SEARCH_FOR_PRODUCTS = 'SEARCH_FOR_PRODUCTS';
const SELECT_FEATURED_PRODUCTS = 'SELECT_FEATURED_PRODUCTS';
const DELOAD = 'DELOAD';



/* ------------   ACTION CREATORS     ------------------ */

const selectProducts = products => ({ type: SELECT_PRODUCTS, products });

const searchForProducts = products => ({
  type: SEARCH_FOR_PRODUCTS,
  products
});

const selectFeaturedProducts = products => ({
  type: SELECT_FEATURED_PRODUCTS,
  products
})

export const deloadProducts = () => ({
  type: DELOAD
});


/* ------------       REDUCER     ------------------ */

export default function reducer (state = [], action) {
  switch (action.type) {

    case SELECT_PRODUCTS:
      return action.products;

    case SEARCH_FOR_PRODUCTS:
      return action.products;

    case SELECT_FEATURED_PRODUCTS:
      return action.products;

    case DELOAD:
      return [];

    default:
      return state;
  }
}


/* ------------       DISPATCHERS     ------------------ */

export const fetchAndGoToProducts = (categoryName) => {
  return dispatch => {
    axios.get(`api/categories/${categoryName}`)
      .then(category => {
        dispatch(selectProducts(category.data[0] ? category.data[0].products : []));
      });
  };
}

export const fetchAndGoToQueriedProducts = search => {
  return dispatch => {
    axios.get(`/api/products/search/${search}`)
      .then(products => {
        dispatch(searchForProducts(products.data))
        browserHistory.push(`/search/${search}`)
      })
      .catch(err => console.error('Fetching product failed', err))
  }
}

export const fetchAndGoToFeaturedProducts = () => {
  return dispatch => {
    axios.get(`api/products/featured`)
      .then(products => {
        dispatch(selectFeaturedProducts(products.data))
      });
  };
}