import React from 'react';
import Footer from './Footer';
import TodoList from '../comtainers/TodoList';

interface Props {
  todosCount: number,
  completedCount: number,
  completeAllTodos: () => void,
  clearCompleted: () => void,
}

const Main: React.FC<Props> = ({ todosCount, completedCount, clearCompleted, completeAllTodos }) => (
  <section className='main'>
    {
      !!todosCount &&
      <span>
        <input
            className="toggle-all"
            type="checkbox"
            checked={completedCount === todosCount}
            readOnly
          />
          <label onClick={completeAllTodos}/>
      </span>
    }
    <TodoList />
    {
      !!todosCount && 
      <Footer todosCount={todosCount} completedCount={completedCount} onClearCompleted={clearCompleted}/>
    }
  </section>
)

export default Main;