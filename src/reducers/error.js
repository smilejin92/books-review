import { SET_ERROR, CLEAR_ERROR } from '../actions';

const initialState = null;

export default function error(state = initialState, action) {
  if (action.type === SET_ERROR) {
    return action.error;
  } else if (action.type === CLEAR_ERROR) {
    return null;
  }
  return state;
}
