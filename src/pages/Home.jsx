import React from 'react';
import withAuth from '../hocs/withAuth';
import Header from '../components/Header.jsx';

function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h2>홈</h2>
        </section>
      </main>
    </>
  );
}

export default withAuth(Home);
