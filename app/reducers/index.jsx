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
	cart,
  categories,
  charge,
  currentProduct,
  designForm,
  orders,
  selectedOrder,
  selectedProducts,
  subscriber,
  user,
  shippingAddress,
  routing: routerReducer
});


export default rootReducer;
