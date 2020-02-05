import React from 'react';
import withAuth from '../hocs/withAuth';
import HeaderContainer from '../components/containers/HeaderContainer';

function Home() {
  return (
    <>
      <HeaderContainer />
      <main>
        <section>
          <h2>홈</h2>
        </section>
      </main>
    </>
  );
}

export default withAuth(Home);
