import React, { Component } from 'react';
import { Link } from 'react-router-dom';


/* -----------------    COMPONENT     ------------------ */
export default class FAQ extends Component {
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
      <h1 id="faqTitle">FREQUENTLY ASKED QUESTIONS</h1>
      <div className='toggleInfo'>
        <button className='toggleButton' onClick={this.toggleButton}>
          <h3>PRODUCTS</h3>
          <div className="dropArrow" style={{borderTop: '10px solid black'}}/>
        </button>
        <div className='toggleContent'>
          <h4>WHAT IF I HAVE QUESTIONS ABOUT YOUR PRODUCTS?</h4>
          <p>Please contact us at info@clariceking.com or call us at (203)123-4567 between the hours of 9 am – 5:30pm EST. </p>
        </div>
      </div>
      <div className='toggleInfo'>
        <button className='toggleButton' onClick={this.toggleButton}>
          <h3>ORDERS AND SHIPMENTS</h3>
          <div className="dropArrow" style={{borderTop: '10px solid black'}}/>
        </button>
        <div className='toggleContent'>
          <h4>HOW LONG WILL IT TAKE FOR MY ITEM TO SHIP?</h4>
          <p>Our shipping times vary, depending on the contents of your order.</p>
          <h4>CAN I GET AN UPDATE ON MY ORDER STATUS?</h4>
          <p>Our ship times vary, and we thank you for your patience! You will receive a tracking number as soon as one is provided by our fulfillment teams or vendors.</p>
        </div>
      </div>
      <div className='toggleInfo'>
        <button className='toggleButton' onClick={this.toggleButton}>
          <h3>RETURNS AND EXCHANGES</h3>
          <div className="dropArrow" style={{borderTop: '10px solid black'}}/>
        </button>
        <div className='toggleContent'>
          <h4>WHAT IS YOUR RETURN POLICY?</h4>
        </div>
      </div>
    </div>
    )
  }
}

