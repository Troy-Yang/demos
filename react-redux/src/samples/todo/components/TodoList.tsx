import React from 'react';
import Todo from './Todo';

interface ITodo {
  id: string,
  completed: boolean,
  text: string,
}

interface IProps {
  todos: ITodo[],
  toggleTodo: (id: string) => void,
}

const TodoList = ({ todos, toggleTodo }: IProps) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
);

export default TodoList;