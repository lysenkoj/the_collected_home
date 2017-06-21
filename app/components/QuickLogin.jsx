import React, { Component } from 'react';
import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';


/* -----------------    COMPONENT     ------------------ */

const DumbQuickLogin = ({ login }) => (

    <div className="quickLoginContainer">
      <h3 id='loginTitle'>LOGIN</h3>

      <form onSubmit={login}>

        <div id="loginEmail" className="loginForm">
          <h5>EMAIL</h5>
          <div className='inputGroupLogin'>
            <input name="email" type="email" size="20" placeholder='Email'/>
          </div>
        </div>

        <div id="loginPassword" className="loginForm">
          <h5>PASSWORD</h5>
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
          <button>SIGN UP</button>
        </Link>
        <button id="googleButton"><a href="/api/auth/google">GOOGLE SIGN IN</a></button>
        <button id="facebookButton"><a href="/api/auth/facebook">FACEBOOK SIGN IN</a></button>
      </div>
    </div>
)

/* -----------------    STATEFUL REACT COMPONENT     ------------------ */

class QuickLogin extends Component {
	constructor(props) {
		super(props);

    this.login = this.login.bind(this);
	}
  componentDidMount () {
    window.scrollTo(0, 0)
  }

  login(evt){
    evt.preventDefault();
    const email = evt.target.email.value;
    const password = evt.target.password.value;

    this.props.login(email, password)

    evt.currentTarget.parentNode.parentNode.style.display = 'none';
  }


	render() {
		return (
      <div className='quickLogin'>
        <div id="loginTab"/>
        <div id="loginTabBorder"/>
        <DumbQuickLogin
          login={ this.login }
        />
      </div>
		)
	}
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state) => ({});
const mapDispatch = (dispatch) => ({
  login: (username, password) => {
    const getQuickCart = function(){
      return document.querySelector('div.quickCart');
    };

    const quickCart = getQuickCart();

    quickCart.style.right = '132px';
    dispatch(login(username, password));
  },
  google: () => dispatch()
})

export default connect(mapProps, mapDispatch)(QuickLogin);


