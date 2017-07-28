import React, { Component } from 'react';
import { connect } from 'react-redux';

/* -----------------    COMPONENT     ------------------ */

class Cart extends React.Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }

	render(){
		return (
			<div className="checkoutContainer">
				<h2>Checkout</h2>
				<div>Items in your cart: { this.props.cart && this.props.cart.length }</div>
        {(this.props.cart.length > 0) ?
        <div className="cartPreview">
          {this.props.cart.map((item, index) => (
            <div className='cartPreviewItem' key={index}>
              <h5>{item.product.name}</h5>
              <img src={item.product.img[0]}/>
            </div>
          ))}
        </div> : null
        }
				{ this.props.children }
			</div>
		);
	}
}


/* -----------------    CONTAINER     ------------------ */

const mapProps = ({ cart }) => ({ cart });

// const mapDispatch = dispatch => ({
//   go: category => dispatch(fetchCategoryProducts(category))
//   }
//   // logout: () => {
//   //   dispatch(logout())
//   //   browserHistory.push('/');
//   // }
// })

export default connect(mapProps, null)(Cart);