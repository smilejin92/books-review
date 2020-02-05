import BookService from '../services/BookService';

export const ADD_BOOK = 'ADD_BOOK';
export const SET_BOOKS = 'SET_BOOKS';
export const SET_LOADING = 'SET_LOADING';
export const END_LOADING = 'END_LOADING';
export const SET_TOKEN = 'SET_TOKEN';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';
export const SET_ERROR = 'SET_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

const addBook = book => ({ type: ADD_BOOK, book });
const setBooks = books => ({ type: SET_BOOKS, books });
const setLoading = () => ({ type: SET_LOADING });
const endLoading = () => ({ type: END_LOADING });
const setToken = token => ({ type: SET_TOKEN, token });
const removeToken = () => ({ type: REMOVE_TOKEN });
const setError = error => ({ type: SET_ERROR, error });
const clearError = () => ({ type: CLEAR_ERROR });

// 비동기 액션
// 일반 액션 크리에이터는 payload를 받아 액션을 리턴
// Thunk 액션은 payload를 받아 함수를 리턴
// Thunk 액션이 리턴하는 함수의 첫번째 인자는 dispatch이다.
// Thunk 액션이 리턴하는 함수 내부에서 dispatch 앞뒤에 로직을 추가할 수 있다.
// Thunk 액션이 리턴하는 함수는 비동기 함수가 될 수 있다.
export function setBooksThunk(token) {
  return async function(dispatch) {
    try {
      dispatch(clearError());
      dispatch(setLoading());
      const { data } = await BookService.getBooks(token);
      dispatch(setBooks(data));
      dispatch(endLoading());
    } catch (error) {
      dispatch(endLoading());
      dispatch(setError(error));
      throw error;
    }
  };
}

export function addBookThunk(token, book) {
  return async function(dispatch) {
    try {
      dispatch(clearError());
      dispatch(setLoading());
      const { data } = await BookService.addBook(token, book);
      dispatch(addBook(data));
      dispatch(endLoading());
    } catch (error) {
      dispatch(endLoading());
      dispatch(setError(error));
      throw error;
    }
  };
}

export function loginThunk(email, password) {
  return async function(dispatch) {
    try {
      dispatch(clearError());
      dispatch(setLoading());
      const response = await BookService.login(email, password);
      const { token } = response.data;
      dispatch(endLoading());
      localStorage.setItem('token', token);
      dispatch(setToken(token));
    } catch (error) {
      dispatch(endLoading());
      dispatch(setError(error));
      throw error;
    }
  };
}

export function logoutThunk(token) {
  return async function(dispatch) {
    try {
      dispatch(clearError());
      dispatch(setLoading());
      // 질문 3. 여기서 store의 token에 바로 접근은 못하는가?
      await BookService.logout(token);
      localStorage.removeItem('token');
      dispatch(removeToken());
      dispatch(setBooks([]));
      dispatch(endLoading());
    } catch (error) {
      dispatch(endLoading());
      dispatch(setError(error));

      throw error;
    }
  };
}
