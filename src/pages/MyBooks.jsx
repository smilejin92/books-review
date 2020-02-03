import React, { useState, useEffect } from 'react';
import axios from 'axios';
import withAuth from '../hocs/withAuth.js';
import Header from '../components/Header.jsx';
import AddBookForm from '../components/AddBookForm.jsx';
import {
  addBook,
  setBooks,
  setLoading,
  endLoading,
  setError,
  clearError,
} from '../actions/index.js';
import { connect } from 'react-redux';

function MyBooks({
  token,
  books,
  loading,
  error,
  setBooks,
  addBook,
  setLoading,
  endLoading,
  setError,
  clearError,
}) {
  const [bookForm, setBookForm] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        clearError();
        setLoading();

        const { data } = await axios.get('https://api.marktube.tv/v1/book', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBooks(data);
        endLoading();
      } catch (e) {
        setError(e.message);
        endLoading();
      }
    })();
  }, [clearError, endLoading, setBooks, setError, setLoading, token]);

  function handleAddButton() {
    setBookForm(!bookForm);
  }

  return (
    <>
      <Header token={token} />
      <section>
        <h2>내 서재 {loading && <span>로딩 중...</span>}</h2>
        {error ? (
          <div>요청에 실패했습니다.</div>
        ) : (
          <>
            <ul>
              {books.map(book => (
                <li key={book.bookId}>{book.title}</li>
              ))}
            </ul>
            <div>
              <button onClick={handleAddButton}>
                {bookForm ? '취소' : '책 추가하기'}
              </button>
              {bookForm && <AddBookForm token={token} addBook={addBook} />}
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
    books: state.books,
    loading: state.loading,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setLoading: () => {
      dispatch(setLoading());
    },
    endLoading: () => {
      dispatch(endLoading());
    },
    setError: error => {
      dispatch(setError(error));
    },
    clearError: () => {
      dispatch(clearError());
    },
    setBooks: books => {
      dispatch(setBooks(books));
    },
    addBook: book => {
      dispatch(addBook(book));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(MyBooks));
