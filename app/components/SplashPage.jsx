import React, { Component } from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';


export default class SplashPage extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      password: null
    }

    this.countdown = this.countdown.bind(this);
    this.revealLogin = this.revealLogin.bind(this);
    this.addUser = this.addUser.bind(this);
    this.addPassword = this.addPassword.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  countdown(){
    const countDownDate = new Date("Aug 1, 2017 08:00:00").getTime();
    let x = setInterval(function() {
      let now = new Date().getTime();
      let distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element
      let elDays = document.getElementById("days");
      let elHours = document.getElementById("hours");
      let elMin = document.getElementById("minutes");
      let elSec = document.getElementById("seconds");

      if(elDays && elHours && elMin && elSec){
        elDays.innerHTML = days;
        elHours.innerHTML = hours;
        elMin.innerHTML = minutes;
        elSec.innerHTML = seconds;
      } else{
        clearInterval(x);
      }

  // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  }

  componentWillMount(){
    const body = document.querySelector('body');
    body.style.paddingBottom = 0;
    return this.countdown();
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
        <div className='splashLogoContainer'>
          <div>CLARICE KING</div>
          <div id="tagline">The Collected Home</div>
        </div>
        <div id='secretLogInContainer'>
          <form onSubmit={this.redirect}>
          <div>
            <h5>USER</h5>
            <input name="user" size="20" placeholder='User' onChange={this.addUser}/>
          </div>
          <div>
            <h5>PASSWORD</h5>
            <input name="password" type="password" size="20" placeholder='Password' onChange={this.addPassword}/>
          </div>
          <button>LOG IN</button>
          </form>
        </div>
        <div id="spacerTop"/>
        <h1 className='splashTitle'>WE ARE COMING SOON</h1>
        <div className='countdownContainer'>
          <div className='spashCountdown'>
            <h4>DAYS</h4>
            <h1 id='days'></h1>
          </div>
          <div className='spashCountdown'>
            <h4>HOURS</h4>
            <h1 id='hours'></h1>
          </div>
          <div className='spashCountdown'>
            <h4>MINUTES</h4>
            <h1 id='minutes'></h1>
          </div>
          <div className='spashCountdown'>
            <h4>SECONDS</h4>
            <h1 id='seconds'></h1>
          </div>
        </div>
        <div className='splashSubscribeContainer'>
          <h3>BE THE FIRST TO KNOW</h3>
          <form action="//clariceking.us15.list-manage.com/subscribe/post?u=6210c56d9e29bc8b0ad547585&amp;id=8eaec4d2f9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate className="validate">
            <input id="splashInput" type="email" name='EMAIL' placeholder="email" required/>
            <button className ="searchBtn" type="submit" name="subscribe">
              <div className="arrow-right"></div>
            </button>
          </form>
        </div>
        <div className='splashSocial'>
          <a href="mailto:info@clariceking.com">
            <img src='images/email.png'/>
          </a>
          <a href='https://www.instagram.com/claricekinghome/'>
            <img src='images/instagram.png'/>
          </a>
          <a href='https://www.facebook.com/ClariceKingHome/'>
            <img src='images/facebook.png'/>
          </a>
          <a href='https://www.pinterest.com/claricekinghome/'>
            <img src='images/pinterest.png'/>
          </a>
          <a href='https://www.pinterest.com/claricekinghome/'>
            <img src='images/twitter.png'/>
          </a>
        </div>
        <div id='hiddenLogin' onClick={this.revealLogin}>
        </div>
      </div>
    )
  }
}