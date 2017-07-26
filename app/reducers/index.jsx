import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import selectedProducts from './selectedProducts';
import currentProduct from './currentProduct';
import categories from  './categories';
import cart from  './cart';
import user from  './auth';
import orders from  './orders';
import selectedOrder from  './selectedOrder';
import shippingAddress from './shippingAddress';
import charge from './charge';
import designForm from './designForm';
import subscriber from './subscribe';


const rootReducer = combineReducers({
	categories,
  charge,
  currentProduct,
  designForm,
  orders,

  routing: routerReducer
});


export default rootReducer;
