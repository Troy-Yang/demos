import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../types';

type Props = {
  filteredTodos: Todo[],
  actions: any,
}

const TodoList: React.FC<Props> = ({filteredTodos, actions}) => {
  return (
    <ul className='todo-list'>
      {
        filteredTodos.map(todo => 
          <TodoItem key={ todo.id } todo={todo} {...actions}/>
        )
      }
    </ul>
  )
}

export default TodoList;