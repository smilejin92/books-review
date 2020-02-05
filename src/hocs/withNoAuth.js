import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function withNoAuth(Component) {
  function WrappedComponent(props) {
    const token = useSelector(state => state.token);

    if (token) return <Redirect to="/" />;
    return <Component {...props} />;
  }

  WrappedComponent.displayName = `withNoAuth(${Component.name})`;

  return WrappedComponent;
}

export default withNoAuth;
