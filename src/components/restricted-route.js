import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RestrictedRoute = ({
  component: InnerComponent,
  isLoggedIn,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isLoggedIn ? <InnerComponent {...props} /> : <Redirect to={redirectTo} />
    }
  />
);

export default RestrictedRoute;
