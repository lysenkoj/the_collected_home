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
    this.swap = this.swap.bind(this);
    this.animateBackground = this.animateBackground.bind(this);
    this.iconSwapBlue = this.iconSwapBlue.bind(this);
    this.iconSwapBlack = this.iconSwapBlack.bind(this);
  }

  setChairs(){
    for(let i = 0; i < 50; i++){
      let num = Math.floor(Math.random() * 70) + 1;
      if(this.state.chairs.indexOf(num) < 0){
        this.state.chairs.push(num);
      }else{
        i--;
      }
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
    this.setChairs();
    return this.animateBackground();
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

  swap(){
    let selectedChairs = [];
    for(let i = 0; i < Math.floor(Math.random() * 4); i++){
      let num = Math.floor(Math.random() * 50);
      let newImg = Math.floor(Math.random() * 70) + 1;
      if(selectedChairs.indexOf(document.querySelector(`div#chair${num}`))){
        document.getElementById(`chairImg${num}`).src = `/images/splashChairs/c${newImg}.png`;
        selectedChairs.push(document.querySelector(`div#chair${num}`));
      } else{
        i--;
      }
    }
  }

  animateBackground(){
    let x = setInterval(() => {
      this.swap();
    }, 1000)
  }

  iconSwapBlue(evt){
    evt.currentTarget.childNodes[0].src = evt.currentTarget.childNodes[0].src.slice(0, -4) + 'Blue.svg';
  }

  iconSwapBlack(evt){
    evt.currentTarget.childNodes[0].src = evt.currentTarget.childNodes[0].src.slice(0, -8) + '.svg';
  }

  render() {
    return (
      <div className="splashContainer">
        <div className="foregroundContainer">
          <div id="cornerRibbon">
            <img src="/images/cornerBanner.svg"/>
          </div>
          <div className='splashLogoContainer'>
            <div>CLARICE KING</div>
            <div id="tagline">The Collected Home</div>
          </div>
          <div className='splashSubscribeContainer'>
            <form action="//clariceking.us15.list-manage.com/subscribe/post?u=6210c56d9e29bc8b0ad547585&amp;id=8eaec4d2f9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate className="validate">
              <input id="splashInput" type="email" name='EMAIL' placeholder="E-mail Address" required/>
              <button className ="searchBtn" type="submit" name="subscribe">
                <h5>SIGN UP!</h5>
              </button>
            </form>
          </div>
          <div className='splashSocial'>
            <a href="mailto:info@clariceking.com" onMouseEnter={this.iconSwapBlue} onMouseLeave={this.iconSwapBlack}>
              <img src='images/email.svg'/>
            </a>
            <a href='https://www.instagram.com/claricekinghome/' onMouseEnter={this.iconSwapBlue} onMouseLeave={this.iconSwapBlack}>
              <img src='images/instagram.svg'/>
            </a>
            <a href='https://www.facebook.com/ClariceKingHome/' onMouseEnter={this.iconSwapBlue} onMouseLeave={this.iconSwapBlack}>
              <img src='images/facebook.svg'/>
            </a>
            <a href='https://www.pinterest.com/claricekinghome/' onMouseEnter={this.iconSwapBlue} onMouseLeave={this.iconSwapBlack}>
              <img src='images/pinterest.svg'/>
            </a>
            <a href='https://www.pinterest.com/claricekinghome/' onMouseEnter={this.iconSwapBlue} onMouseLeave={this.iconSwapBlack}>
              <img src='images/twitter.svg'/>
            </a>
        </div>
        </div>
        <div className="backgroundContainer">
          {
            this.state.chairs.map((chair, index) => (
              (index%7 === 0) ?
              <div className="backgroundChair" id={`chair${index}`} key={index}>
                <img id={`chairImg${index}`} className="flipped" src={`/images/splashChairs/c${chair}.png`}/>
              </div> :
              <div className="backgroundChair" id={`chair${index}`} key={index}>
                <img id={`chairImg${index}`} src={`/images/splashChairs/c${chair}.png`}/>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}