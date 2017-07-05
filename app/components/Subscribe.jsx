import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';


 class Subscribe extends Component {
  constructor(props) {
    super(props)

    // this.countdown = this.countdown.bind(this);
    this.validateForm = this.validateForm.bind(this);

  }

  componentWillMount(){
    const body = document.querySelector('body');
    body.style.paddingBottom = 0;
  }

  componentDidMount(){
    document.getElementById("emailInput").value = this.props.subscriber;
  }

  validateForm(evt){
    let email = document.forms["mc-embedded-subscribe-form"]["EMAIL"].value;
    let firstName = document.forms["mc-embedded-subscribe-form"]["FNAME"].value;
    let lastName = document.forms["mc-embedded-subscribe-form"]["LNAME"].value;

    if (email === '' || firstName === '' || lastName === '') {
        alert("Please Fill Out Form");
        return false;
    }

  }

  render() {
    return (
      <div className="subscribeContainer">
        <Link to='/' className='subscribeLogoContainer'>
          <div>CLARICE KING</div>
          <div id="tagline">The Collected Home</div>
        </Link>
        <div className="formContainer">
          <h4>SIGN UP FOR OUR NEWSLETTER AND BE THE FIRST TO KNOW</h4>
          <form action="//clariceking.us15.list-manage.com/subscribe/post?u=6210c56d9e29bc8b0ad547585&amp;id=8eaec4d2f9" method="post"  name="mc-embedded-subscribe-form" className="validate" target="_blank" onSubmit={this.validateForm}>
            <input id="emailInput" className="subscriberInput" type="email" name='EMAIL' placeholder="E-mail Address" required/>
            <input id="fNameInput" className="subscriberInput" type="text" name="FNAME"  placeholder="First Name" required/>
            <input id="lNameInput" className="subscriberInput" type="text" name="LNAME"  placeholder="Last Name" required/>
            <div className="hiddenForm" aria-hidden="true">
              <input type="text" name="b_6210c56d9e29bc8b0ad547585_8eaec4d2f9" tabIndex="-1" value=""/>
            </div>
            <button className="subscribeButton" type="submit" name="subscribe">
              <h5>SIGN UP!</h5>
            </button>
          </form>
        </div>
      </div>
    )
  }
}


const mapStateToProps = ({ subscriber}) => ({ subscriber });
const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Subscribe);