import axios from 'axios';
import {browserHistory} from "react-router";

/* ------------       REDUCER     ------------------ */

export default function reducer (previousState = {}, action) {
  switch (action.type) {

    case 'ADD_DESIGN_FORM_INFO':
      return Object.assign({}, previousState, action.info);

    default:
      return previousState;
  }
}


/* ------------       DISPATCHERS     ------------------ */


export const addFormInfo = (info) => {
  console.log(info)
  return dispatch => {
    axios.post(`/api/design_request`, info)
      .catch(err => console.error('SENDING FORM INFO FAILED', err))
  }
}