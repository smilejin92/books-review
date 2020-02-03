import React from 'react';
import withAuth from '../hocs/withAuth';
import Header from '../components/Header';
import { connect } from 'react-redux';

function Home({ token }) {
  return (
    <>
      <Header token={token} />
      <main>
        <section>
          <h2>홈</h2>
        </section>
      </main>
    </>
  );
}

function mapStateToProps(state) {
  return {
    token: state.token,
  };
}

export default connect(mapStateToProps)(withAuth(Home));
