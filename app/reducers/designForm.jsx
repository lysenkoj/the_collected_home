import axios from 'axios';
import {browserHistory} from "react-router";

/* -----------------    ACTIONS     ------------------ */

const LOAD_DESIGN_FORM = 'LOAD_DESIGN_FORM';


/* ------------   ACTION CREATORS     ------------------ */

export const loadDesignForm = info => ({
  type: LOAD_DESIGN_FORM,
  info
});

/* ------------       REDUCER     ------------------ */

export default function reducer (previousState = {}, action) {
  switch (action.type) {

    case LOAD_DESIGN_FORM:
      return action.info;

    default:
      return previousState;
  }
}


/* ------------       DISPATCHERS     ------------------ */


export const addFormInfo = (info) => {
  return dispatch => {
    axios.post(`/api/design_request`, info)
      .catch(err => console.error('SENDING FORM INFO FAILED', err))
  }
}