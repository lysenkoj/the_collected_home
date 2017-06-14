import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItem, changeQuantity, clearCart } from '../reducers/cart';
import { Link } from 'react-router';
import CartItem from './CartItem';

/* -----------------    COMPONENT     ------------------ */

function Cart({ cart, remove, change, clear }){

 return (
  <div className="cartContainer">
   <h3>Your Cart</h3>
   {
    (cart && cart.length) ?
    <div>
     <ul>
       {
         cart.map((item, index) => (
           <CartItem
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
      <Link to="/checkout/shipping">
        <button>Proceed to Checkout</button>
      </Link>
      <button onClick={clear}>Clear all items from cart</button>
     </div>
     :
    <h3>Your cart is empty!</h3>
  }

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
