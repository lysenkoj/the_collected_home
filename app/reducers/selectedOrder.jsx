import axios from 'axios';
import { browserHistory } from 'react-router';
import {selectOrders} from '../actionCreators';

/* ------------       REDUCER     ------------------ */

export default function reducer (state = {}, action) {
  switch (action.type) {

    case 'SELECT_ORDER':
      return action.order;

    // case 'CLEAR_ORDER':
    //   return {};

    default:
      return state;
  }
}


/* ------------       DISPATCHERS     ------------------ */

export const fetchAndGoToOrder = (orderNumber) => {
  return dispatch => {
    axios.get(`/api/orders/${orderNumber}`)
      .then(order => {
        console.log('ORDER IS', order.data)
        axios.get(`/api/payments/${order.data.user_id}/${order.data.payment_id}`)
          .then(publicData => {
            const myObj = Object.assign(order.data, publicData.data)
            console.log('myObj is', myObj)
            return myObj;
          })
          .then(combinedOrder => {
            dispatch(selectOrders(combinedOrder))
          })
          .catch(err => console.error('Stripe call failure', err))
      })
      .catch(err => console.error('API call failure', err))
  };
}
