import React, { Component } from 'react';
import { Link } from 'react-router';

/* -----------------    COMPONENT     ------------------ */
export default class FeaturedLook extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="featuredContainer">
        <Link to="/featured">
        {/*THE IMG WILL HAVE THE NAME OF THE LOOK AND SHOP NOW ON IT*/}
          <img src="images/Image-Coming-Soon-Placeholder.png"/>
        </Link>
      </div>
    )
  }
}