import React, { Component } from 'react';
import { Link } from 'react-router';


/* -----------------    COMPONENT     ------------------ */
export default class ShippingInfo extends Component {
  constructor(props) {
    super(props);

    this.toggleButton = this.toggleButton.bind(this);
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  toggleButton(evt){
    evt.preventDefault();

    const arrow = evt.currentTarget.childNodes[1];
    const toggledContent = evt.currentTarget.parentNode.childNodes[1];

    let swapUp = function(){
      arrow.style.borderTop = 0;
      arrow.style.borderBottom = '10px solid black';
    }

    let swapDown = function(){
      arrow.style.borderBottom = 0;
      arrow.style.borderTop= '10px solid black';
    }

    arrow.style.borderTop === '10px solid black' ? swapUp() : swapDown();
    toggledContent.style.display === 'flex' ? toggledContent.style.display = 'none' : toggledContent.style.display = 'flex';

  }

  render() {
    return(
    <div className='faqContainer'>
      <h1 id="shippingTitle">SHIPPING & RETURNS</h1>
      <div className='toggleInfo'>
        <button className='toggleButton' onClick={this.toggleButton}>
          <h3>SHIPPING INFO</h3>
          <div className="dropArrow" style={{borderTop: '10px solid black'}}/>
        </button>
        <div className='toggleContent'>
        </div>
      </div>
      <div className='toggleInfo'>
        <button className='toggleButton' onClick={this.toggleButton}>
          <h3>GENERAL RETURNS</h3>
          <div className="dropArrow" style={{borderTop: '10px solid black'}}/>
        </button>
        <div className='toggleContent'>
        </div>
      </div>
    </div>
    )
  }
}

