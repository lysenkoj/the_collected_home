import store from './store';

import { clearProduct, clearOrder, deloadProducts, deloadAllOrders, deloadCharge } from './actionCreators';


export const onProductLeave = () => {
	store.dispatch(clearProduct());
};

export const onOrderLeave = () => {
	store.dispatch(clearOrder());
};

export const deloadCategoryProducts = () => {
	store.dispatch(deloadProducts());
};

export const deloadOrders = () => {
	store.dispatch(deloadAllOrders());
};

export const deloadSingleCharge = () => {
	store.dispatch(deloadCharge());
}