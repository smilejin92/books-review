import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Header({ token, setToken }) {
  async function removeToken() {
    try {
      await axios.delete('https://api.marktube.tv/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem('token');
      setToken(false);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <header>
      <nav>
        <h2>내비게이션</h2>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              홈
            </NavLink>
          </li>
          <li>
            <NavLink to="/myBooks" activeClassName="active">
              내 서재
            </NavLink>
          </li>
          <li>
            <button onClick={removeToken}>로그아웃</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
