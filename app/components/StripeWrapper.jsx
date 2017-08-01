import React, { Component } from 'react';
import makeAsyncScriptLoader from 'react-async-script'
import { browserHistory } from 'react-router';
require('APP/.env.js');




/* -----------------     COMPONENT     ------------------ */

class StripeWrapper extends Component{
  constructor(props){
    super(props);

  }

  componentWillReceiveProps(props) {
    if(!this.props.Stripe && props.Stripe) {
      console.log('Got Stripe - 1 time only as next time it will come in the constructor')
    }
  }

    render() {
      return (
        <div>
        {(this.props.Stripe) ? console.log('STRIPE INTEGRATED'): console.log('STRIPE FAILED TO INTEGRATE')}
        </div>
      );
    }
};


export default makeAsyncScriptLoader(StripeWrapper, "https://js.stripe.com/v3/", {
    globalName: 'Stripe',
});