import React, { Component } from 'react';
import { Link } from 'react-router';
import Carousel from './Carousel';
import { connect } from 'react-redux';
import {addFormInfo} from '../reducers/designForm';

/* -----------------    COMPONENT     ------------------ */
class DesignServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: {
        firstName: null,
        lastName: null,
        email: null,
        areaCode: null,
        threeDig: null,
        fourDigPhone: null
      }
    }

    this.addFirstName = this.addFirstName.bind(this);
    this.addLastName = this.addLastName.bind(this);
    this.addEmail = this.addEmail.bind(this);
    this.addAreaPhone = this.addAreaPhone.bind(this);
    this.addThreeDigPhone = this.addThreeDigPhone.bind(this);
    this.addFourDigPhone = this.addFourDigPhone.bind(this);
    this.sendInfo = this.sendInfo.bind(this);
  }


  addFirstName(evt){
    evt.preventDefault();
    let firstName = evt.target.value
		this.setState((previousState) => {
      previousState.client.firstName = firstName;
      return previousState;
    });
  }

  addLastName(evt){
    evt.preventDefault();
    let lastName = evt.target.value
		this.setState((previousState) => {
      previousState.client.lastName = lastName;
      return previousState;
    });
  }

  addEmail(evt){
    evt.preventDefault();
    let email = evt.target.value
		this.setState((previousState) => {
      previousState.client.email = email;
      return previousState;
    });
  }

  addAreaPhone(evt){
    evt.preventDefault();
    let areaCode = evt.target.value;
		this.setState((previousState) => {
      previousState.client.areaCode = areaCode;
      return previousState;
    });
  }

  addThreeDigPhone(evt){
    evt.preventDefault();
    let threeDig = evt.target.value;
		this.setState((previousState) => {
      previousState.client.threeDig = threeDig;
      return previousState;
    });
  }

  addFourDigPhone(evt){
    evt.preventDefault();
    let fourDig = evt.target.value;
		this.setState((previousState) => {
      previousState.client.fourDigPhone = fourDig;
      return previousState;
    });
  }

  formValid(info){
    let name = `${info.firstName}${info.lastName}`
    let email = info.email
    let number = `${info.areaCode}${info.threeDig}${info.fourDigPhone}`

    let num = '1234567890';
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


    if(name === null || email === null || number === null){
      alert('PLEASE FILL OUT FORM BEFORE SUBMITTING');
      return false;
    }

    for(let i = 0; i < number.length; i++){
      if(num.indexOf(number[i]) < 0){
        alert('PLEASE ENTER A VALID PHONE NUMBER')
        return false;
      }
    }

    for(let i = 0; i < name.length; i++){
      if(letters.indexOf(name[i].toUpperCase()) < 0){
        alert('PLEASE ENTER A VALID NAME')
        return false;
      }
    }

    if(number.length < 10){
      alert('PLEASE ENTER A VALID PHONE NUMBER')
      return false;
    } else if(email.indexOf('@') < 0 || email.indexOf('.com') < 0){
      alert('PLEASE ENTER A VALID EMAIL ADDRESS')
      return false;
    } else{
      return true;
    }
  }

  sendInfo(evt){
    evt.preventDefault()

    let info = this.state.client;

    // FORM VALIDATION

    if(this.formValid(info)){
      this.props.supplyFormInfo(info);

      let form = document.getElementById("dumbForm");
      form.reset();
      form.onsubmit = function() {
        return false;
      };
    }
  }

  render() {
    return(
      <div className="designContainer">
        <div className="designHeader">
          <img src='images/CKDLogo.png' />
          <div className='designTitleContainer'>
            <h3>CLARICE KING DESIGN</h3>
            <h4>Interior Design and Decorating Services</h4>
          </div>
        </div>
        <Carousel/>
        <h4>LET'S MEET!</h4>
        <h5 id="instructions">Fill out the form below to get started. We'll send you a follow up email asking you for the information we need before our first phone call!</h5>
        <div className="designFormContainer">
          <form className="designForm" id="dumbForm">
            <div id="designFormName" className="formRow">
              <h5>NAME</h5>
              <div className='inputGroup'>
                <input name="firstName" type="text" size="20" onChange={this.addFirstName} required/>
                <span>First Name</span>
              </div>
              <div className='inputGroup'>
                <input name="lastName" type="text" size="20" onChange={this.addLastName} required/>
                <span>Last Name</span>
              </div>
            </div>
            <div id="designFormEmail" className="formRow">
              <h5>EMAIL ADDRESS</h5>
              <input name="email" type="email" size="20" onChange={this.addEmail} required/>
            </div>
            <div id="designFormPhone" className="formRow">
              <h5>PHONE</h5>
              <div  className='inputGroup'>
                <input className="numberInput" name="areaCode" type="text" size="3" maxLength="3" onChange={this.addAreaPhone}/>
                <span>(***)</span>
              </div>
              <div className='inputGroup'>
                <input className="numberInput" name="firstThree" type="text" size="3" maxLength="3" onChange={this.addThreeDigPhone}/>
                <span>***</span>
              </div>
              <div className='inputGroup'>
                <input className="numberInput" name="lastFour" type="text" size="4" maxLength="4" onChange={this.addFourDigPhone}/>
                <span>****</span>
              </div>
            </div>
            <button onClick={this.sendInfo}>SUBMIT</button>
          </form>
        </div>
      </div>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = ({}) => ({});
const mapDispatchToProps = (dispatch) => ({
	supplyFormInfo: (info) => dispatch(addFormInfo(info))
});

export default connect(mapStateToProps, mapDispatchToProps)(DesignServices);