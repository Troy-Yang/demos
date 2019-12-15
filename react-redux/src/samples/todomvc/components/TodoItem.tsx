import React from 'react';
import classnames from 'classnames';
import { Todo } from '../types';
import TodoTextInput from "./TodoTextInput";

type Props = {
  todo: Todo,
  deleteTodo: (id: number) => void,
  editTodo: (id: number, text: string) => void,
  completeTodo: (id: number) => void,
}

type State = {
  editing: boolean
}

export default class TodoItem extends React.Component<Props, State> {
  readonly state: State = {
    editing: false
  }

  handleDoubleClick = () => {
    this.setState({
      editing: true
    })
  }

  handleSave = (id: number, text: string) => {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
    }
    this.setState({
      editing: false
    });
  }

  render() {
    const { todo, completeTodo, deleteTodo } = this.props;
    let element: React.ReactNode;

    if (this.state.editing) {
      element = (
        <TodoTextInput 
          text={todo.text}
          onSave={(text: string) => this.handleSave(todo.id, text)} />
      )
    }
    else {
      element = (
        <div className="view">
          <input className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)} />
          <label onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </label>
          <button className="destroy"
            onClick={() => deleteTodo(todo.id)} />
        </div>
      );
    }
    
    return (
      <li className={
        classnames({
          completed: todo.completed,
          editing: this.state.editing
        })
      }>
        {element}
      </li>
    )
  }
}