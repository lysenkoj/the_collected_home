import axios from 'axios';
import { loadCategories } from '../actionCreators';

/* ------------       REDUCER     ------------------ */

export default function reducer (previousState = [], action) {
  switch (action.type) {

    case 'LOAD_CATEGORIES':
      return action.categories;

    case 'ADD_CATEGORIES':
      return action.categories;

    case 'REMOVE_CATEGORY':
      return action.categories;

    default:
      return previousState;
  }
}


/* ------------       DISPATCHERS     ------------------ */

export const fetchAndStoreCategories = () => {
  return dispatch => {
    axios.get(`/api/categories`)
      .then(categories => dispatch(loadCategories(categories.data)))
      .catch(err => console.error('Fetching categories failed', err))
  }
}

export const addCategory = (name, meta_category_id) => {
  return dispatch => {
    axios.post(`/api/categories`, {
      name, meta_category_id
    })
      .then(() => {dispatch(fetchAndStoreCategories())})
      .catch(err => console.error('Adding categories failed', err))
  }
}