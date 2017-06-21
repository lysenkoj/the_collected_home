import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Footer extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div>
        <footer className="footer">
          <div className="footerTop">
            <div className="footerLinks">
              <div className="interiorDesign">
                <h5 className="footerTitle">INTERIOR DESIGN</h5>
                <Link to='/design' id="portfolioLink">
                  <h6 className="footerLink">DESIGN SERVICES</h6>
                </Link>
                <a id="portfolioLink"href="https://www.claricekingdesigns.com/">
                  <h6 className="footerLink">PORTFOLIO</h6>
                </a>
              </div>
              <div className="aboutUs">
                <h5 className="footerTitle">ABOUT US</h5>
                <Link to="/story">
                  <h6 className="footerLink">OUR STORY</h6>
                </Link>
                <Link to="/press">
                  <h6 className="footerLink">PRESS</h6>
                </Link>
                <Link to="/testimonials">
                  <h6 className="footerLink">TESTIMONIALS</h6>
                </Link>
              </div>
              <div className="help">
                <h5 className="footerTitle">HELP</h5>
                <Link to="/contact">
                  <h6 className="footerLink">CONTACT</h6>
                </Link>
                <Link to="/faq">
                  <h6 className="footerLink">FAQ</h6>
                </Link>
                <Link to="/shipping_info">
                  <h6 className="footerLink">SHIPPING & RETURNS</h6>
                </Link>
              </div>
            </div>

            <div className="subscribeContainer">
              <h5 id="subscribe">SUBSCRIBE</h5>
              <form action="//clariceking.us15.list-manage.com/subscribe/post?u=6210c56d9e29bc8b0ad547585&amp;id=8eaec4d2f9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate className="newsletterForm validate">
                <input id="newsletterInput" type="email" name='EMAIL' placeholder="Enter Your Email Address..." required></input>
                <button id="newsletterButton" name="subscribe" type="submit">SIGN UP</button>
              </form>
              <p id="newsletterPerk">Sign up and recieve first dibs on all new product</p>
            </div>
          </div>

          <div className="footerBottom">
            <ul className="socialList">
              <li>
                <a href="https://www.claricekingdesigns.com/">
                  <img className="socialIcon" src="/images/CKDLogo.png" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/claricekinghome/">
                  <img className="socialIcon" src="/images/instaIcon.png" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/ClariceKingHome/">
                  <img className="socialIcon" src="/images/facebookIcon.jpg" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/ClariceKingHome/">
                  <img className="socialIcon" src="/images/twitterIcon.png" />
                </a>
                <a href="https://www.pinterest.com/claricekinghome/">
                  <img className="socialIcon" src="/images/pinterestIcon.png" />
                </a>
              </li>
            </ul>
          </div>
       </footer>
      </div>
    )


  }
}