import React, { useState, useEffect } from 'react';
import axios from 'axios';
import withAuth from '../hocs/withAuth.js';
import Header from '../components/Header.jsx';
import AddBookForm from '../components/AddBookForm.jsx';

function MyBooks({ token }) {
  const [books, setBooks] = useState([]);
  const [addBook, setAddBook] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://api.marktube.tv/v1/book', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBooks(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [token]);

  const handleAddButton = () => {
    setAddBook(!addBook);
  };

  return (
    <>
      <Header />
      <section>
        <h2>내 서재</h2>
        <ul>
          {books.map(book => (
            <li key={book.bookId}>{book.title}</li>
          ))}
        </ul>
        <div>
          <button onClick={handleAddButton}>
            {addBook ? '취소' : '책 추가하기'}
          </button>
          {addBook && <AddBookForm setBooks={setBooks} />}
        </div>
      </section>
    </>
  );
}

export default withAuth(MyBooks);
