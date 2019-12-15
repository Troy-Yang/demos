import React from 'react';
import TodoTextInput from './TodoTextInput';

const Header: React.FC<{ addTodo: (text: string) => void }> = ({ addTodo }) => (
  <header>
    <h1>TODO</h1>
    <TodoTextInput
      newTodo
      onSave={(text: string) => {
        if (text.trim().length > 0) {
          addTodo(text);
        }
      }}
    />
  </header>
)

export default Header;