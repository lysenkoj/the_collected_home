import axios from 'axios'
import { browserHistory } from 'react-router';
import { authenticated } from '../actionCreators';

// Reducer
const reducer = (state = {}, action) => {
  switch(action.type) {
  case 'AUTHENTICATED':
    return action.user
  }
  return state
}
export default reducer;

// Dispatchers
export const createOrFindUser = (email, password, firstName, lastName) =>
  dispatch =>
    axios.post('/api/users/',
      {email, password, firstName, lastName})
      .then(() => dispatch(login(email, password)))
      .catch(() => dispatch(whoami()))

export const login = (username, password) => {
   return dispatch =>
    axios.post('/api/auth/local/login',
      {username, password})
      .then(() => dispatch(whoami()))
      .then(browserHistory.push("/"))
      .catch(() => dispatch(whoami()))
}

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .then(browserHistory.push('/'))
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        let user = response.data
        if(user === ''){
          user = {}
        }
        dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)))