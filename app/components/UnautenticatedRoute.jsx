import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ component: C, props: cProps, ...rest }) => (
  <Route {...rest} render={props => (
    cProps.userToken === null
      ? <C {...props} {...cProps} />
      : <Redirect to="/" />
  )}/>
);