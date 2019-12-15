import * as types from '../constants/ActionTypes';
import { Todo } from '../types';

const initState: Todo[] = [];

const todos = (state = initState, action): Todo[]  => {
  switch(action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(maxId, todo.id), 0) + 1,
          text: action.text,
          completed: false,
        }
      ]
    case types.EDIT_TODO:
      return state.map(todo => {
        if(todo.id === action.id) {
          todo.text = action.text;
        }
        return todo;
      });
    case types.DELETE_TODO: 
      return state.filter(todo => todo.id !== action.id);
    case types.COMPLETE_TODO:
      return state.map(todo => {
        if(todo.id === action.id) {
          todo.completed = true;
        }
        return todo;
      });
    case types.COMPLETE_ALL_TODOS:
      return state.map(todo => ({
        ...todo,
        completed: true
      }));
    case types.CLEAR_COMPLETED:
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
}

export default todos;