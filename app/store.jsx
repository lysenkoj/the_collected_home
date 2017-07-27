import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

// import data
import {whoami} from './reducers/auth';

import persistState from 'redux-localstorage'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const defualtState = {
  cart: [],
  categories: [],
  charge: {
    received: false,
    chargeData: {}
  },
  currentProduct: {},
  designForm: {},
  orders: [],
  selectedOrder: {},
  selectedProducts: [],
  subscriber: {},
  user: {}

};



const store = createStore(rootReducer, defualtState, composeEnhancers(
	applyMiddleware(createLogger(), thunkMiddleware), persistState("cart", {key: "greatShopperCart"})
));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

// Set the auth info at start
store.dispatch(whoami());

