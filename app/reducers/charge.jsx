import axios from 'axios';
import { browserHistory } from 'react-router';
import { receiveCharge, clearCart } from '../actionCreators';

/* ------------       REDUCER     ------------------ */

const defaultState = {
  received: false,
  chargeData: {}
}

export default function reducer (previousState = defaultState, action) {
  switch (action.type) {

    case 'RECEIVE_CHARGE':
      return { received: true, chargeData: action.charge };

    case 'DELOAD_CHARGE':
      return defaultState;

    default:
      return previousState;
  }
}


/* ------------       DISPATCHERS     ------------------ */



export const submitOrder = (orderDataForStripe, orderDataFromStore) => {

  return dispatch => {
    axios.post(`/api/payments/${orderDataForStripe.token}`, {orderDataForStripe, orderDataFromStore})
      .then(charge => {

        if (charge.data.id) {
          dispatch(clearCart())
        }

        dispatch(receiveCharge(charge.data));
      })
      .then(browserHistory.push('/checkout/aftersubmit'))
      .catch(err => console.error(err))
  }
}
