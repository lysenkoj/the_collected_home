import axios from 'axios';
import {browserHistory} from "react-router";
import { addDesignFormInfo } from '../actionCreators';

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
  return dispatch => {
    axios.post(`/api/design_request`, info)
      .then(info => dispatch(addDesignFormInfo(info.data)))
      .catch(err => console.error('SENDING FORM INFO FAILED', err))
  }
}