import axios from 'axios';

/* ------------       REDUCER     ------------------ */

export default function reducer (previousState = [], action) {
  switch (action.type) {

    case 'SELECT_ORDERS':
      return action.orders;

    case 'LOAD_ORDERS':
      return action.orders;

    // case 'CLEAR_ORDER':
    //   return previousState;

    case 'DELOAD':
      return [];

    default:
      return previousState;
  }
}


/* ------------       DISPATCHERS     ------------------ */

export const fetchAndGoToOrders = (userid) => {
  return dispatch => {
    axios.get(`/api/orders/user/${userid}`)
      .then(orders => {
        dispatch(selectOrders(orders.data));
      })
      .catch(err => console.error('Fetching orders failed', err))
  };
}
