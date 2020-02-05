import React from 'react';
import { NavLink } from 'react-router-dom';

function Header({ token, logout }) {
  async function handleClick() {
    try {
      await logout(token);
    } catch {}
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
            <button onClick={handleClick}>로그아웃</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
