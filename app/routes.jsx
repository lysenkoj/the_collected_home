'use strict';

import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

/* -----------------    COMPONENTS     ------------------ */
import Root from './components/Root';
import Main from './components/Main';
import CurrentProduct from './components/CurrentProduct';
import SelectedProducts from './components/SelectedProducts';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Shipping from './components/Shipping';
import Login from './components/Login';
import Signup from './components/Signup';
import Orders from './components/Orders';
import SelectedOrder from './components/SelectedOrder';
// import Account from './components/Account';
import Admin from './components/Admin';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import AfterOrderSubmit from './components/AfterOrderSubmit';
import DesignServices from './components/DesignServices';
import SplashPage from './components/SplashPage';

/* -----------------    ON-ENTER HOOKS     ------------------ */
import { onProductSelect, loadCategories, loadCategoryProducts, loadQueriedProducts, loadFeaturedProducts, loadOrders, onOrderSelect, loadAdmin } from './enter-hooks';
/* -----------------    ON-LEAVE HOOKS     ------------------ */
import { onProductLeave, onOrderLeave, deloadCategoryProducts, deloadOrders, onAdminLeave, deloadSingleCharge} from './leave-hooks';


export default () => (
	<Router history={browserHistory}>
    {/*WHEN DISPLAYING SPLASH PAGE DISABLE BODY PADDING IN SPLASH CSS*/}
    {/*<Route path="/" component={SplashPage} />*/}
    <Route path="/" component={Root} onEnter={loadCategories}>
      <IndexRoute component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/admin" component={Admin}/>
      <Route path="/orders/:id" component={Orders} onEnter={loadOrders} onLeave={deloadOrders}/>
      <Route path="/order/:orderNumber" component={SelectedOrder} onEnter={onOrderSelect} onLeave={onOrderLeave}/>
      <Route path="/product/:sku" component={CurrentProduct} onEnter={onProductSelect} onLeave={onProductLeave} />
      <Route path="/cart" component={Cart} />
      <Route path="/design" component={DesignServices} />
      <Route path="/checkout" component={Checkout} >
        <Route path="/checkout/shipping" component={Shipping} />
        <Route path="/checkout/payment" component={Payment} />
        <Route path="/checkout/confirmation/:token" component={Confirmation} />
        <Route path="/checkout/aftersubmit" component={AfterOrderSubmit} onLeave={deloadSingleCharge} />
      </Route>
      <Route path="/search/:query" component={SelectedProducts} onEnter={loadQueriedProducts} />
      <Route path="/featured" component={SelectedProducts} onEnter={loadFeaturedProducts} onLeave={deloadCategoryProducts} />
      <Route path="/:categoryName" component={SelectedProducts} onEnter={loadCategoryProducts} onLeave={deloadCategoryProducts} />
    </Route>
  </Router>
);
    //    <Route path="/payment" component={Payment} />


