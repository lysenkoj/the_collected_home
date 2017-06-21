import React, { Component } from 'react';
import { Link } from 'react-router-dom';


/* -----------------    DUMB COMPONENT     ------------------ */


export default class QuickCartItem extends Component {
  constructor(props) {
    super(props);
    this.onItemQuantityChange = this.onItemQuantityChange.bind(this);
  }

  onItemQuantityChange(evt) {
    evt.preventDefault();
    const quantity = +evt.target.value;
    this.props.change(this.props.item.product, quantity);
  }

  render() {
    const { item, remove } = this.props;
    return (
     <li className="quick-cart-item">
      <button id='quickCartDelete' onClick= { () => { remove(item) }}><h3>X</h3></button>
      <div className="quickCartItem">
        <Link to={`/product/${item.product.sku}`}>
          <product className="carted-product">
            <img src={item.product.img[0]} />
          </product>
        </Link>
        <item-details>
          <h5>{item.product.name}</h5>
          <h5>${ item.product.price && item.product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }</h5>
          <div>
            <h6>Quantity:</h6>
            <select value={item.quantity.toString()} onChange={ this.onItemQuantityChange } name="dropdown">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </item-details>
      </div>
     </li>
    );
  }
}