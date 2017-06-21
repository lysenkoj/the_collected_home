import axios from 'axios';
import {browserHistory} from "react-router-dom";

/* -----------------    ACTIONS     ------------------ */

const LOAD_CONTACT_FORM = 'LOAD_CONTACT_FORM';


/* ------------   ACTION CREATORS     ------------------ */

export const loadContactForm = info => ({
  type: LOAD_CONTACT_FORM,
  info
});

/* ------------       REDUCER     ------------------ */

export default function reducer (previousState = {}, action) {
  switch (action.type) {

    case LOAD_CONTACT_FORM:
      return action.info;

    default:
      return previousState;
  }
}


/* ------------       DISPATCHERS     ------------------ */


export const addContactFormInfo = (info) => {
  console.log(info)
  return dispatch => {
    axios.post(`/api/contact`, info)
      .catch(err => console.error('SENDING FORM INFO FAILED', err))
  }
}