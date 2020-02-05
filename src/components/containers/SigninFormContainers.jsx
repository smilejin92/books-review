import { connect } from 'react-redux';
import { loginThunk } from '../../actions';
import SigninForm from '../SigninForm';

// SigninForm의 로직을 이 곳에서 해결.
// store에 connect한 SigninForm을 export
function mapStateToProps(state) {
  return {
    loading: state.loading,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (email, password) => {
      dispatch(loginThunk(email, password));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);
