import React, { Component } from 'react';


export default class Footer extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div>
        <footer className="footer">
          <div className="footerContainer">
            <p className="text-muted">Place sticky footer content here.</p>
            <ul className="socialList">
              <li>
                <a href="https://www.claricekingdesigns.com/">
                  <img className="socialIcon" src="/images/CKDLogo.png" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <img className="socialIcon" src="/images/instaIcon.png" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <img className="socialIcon" src="/images/facebookIcon.jpg" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/">
                  <img className="socialIcon" src="/images/twitterIcon.png" />
                </a>
              </li>
            </ul>

          </div>
       </footer>
      </div>
    )


  }
}