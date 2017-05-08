import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import {whoami} from './reducers/auth';

import persistState from 'redux-localstorage'

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

// added this for redux chrome devtools
// needs to be the 'same shape' as our store
// https://github.com/reactjs/redux/blob/master/docs/api/createStore.md
const preloadedState = {currentProduct: {}};
// BUT DEVTOOLS STILL NOT WORKING AGGGHHHH
// lol


const store = createStore(rootReducer, preloadedState, composeEnhancers(
	applyMiddleware(createLogger(), thunkMiddleware), persistState("cart", {key: "greatShopperCart"})
));

export default store;

// Set the auth info at start
store.dispatch(whoami());

