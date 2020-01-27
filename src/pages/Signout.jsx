import React from 'react';
import { Redirect } from 'react-router-dom';

export default function Signout() {
  localStorage.removeItem('token');
  return <Redirect to="/signin" />;
}
