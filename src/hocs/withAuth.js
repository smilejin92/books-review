import React from 'react';
import { Redirect } from 'react-router-dom';

function withAuth(Component) {
  function WrappedComponent(props) {
    const token = localStorage.getItem('token');
    // component에 접근했을 때 token이 없다면 signin page로 redirect
    if (!token) return <Redirect to="/signin" />;
    // token이 있다면 component에 token을 새로운 prop으로 bind해서 새로운 component를 반환
    return <Component {...props} token={token} />;
  }
  WrappedComponent.displayName = `withAuth(${Component.name})`;
  return WrappedComponent;
}

export default withAuth;
