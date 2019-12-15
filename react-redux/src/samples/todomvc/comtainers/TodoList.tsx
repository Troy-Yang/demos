import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as TodoActions from '../actions'
import { getFilteredTodos } from '../selectors';
import TodoList from '../components/TodoList';
import { StateTree } from '../types';

const mapStateToProps = (state :StateTree, ownProps) => ({
  filteredTodos: getFilteredTodos(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)