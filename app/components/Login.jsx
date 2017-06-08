import React from 'react';
import {login} from 'APP/app/reducers/auth';
import {connect} from 'react-redux';
import { Link } from 'react-router';


export const Login = ({ login }) => (
  <div>

    <form onSubmit={ (evt) => {
      evt.preventDefault();
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      login(email, password)

      console.log('THIS IS THE CURRENT TARGET', evt.currentTarget)
    } }>

      <div id="loginEmail" className="loginForm">
        <h5>EMAIL</h5>
        <div className='inputGroupLogin'>
          <input name="email" type="email" size="20" placeholder='Email'/>
        </div>
      </div>

      <div id="loginPassword" className="loginForm">
        <h5>EMAIL</h5>
        <div className='inputGroupLogin'>
          <input name="password" type="password" size="20" placeholder='Password'/>
        </div>
      </div>

      <div>
        <button type='submit'>LOGIN</button>
      </div>
    </form>
    <div className='signUpContainer'>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
      <button><a href="/api/auth/google">Google Sign In</a></button>
    </div>
  </div>
)

const mapProps = (state) => ({});
const mapDispatch = (dispatch) => ({
  login: (username, password) => {
    dispatch(login(username, password));
  },
  google: () => dispatch()
})

export default connect(mapProps, mapDispatch)(Login);

