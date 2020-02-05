import { connect } from 'react-redux';
import Books from '../Books';

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

export default connect(mapStateToProps)(Books);
