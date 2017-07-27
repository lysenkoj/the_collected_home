import { browserHistory } from 'react-router';


/* ------------       REDUCER     ------------------ */

export default function reducer (previousState = '', action) {
  switch (action.type) {

    case 'SUBSCRIBE':
      return action.email;

    default:
      return previousState;
  }
}

export const addSubscriber = (email) => {
  return subscriber(email);
}
