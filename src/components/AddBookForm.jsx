import React, { useRef } from 'react';
import axios from 'axios';
import withAuth from '../hocs/withAuth';

function AddBookForm({ token, setBooks }) {
  const titleRef = useRef();
  const messageRef = useRef();
  const authorRef = useRef();
  const urlRef = useRef();

  function resetInput() {
    titleRef.current.value = '';
    messageRef.current.value = '';
    authorRef.current.value = '';
    urlRef.current.value = '';
  }

  async function handleAddForm(e) {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        'https://api.marktube.tv/v1/book',
        {
          title: titleRef.current.value || '',
          message: messageRef.current.value || '',
          author: authorRef.current.value || '',
          url: urlRef.current.value || '',
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setBooks(prev => [...prev, data]);
      resetInput();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <form onSubmit={handleAddForm}>
      <fieldset>
        <legend>책 추가 양식</legend>
        <label htmlFor="title">제목</label>
        <input type="text" id="title" ref={titleRef} />
        <label htmlFor="message">메시지</label>
        <input type="text" id="message" ref={messageRef} />
        <label htmlFor="author">작가</label>
        <input type="text" id="author" ref={authorRef} />
        <label htmlFor="url">링크</label>
        <input type="text" id="url" ref={urlRef} />
        <button type="submit">제출</button>
      </fieldset>
    </form>
  );
}

export default withAuth(AddBookForm);
