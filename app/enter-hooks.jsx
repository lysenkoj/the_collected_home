import store from './store';
import { fetchAndGoToProduct } from './reducers/currentProduct';
import { fetchAndStoreCategories } from './reducers/categories';
import { fetchAndGoToProducts, fetchAndGoToQueriedProducts, fetchAndGoToFeaturedProducts, fetchAllProducts} from './reducers/selectedProducts';
import { fetchAndGoToOrders} from './reducers/orders';
import { fetchAndGoToOrder} from './reducers/selectedOrder';
import {selectOrders} from './actionCreators';


export const loadOrders = ({ params }) => {
	store.dispatch(fetchAndGoToOrders(params.id));
};

export const onOrderSelect = ({ params }) => {
	store.dispatch(fetchAndGoToOrder(params.orderNumber));
};

export const onProductSelect = ({ params }) => {
	store.dispatch(fetchAndGoToProduct(params.sku));
};

export const loadCategories = () => {
	store.dispatch(fetchAndStoreCategories());
};

export const loadAllProducts = () => {
  store.dispatch(fetchAllProducts())
}

export const loadCategoryProducts = ({ params }) => {
  console.log(params)
	store.dispatch(fetchAndGoToProducts(params.categoryName));
};

export const loadFeaturedProducts = () => {
  store.dispatch(fetchAndGoToFeaturedProducts())
};

export const loadQueriedProducts = ({ params }) => {
	store.dispatch(fetchAndGoToQueriedProducts(params.query));
};

