import React, { Component } from 'react';
import FeaturedLook from './FeaturedLook';
import {Link} from 'react-router';

// import Instafeed from 'instafeed.js';

// var feed = new Instafeed({
//         get: 'tagged',
//         tagName: 'awesome',
//         clientId: 'YOUR_CLIENT_ID'
//     });
//     feed.run();

export default class Main extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div className="main-container">
        <FeaturedLook />
        <div className="categoryFeatureContainer">
          <Link to="/Ottomans and Stools" className="categoryFeature">
            <img className="featuredPhoto" src="images/featuredTemp.jpg"/>
            <div className="label">
              <span>SHOP NOW</span>
            </div>
          </Link>
          <Link to="/design" className="designLink">
            <img className="featuredPhoto" src="images/featuredTemp.jpg"/>
            <div className="label">
              <span>DESIGN SERVICES</span>
            </div>
          </Link>
        </div>
         <div className="categoryFeatureContainer" id="row3">
          <Link to="/Ottomans and Stools" className="categoryFeature">
            <img className="featuredPhoto" src="images/featuredTemp.jpg"/>
            <div className="label">
              <span>SHOP NOW</span>
            </div>
          </Link>
          <Link to="/Ottomans and Stools" className="categoryFeature">
            <img className="featuredPhoto" src="images/featuredTemp.jpg"/>
            <div className="label">
              <span>SHOP NOW</span>
            </div>
          </Link>
          <Link to="/Ottomans and Stools" className="categoryFeature">
            <img className="featuredPhoto" src="images/featuredTemp.jpg"/>
            <div className="label">
              <span>SHOP NOW</span>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}