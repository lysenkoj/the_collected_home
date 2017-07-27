import axios from 'axios';

/* ------------       REDUCER     ------------------ */

export default function reducer (previousState = [], action) {
  switch (action.type) {

    case 'ADD_ITEM':
      for (let item of previousState)  {
        if (item.product.sku === action.productAndQuantity.product.sku) {
          return previousState;
        }
      }
      return [...previousState, {product: action.productAndQuantity.product, quantity: action.productAndQuantity.quantity}];

    case 'CHANGE_QUANTITY':
      return previousState.map((item) => {
        if (item.product.sku === action.productAndQuantity.product.sku) {
          return {product: item.product, quantity: action.productAndQuantity.quantity};
        } else {
          return item;
        }
      });

    case 'REMOVE_ITEM':
      return previousState.filter(item => (
        item.product.sku !== action.item.product.sku
      ));

    case 'CLEAR_CART':
      return [];

    default:
      return previousState;
  }
}


/* ------------       DISPATCHERS     ------------------ */

export const submitOrder = orderData => {
  return dispatch => {
    axios.post(`/api/payments/${orderData.token}`, orderData)
      .then(charge => {
        console.log('CHARGE IS', charge.data)


        dispatch(clearCart())
      })
      .catch(err => console.error(err))
  }
}
