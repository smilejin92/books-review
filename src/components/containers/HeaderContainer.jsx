import { connect } from 'react-redux';
import { logoutThunk } from '../../actions';
import Header from '../Header';

function mapStateToProps(state) {
  return {
    token: state.token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: token => {
      dispatch(logoutThunk(token));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
