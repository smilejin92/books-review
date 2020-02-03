export const ADD_BOOK = 'ADD_BOOK';

export function addBook(book) {
  return { type: ADD_BOOK, book };
}

export const SET_BOOKS = 'SET_BOOKS';

export function setBooks(books) {
  return { type: SET_BOOKS, books };
}

export const SET_LOADING = 'SET_LOADING';

export function setLoading() {
  return { type: SET_LOADING };
}

export const END_LOADING = 'END_LOADING';

export function endLoading() {
  return { type: END_LOADING };
}

export const SET_TOKEN = 'SET_TOKEN';

export function setToken(token) {
  return { type: SET_TOKEN, token };
}

export const REMOVE_TOKEN = 'REMOVE_TOKEN';

export function removeToken() {
  return { type: REMOVE_TOKEN };
}

export const SET_ERROR = 'SET_ERROR';

export function setError(error) {
  return { type: SET_ERROR, error };
}

export const CLEAR_ERROR = 'CLEAR_ERROR';

export function clearError(error) {
  return { type: CLEAR_ERROR };
}
