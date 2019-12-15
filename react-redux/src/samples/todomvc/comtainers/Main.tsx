import { connect } from 'react-redux';
import Main from '../components/Main';
import {completeAllTodos, clearCompleted} from '../actions';
import { getCompletedTodoCount } from '../selectors';
import { StateTree } from '../types';

const mapStateToProps = (state: StateTree, ownProps) => ({
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state),
});

const mapDispatchToProps = {
  completeAllTodos,
  clearCompleted,
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);