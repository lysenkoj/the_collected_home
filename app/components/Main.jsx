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
        <div id="instafeed">
          <p>Praesent imperdiet semper tincidunt. Nullam id ultricies nunc. Nulla vel neque sodales, elementum augue quis, egestas ligula. Phasellus vulputate sem et hendrerit vehicula. Pellentesque sapien ex, porttitor sed porttitor non, posuere at libero. Nulla ut ante turpis. Etiam ultricies libero non metus gravida, eu sollicitudin magna dictum. Pellentesque volutpat velit feugiat accumsan pulvinar. Aliquam euismod imperdiet odio, at cursus libero faucibus id. Maecenas in tellus in sem fermentum convallis eu ut quam. Sed a urna non risus semper semper id vel orci. Sed eu sapien quis mi ullamcorper egestas non id ante. Morbi posuere gravida sem, dictum convallis ligula posuere dictum. Suspendisse pellentesque vitae orci nec bibendum.</p>
        </div>
      </div>
    )
  }
}