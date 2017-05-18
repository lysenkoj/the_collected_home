import React, { Component } from 'react';


export default class Footer extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div>
        <footer className="footer">
            <div className="subscribeContainer">
              <h5 id="subscribe">SUBSCRIBE</h5>
              <form className="newsletterForm">
                <input id="newsletterInput"type="text" placeholder="Enter Your Email Address..."></input>
                <button id="newsletterButton" type="submit">SIGN UP</button>
              </form>
              <p id="newsletterPerk">Sign up and recieve first dibs on all new product</p>
            </div>
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
       </footer>
      </div>
    )


  }
}