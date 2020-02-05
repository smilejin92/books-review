import { ADD_BOOK, SET_BOOKS } from '../actions';

const initialState = [];

export default function books(state = initialState, action) {
  if (action.type === SET_BOOKS) {
    return action.books;
  } else if (action.type === ADD_BOOK) {
    return [...state, action.book];
  }
  return state;
}
