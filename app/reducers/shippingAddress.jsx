/* ------------       REDUCER     ------------------ */


export default function reducer (defaultState = {}, action) {
  switch (action.type) {

    case 'ADD_MAILING_ADDRESS':
      return Object.assign({}, defaultState, action.address);

    default:
      return defaultState;
  }
}


/* ------------       DISPATCHERS     ------------------ */


