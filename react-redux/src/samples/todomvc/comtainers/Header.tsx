import { connect } from 'react-redux';
import Header from '../components/Header';
import { addTodo } from '../actions';

const mapDispatchToProps = {
  addTodo,
}

export default connect(null, mapDispatchToProps)(Header);