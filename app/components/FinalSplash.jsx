import React, { Component } from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';


export default class FinalSplash extends Component {
  constructor() {
    super()
    this.state = {
      chairs: []
    }


    // this.countdown = this.countdown.bind(this);
    this.setChairs = this.setChairs.bind(this);
    this.revealLogin = this.revealLogin.bind(this);
    this.addUser = this.addUser.bind(this);
    this.addPassword = this.addPassword.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  setChairs(){
    for(let i = 0; i < 50; i++){
      this.state.chairs.push(Math.floor(Math.random() * 70) + 1);
    }
  }


  // countdown(){
  //   const countDownDate = new Date("Aug 1, 2017 08:00:00").getTime();
  //   let x = setInterval(function() {
  //     let now = new Date().getTime();
  //     let distance = countDownDate - now;
  //   // Time calculations for days, hours, minutes and seconds
  //     let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // // Display the result in the element
  //     let elDays = document.getElementById("days");
  //     let elHours = document.getElementById("hours");
  //     let elMin = document.getElementById("minutes");
  //     let elSec = document.getElementById("seconds");

  //     if(elDays && elHours && elMin && elSec){
  //       elDays.innerHTML = days;
  //       elHours.innerHTML = hours;
  //       elMin.innerHTML = minutes;
  //       elSec.innerHTML = seconds;
  //     } else{
  //       clearInterval(x);
  //     }

  // // If the count down is finished, write some text
  //     if (distance < 0) {
  //       clearInterval(x);
  //       document.getElementById("demo").innerHTML = "EXPIRED";
  //     }
  //   }, 1000);
  // }

  componentWillMount(){
    const body = document.querySelector('body');
    body.style.paddingBottom = 0;
    // return this.countdown();
    return this.setChairs();
  }

  revealLogin(){
    const logIn = document.querySelector('div#secretLogInContainer');

    (logIn.style.display === 'flex') ? logIn.style.display = 'none' : logIn.style.display = 'flex';
  }

  addUser(evt){
    evt.preventDefault();
    const user = evt.target.value;
    this.setState((previousState) => {
      previousState.user = user;
      return previousState;
    });
  }

  addPassword(evt){
    evt.preventDefault();
    const password = evt.target.value;
    this.setState((previousState) => {
      previousState.password = password;
      return previousState;
    });
  }

  redirect(evt){
    evt.preventDefault();
    if(this.state.password === process.env.ADMIN_PW && this.state.user === 'admin'){
      browserHistory.push('/root');
    }else{
      alert('PLEASE ENTER A VALID PASSWORD')
    }
  }

  render() {
    return (
      <div className="splashContainer">
        <div className="backgroundContainer">
          {
            this.state.chairs.map((chair, index) => (
              (index%7 === 0) ?
              <div className="backgroundChair" id={`chair${index}`} key={index}>
                <img className="flipped" src={`/images/splashChairs/c${chair}.png`}/>
              </div> :
              <div className="backgroundChair" id={`chair${index}`} key={index}>
                <img src={`/images/splashChairs/c${chair}.png`}/>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}