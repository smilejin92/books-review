import React from 'react';

function Books({ books }) {
  return (
    <ul>
      {books.map(book => (
        <li key={book.bookId}>{book.title}</li>
      ))}
    </ul>
  );
}

export default Books;
