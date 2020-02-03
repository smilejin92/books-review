import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { removeToken, setBooks } from '../actions';
import { connect } from 'react-redux';

function Header({ token, removeToken, setBooks }) {
  async function handleClick() {
    try {
      await axios.delete('https://api.marktube.tv/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem('token');
      removeToken();
      setBooks([]);
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
            <button onClick={handleClick}>로그아웃</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    removeToken: () => {
      dispatch(removeToken());
    },
    setBooks: books => {
      dispatch(setBooks(books));
    },
  };
}

export default connect(null, mapDispatchToProps)(Header);
