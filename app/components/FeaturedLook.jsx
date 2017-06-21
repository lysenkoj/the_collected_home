import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/* -----------------    COMPONENT     ------------------ */
export default class FeaturedLook extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="featuredContainer">
        <Link to="/featured" className="featuredLink">
        {/*THE IMG WILL HAVE THE NAME OF THE LOOK AND SHOP NOW ON IT*/}
          <img className="featuredPhoto" src="images/featuredTemp.jpg"/>
          <div className="label">
            <span>SHOP NOW</span>
          </div>
        </Link>
      </div>
    )
  }
}