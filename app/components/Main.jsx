import React, { Component } from 'react';
import Carousel from './Carousel';
import FeaturedLook from './FeaturedLook';
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
      	{/*<Carousel /> maybe use later*/}
        <FeaturedLook />
        <div>{/* either more marketplace or links to featured items and categories*/}</div>
        <div id="instafeed"></div>
      </div>
    )
  }
}