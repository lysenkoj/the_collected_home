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
		this.setState({ firstName })
  }

  addLastName(evt){
    evt.preventDefault();
    let lastName = evt.target.value
		this.setState({ lastName })
  }

  addEmail(evt){
    evt.preventDefault();
    let email = evt.target.value
		this.setState({ email })
  }

  addAreaPhone(evt){
    evt.preventDefault();
    let areaCode = evt.target.value;
		this.setState({ areaCode })
  }

  addThreeDigPhone(evt){
    evt.preventDefault();
    let threeDig = evt.target.value;
		this.setState({ threeDig })
  }

  addFourDigPhone(evt){
    evt.preventDefault();
    let fourDig = evt.target.value;
		this.setState({ fourDig })
  }

  sendInfo(){
    let info = this.state.client;

    this.props.supplyFormInfo(info);
  }

  render() {
    return(
      <div className="designContainer">
        <h3>CLARICE KING DESIGN</h3>
        <h4>Interior Design and Decorating Services</h4>
        <Carousel/>
        <h4>LET'S MEET!</h4>
        <h5>Fill out the form below to get started. We'll send you a follow up email asking you for the information we need before our first phone call!</h5>
        <div className="designFormContainer">
          <form className="designForm">
            <div id="designFormName" className="formRow">
              <h5>NAME</h5>
              <div className='inputGroup'>
                <input name="firstName" type="text" size="20" onChange={this.addFirstName}/>
                <span>First Name</span>
              </div>
              <div className='inputGroup'>
                <input name="lastName" type="text" size="20" onChange={this.addLastName}/>
                <span>Last Name</span>
              </div>
            </div>
            <div id="designFormEmail" className="formRow">
              <h5>EMAIL ADDRESS</h5>
              <input name="email" type="text" size="20" onChange={this.addEmail}/>
            </div>
            <div id="designFormPhone" className="formRow">
              <h5>PHONE</h5>
              <div  className='inputGroup'>
                <input className="numberInput" name="areaCode" type="text" size="3" onChange={this.addAreaPhone}/>
                <span>(***)</span>
              </div>
              <div className='inputGroup'>
                <input className="numberInput" name="firstThree" type="text" size="3" onChange={this.addThreeDigPhone}/>
                <span>***</span>
              </div>
              <div className='inputGroup'>
                <input className="numberInput" name="lastFour" type="text" size="4" onChange={this.addFourDigPhone}/>
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