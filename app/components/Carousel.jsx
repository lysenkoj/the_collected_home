import React, { Component } from 'react';
import { Carousel, Image } from 'react-bootstrap';

/* -----------------    COMPONENT     ------------------ */
export default class DumbCarousel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Carousel className='carouselContainer'>
        <Carousel.Item className="carouselImgContainer">
          <Image className="carouselImg" src="/images/front-page-1.jpg" responsive/>
        </Carousel.Item>
        <Carousel.Item className="carouselImgContainer">
          <Image className="carouselImg" src="/images/front-page-2.jpg" responsive/>
        </Carousel.Item>
        <Carousel.Item className="carouselImgContainer">
          <Image className="carouselImg" src="/images/front-page-3.jpg" responsive/>
        </Carousel.Item>
      </Carousel>
    )
  }
}


