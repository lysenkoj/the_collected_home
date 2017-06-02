import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItem, changeQuantity, clearCart } from '../reducers/cart';
import { Link } from 'react-router';
import QuickCartItem from './QuickCartItem';


/* -----------------    COMPONENT     ------------------ */

function Cart({ cart, remove, change, clear }){

 return (
  <div className='quickCart'>
    <div id="tab"/>
    <div id="tabBorder"/>
    <div className="quickCartContainer">
      <h3>Your Cart</h3>
      {
        (cart && cart.length) ?
        <div>
        <ul>
          {
            cart.map((item, index) => (
              <QuickCartItem
                key={ index }
                item={ item }
                remove={ remove }
                change={ change }
              />
            ))
          }
          </ul>
          <div>Total price: ${
            cart.map(item => {
              return +item.product.price * +item.quantity;
            })
              .reduce((sum, current) => {
                return sum + current;
            }).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          }
          </div>
          <Link to="/cart">
            <button>CART</button>
          </Link>
          <Link to="/checkout/shipping">
            <button>CHECKOUT</button>
          </Link>
          <button onClick={clear}>CLEAR CART</button>
        </div>
        :
        <h3>Your cart is empty!</h3>
      }

    </div>
  </div>);
}



/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = ({ cart }) => ({ cart });
const mapDispatchToProps = (dispatch) => ({
	remove: (item) => dispatch(removeItem(item)),
	change: (product, quantity) => dispatch(changeQuantity(product, quantity)),
	clear: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
