import { combineReducers } from 'redux';
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
	currentProduct,
	selectedProducts,
	categories,
	cart,
	user,
	orders,
	selectedOrder,
	shippingAddress,
	charge,
  designForm,
  subscriber
});


export default rootReducer;
