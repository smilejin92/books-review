import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <h2>네비게이션</h2>
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
          <NavLink to="/signout" activeClassName="active">
            로그아웃
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
