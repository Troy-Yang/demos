import { connect } from 'react-redux';
import Main from '../components/Main';
import {completeAllTodo, clearCompleted} from '../actions'

const mapStateToProps = (state, ownProps) => ({
  todosCount: state.todos.length,
  completedCount: state.todos.filter(todo => todo.completed).length,
});

const mapDispatchToProps = {
  completeAllTodo,
  clearCompleted,
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);