import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import withAuth from '../hocs/withAuth';
import { useEffect } from 'react';

function Signout({ token }) {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        axios.delete('https://api.marktube.tv/v1/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        localStorage.removeItem('token');
        setStatus(true);
      } catch (e) {
        console.error(e);
        setStatus(false);
      }
    })();
  }, [token]);

  return status ? <Redirect to="/signin" /> : <div>로그아웃 중...</div>;
}

export default withAuth(Signout);
