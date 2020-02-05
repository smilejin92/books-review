import React, { useState, useEffect } from 'react';
import withAuth from '../hocs/withAuth.js';
import HeaderContainer from '../components/containers/HeaderContainer';
import BooksContainer from '../components/containers/BooksContainer';
import AddBookFormContainer from '../components/containers/AddBookFormContainer';
import { setBooksThunk } from '../actions/index.js';
import { connect } from 'react-redux';

function MyBooks({ token, loading, error, setBooks }) {
  const [bookForm, setBookForm] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await setBooks(token);
      } catch {}
    })();
  }, [token, setBooks]);

  function handleAddButton() {
    setBookForm(!bookForm);
  }

  return (
    <>
      <HeaderContainer />
      <section>
        <h2>내 서재 {loading && <span>로딩 중...</span>}</h2>
        {error ? (
          <div>요청에 실패했습니다.</div>
        ) : (
          <>
            <BooksContainer />
            <div>
              <button onClick={handleAddButton}>
                {bookForm ? '취소' : '책 추가하기'}
              </button>
              {bookForm && <AddBookFormContainer />}
            </div>
          </>
        )}
      </section>
    </>
  );
}

function mapStateToProps(state) {
  return {
    token: state.token,
    loading: state.loading,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setBooks: token => {
      dispatch(setBooksThunk(token));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(MyBooks));
