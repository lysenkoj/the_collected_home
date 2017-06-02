import React, { Component } from 'react';
import { Link } from 'react-router';
import Carousel from './Carousel';

/* -----------------    COMPONENT     ------------------ */
export default class DesignServices extends Component {
  constructor(props) {
    super(props);
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
                <input name="firstName" type="text" size="20"/>
                <span>First Name</span>
              </div>
              <div className='inputGroup'>
                <input name="lastName" type="text" size="20"/>
                <span>Last Name</span>
              </div>
            </div>
            <div id="designFormEmail" className="formRow">
              <h5>EMAIL ADDRESS</h5>
              <input name="email" type="text" size="20"/>
            </div>
            <div id="designFormPhone" className="formRow">
              <h5>PHONE</h5>
              <div  className='inputGroup'>
                <input className="numberInput" name="areaCode" type="text" size="3"/>
                <span>(***)</span>
              </div>
              <div className='inputGroup'>
                <input className="numberInput" name="firstThree" type="text" size="3"/>
                <span>***</span>
              </div>
              <div className='inputGroup'>
                <input className="numberInput" name="lastFour" type="text" size="4"/>
                <span>****</span>
              </div>
            </div>
            <button>SUBMIT</button>
          </form>
        </div>
      </div>
    )
  }
}