import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, changeQuantity, clearCart } from '../actionCreators';
import { Link } from 'react-router';
import QuickCartItem from './QuickCartItem';


/* -----------------    COMPONENT     ------------------ */

function Cart({ cart, remove, change, clear }){

 return (
  <div className='quickCart'>
    <div id="tab"/>
    <div id="tabBorder"/>
    <div className="quickCartContainer">
      <h3 id='cartTitle'>YOUR CART</h3>
      {
        (cart && cart.length) ?
        <div>
        <ul className="quickCartList">
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
          <h5 id='total'>Total price: ${
            cart.map(item => {
              return +item.product.price * +item.quantity;
            })
              .reduce((sum, current) => {
                return sum + current;
            }).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          }
          </h5>
          <div className="quickCartButtons">
            <Link to="/cart">
              <button>CART</button>
            </Link>
            <Link to="/checkout/shipping">
              <button>CHECKOUT</button>
            </Link>
            <button onClick={clear}>CLEAR CART</button>
          </div>
        </div>
        :
        <h3 id='emptyCart'>Your cart is empty!</h3>
      }

    </div>
  </div>);
}



/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = ({ cart }) => ({ cart });
const mapDispatchToProps = (dispatch) => ({
	remove: (item) => dispatch(removeFromCart(item)),
	change: (product, quantity) => dispatch(changeQuantity(product, quantity)),
	clear: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
