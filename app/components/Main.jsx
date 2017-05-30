import React, { Component } from 'react';
import Carousel from './Carousel';
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
        <Link to="/Ottomans and Stools" className="categoryFeature1">
          <img className="featuredPhoto" src="images/featuredTemp.jpg"/>
          <div className="label">
            <span>SHOP NOW</span>
          </div>
        </Link>
        <Link to="/Table Lamps" className="categoryFeature1">
          <img className="featuredPhoto" src="images/featuredTemp.jpg"/>
          <div className="label">
            <span>SHOP NOW</span>
          </div>
        </Link>
        <Link to="/Pillows and Shams" className="categoryFeature1">
          <img className="featuredPhoto" src="images/featuredTemp.jpg"/>
          <div className="label">
            <span>SHOP NOW</span>
          </div>
        </Link>
      </div>
    )
  }
}