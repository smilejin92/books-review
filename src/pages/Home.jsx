import React from 'react';
// import { NavLink } from 'react-router-dom';
// import axios from 'axios';
import withAuth from '../hocs/withAuth';
import Header from '../components/Header';

const Home = ({ token, setToken }) => (
  <>
    <Header token={token} setToken={setToken} />
    <main>
      <section>
        <h2>홈</h2>
      </section>
    </main>
  </>
);

export default withAuth(Home);
