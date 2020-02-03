import React from 'react';
import { Redirect } from 'react-router-dom';

function withAuth(Component) {
  function WrappedComponent(props) {
    if (!props.token) return <Redirect to="/signin" />;
    return <Component {...props} />;
  }

  WrappedComponent.displayName = `withAuth(${Component.name})`;

  return WrappedComponent;
}

export default withAuth;
