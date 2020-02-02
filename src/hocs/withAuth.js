import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function withAuth(Component) {
  function WrappedComponent(props) {
    const [token, setToken] = useState(localStorage.getItem('token'));

    // token이 없다면 signin page로 redirect
    if (!token) return <Redirect to="/signin" />;
    // token이 있다면 component의 prop에 token을 bind하여 새로운 component를 반환
    return <Component {...props} token={token} setToken={setToken} />;
  }

  WrappedComponent.displayName = `withAuth(${Component.name})`;

  return WrappedComponent;
}

export default withAuth;
