import { SET_LOADING, END_LOADING } from '../actions';

const initialState = false;

export default function(state = initialState, action) {
  if (action.type === SET_LOADING) {
    return true;
  } else if (action.type === END_LOADING) {
    return false;
  }
  return state;
}
