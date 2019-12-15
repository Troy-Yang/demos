import { createSelector } from 'reselect'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters';
import { Todo, StateTree } from '../types';

const getTodos = (state: StateTree): Todo[] => state.todos;
const getFilter = (state: StateTree): string => state.visibilityFilter;

export const getFilteredTodos = createSelector(
  [getTodos, getFilter],
  (todos, filter) => {
    switch (filter) {
      case SHOW_ALL:
        return todos
      case SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }
)

export const getCompletedTodoCount = createSelector([ getTodos ], (todos: Todo[]) => {
  return todos.filter((todo: Todo) => todo.completed).length;
})