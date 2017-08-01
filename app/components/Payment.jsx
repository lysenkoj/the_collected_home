import React, { Component } from 'react';
import { ReactScriptLoaderMixin } from 'react-script-loader';
import { browserHistory } from 'react-router';
import StripeWrapper from './StripeWrapper';
require('APP/.env.js');

const stripe = Stripe(process.env.STRIPE_PUBLISHABLE_KEY);
const elements = stripe.elements();
const card = elements.create('card');

// Add an instance of the card UI component into the `card-element` <div>




/* -----------------     COMPONENT     ------------------ */

export default class Payment extends Component{
  constructor(props){
    super(props);
    this.state = {
        stripe: null
      }

    this.sendPayment = this.sendPayment.bind(this);
  }

  componentDidMount(){
    card.mount('#card-element');
    // this.setState((previousState) => {
    //   previousState.stripe = window.Stripe(process.env.STRIPE_PUBLISHABLE_KEY);
    //   return previousState;
    // });
    // console.log(this.state)
  }

  sendPayment(evt) {
    	evt.preventDefault();
    	this.createToken()
    }

  stripeResponseHandler(status, response) {
    if (response.error) {
        console.log('STRIPE ERROR', response.error);
    } else {
    		console.log('STRIPE RESPONSE: ', response);
    		var token = response.id;
    		browserHistory.push(`/checkout/confirmation/${token}`);
    }
  }



createToken() {

  function stripeTokenHandler(token) {
  // Insert the token ID into the form so it gets submitted to the server
  let form = document.getElementById('payment-form');
  let hiddenInput = document.createElement('input');
  hiddenInput.setAttribute('type', 'hidden');
  hiddenInput.setAttribute('name', 'stripeToken');
  hiddenInput.setAttribute('value', token.id);
  form.appendChild(hiddenInput);

  // Submit the form
  browserHistory.push(`/checkout/confirmation/${token}`);
  }

  stripe.createToken(card).then(function(result) {
    if (result.error) {
      // Inform the user if there was an error
      let errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
    } else {
      // Send the token to your server
      stripeTokenHandler(result.token);
    }
  });
};

    render() {
      return (
     		<div className="paymentContainer">
          {/*<StripeWrapper />*/}
          <form method="post" id="payment-form" onSubmit={this.sendPayment}>
            <div className="form-row">
              <label htmlFor="card-element">
                Credit or debit card
              </label>
              <div id="card-element">
              </div>
              <div id="card-errors" role="alert"></div>
            </div>

            <input type="submit" className="submit" value="Submit Payment"/>
          </form>
        <div>
          <p> You will be able to review your order on the next screen</p>
        </div>
        </div>
      );
    }
}

