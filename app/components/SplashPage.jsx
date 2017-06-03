import React, { Component } from 'react';
import {Link} from 'react-router';


export default class SplashPage extends Component {
  constructor() {
    super()

    this.countdown = this.countdown.bind(this);
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
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;

  // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  }

  componentWillMount(){
    return this.countdown();
  }

  render() {
    return (
      <div className="splashContainer">
        <div className='splashLogoContainer'>
          <div>CLARICE KING</div>
          <div id="tagline">The Collected Home</div>
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
          <form>
            <input id="splashInput" type="text" placeholder="email"/>
            <button className ="searchBtn" type="submit">
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
      </div>
    )
  }
}