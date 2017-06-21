import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {addContactFormInfo} from '../reducers/contact';

/* -----------------    COMPONENT     ------------------ */
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: {
        firstName: null,
        lastName: null,
        email: null,
        areaCode: null,
        threeDig: null,
        fourDig: null,
        message: null
      }
    }
    this.addFirstName = this.addFirstName.bind(this);
    this.addLastName = this.addLastName.bind(this);
    this.addEmail = this.addEmail.bind(this);
    this.addAreaPhone = this.addAreaPhone.bind(this);
    this.addThreeDigPhone = this.addThreeDigPhone.bind(this);
    this.addFourDigPhone = this.addFourDigPhone.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.sendInfo = this.sendInfo.bind(this);
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  addFirstName(evt){
    evt.preventDefault();
    let firstName = evt.target.value
		this.setState((previousState) => {
      previousState.customer.firstName = firstName;
      return previousState;
    });
  }

  addLastName(evt){
    evt.preventDefault();
    let lastName = evt.target.value
		this.setState((previousState) => {
      previousState.customer.lastName = lastName;
      return previousState;
    });
  }

  addEmail(evt){
    evt.preventDefault();
    let email = evt.target.value
		this.setState((previousState) => {
      previousState.customer.email = email;
      return previousState;
    });
  }

  addAreaPhone(evt){
    evt.preventDefault();
    let areaCode = evt.target.value;
		this.setState((previousState) => {
      previousState.customer.areaCode = areaCode;
      return previousState;
    });
  }

  addThreeDigPhone(evt){
    evt.preventDefault();
    let threeDig = evt.target.value;
		this.setState((previousState) => {
      previousState.customer.threeDig = threeDig;
      return previousState;
    });
  }

  addFourDigPhone(evt){
    evt.preventDefault();
    let fourDig = evt.target.value;
		this.setState((previousState) => {
      previousState.customer.fourDig = fourDig;
      return previousState;
    });
  }

    addMessage(evt){
    evt.preventDefault();
    let message = evt.target.value;
		this.setState((previousState) => {
      previousState.customer.message = message;
      return previousState;
    });
  }

  formValid(info){
    let name = `${info.firstName}${info.lastName}`;
    let email = info.email;
    let number = `${info.areaCode}${info.threeDig}${info.fourDig}`;
    let message = info.message;

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
    } else if(message.length <= 0){
      alert('PLEASE ENTER MESSAGE')
      return false;
    } else{
      return true;
    }
  }

  sendInfo(evt){
    evt.preventDefault()

    let info = this.state.customer;
    let customerInquiry = {};

    customerInquiry.fullName = `${info.firstName} ${info.lastName}`;
    customerInquiry.firstName = info.firstName;
    customerInquiry.lastName = info.lastName;
    customerInquiry.email = info.email;
    customerInquiry.phone = `${info.areaCode}-${info.threeDig}-${info.fourDig}`;
    customerInquiry.message = info.message;

    // FORM VALIDATION

    if(this.formValid(info)){
      this.props.supplyContactFormInfo(customerInquiry);

      let form = document.getElementById("dumbContactForm");
      form.reset();
      form.onsubmit = function() {
        return false;
      };
    }
  }


  render() {
    return(
    <div className='contactContainer'>
      <h1>CONTACT US</h1>
      <div className="informationRow">
        <div className="customerCareContainer">
          <h4>CUSTOMER CARE</h4>
          <h5>Phone 203.123.1234</h5>
          <h5 className="hours">HOURS</h5>
          <h5>Monday through Friday</h5>
          <h5>8am to 5:30pm (EST)</h5>
        </div>
        <div className="locationContainer">
          <h4>LOCATION</h4>
          <h5>27 S Main St</h5>
          <h5>Norwalk CT 06854</h5>
          <h5>Phone 203.123.4567</h5>
          <h5 className="hours">HOURS</h5>
          <h5>Weekdays</h5>
          <h5>10am to 6pm (EST)</h5>
          <h5>Weekends</h5>
          <h5>Appointment Only</h5>
        </div>
      </div>
      <div className="contactFormContainer">
          <form className="contactForm" id="dumbContactForm">
            <div id="contactFormName" className="formRowContact">
              <h5>NAME</h5>
              <div className='inputGroupContact'>
                <input name="firstName" type="text" size="20" onChange={this.addFirstName} required/>
                <span>First Name</span>
              </div>
              <div className='inputGroupContact'>
                <input name="lastName" type="text" size="20" onChange={this.addLastName} required/>
                <span>Last Name</span>
              </div>
            </div>
            <div id="contactFormEmail" className="formRowContact">
              <h5>EMAIL ADDRESS</h5>
              <input name="email" type="email" size="20" onChange={this.addEmail} required/>
            </div>
            <div id="contactFormPhone" className="formRowContact">
              <h5>PHONE</h5>
              <div className='inputGroupContact'>
                <input className="numberInput" name="areaCode" type="text" size="3" maxLength="3" onChange={this.addAreaPhone} />
                <span>(###)</span>
              </div>
              <div className='inputGroupContact'>
                <input className="numberInput" name="firstThree" type="text" size="3" maxLength="3" onChange={this.addThreeDigPhone} />
                <span>###</span>
              </div>
              <div className='inputGroupContact'>
                <input className="numberInput" name="lastFour" type="text" size="4" maxLength="4" onChange={this.addFourDigPhone}/>
                <span>####</span>
              </div>
            </div>
            <div id="contactFormMessage" className='formRowContact'>
              <h5>MESSAGE</h5>
              <textarea name="message" type="text" maxLength="500" onChange={this.addMessage}/>
            </div>
            <button onClick={this.sendInfo}>SUBMIT</button>
          </form>
        </div>
    </div>
    )
  }
}

const mapStateToProps = ({}) => ({});
const mapDispatchToProps = (dispatch) => ({
	supplyContactFormInfo: (info) => dispatch(addContactFormInfo(info))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
