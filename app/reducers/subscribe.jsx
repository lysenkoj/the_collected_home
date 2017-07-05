import { browserHistory } from 'react-router';

/* -----------------    ACTIONS     ------------------ */

const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER';

/* ------------   ACTION CREATORS     ------------------ */

export const subscriber = email => ({
  type: ADD_SUBSCRIBER,
  email
});

/* ------------       REDUCER     ------------------ */

export default function reducer (previousState = '', action) {
  switch (action.type) {

    case ADD_SUBSCRIBER:
      return action.email;

    default:
      return previousState;
  }
}

export const addSubscriber = (email) => {
  return subscriber(email);
}
