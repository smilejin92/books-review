import { connect } from 'react-redux';
import { addBookThunk } from '../../actions';
import AddBookForm from '../AddBookForm';

function mapStateToProps(state) {
  return {
    token: state.token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addBook: (token, book) => {
      dispatch(addBookThunk(token, book));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBookForm);
