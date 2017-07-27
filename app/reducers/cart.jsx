import axios from 'axios';

/* ------------       REDUCER     ------------------ */

export default function reducer (previousState = [], action) {
  switch (action.type) {

    case 'ADD_TO_CART':
      for (let item of previousState)  {
        if (item.product.sku === action.product.sku) {
          return previousState;
        }
      }
      return [...previousState, {product: action.product, quantity: action.quantity}];

    case 'CHANGE_QUANTITY':
      return previousState.map((item) => {
        if (item.product.sku === action.product.sku) {
          return {product: item.product, quantity: action.quantity};
        } else {
          return item;
        }
      });

    case 'REMOVE_FROM_CART':
      return previousState.filter(item => (
        item.product.sku !== action.product.product.sku
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
