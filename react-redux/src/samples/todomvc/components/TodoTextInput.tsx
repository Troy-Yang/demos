import React from 'react';
import classnames from 'classnames';

type Props = {
  onSave: (text: string) => void,
  text?: string,
  newTodo?: boolean,
}

type State = {
  text: string,
}

export default class TodoTextInput extends React.Component<Props> {

  readonly state: State = {
    text: this.props.text || ''
  }

  handleBlur = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const ele = e.target as HTMLInputElement;
    this.props.onSave(ele.value)
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const ele = e.target as HTMLInputElement;
    const text = ele.value.trim()
    if (e.which === 13) {
      this.props.onSave(text);
      this.setState({
        text: ''
      })
    }
  }

  render() {
    return (
      <input className={
        classnames({
          'new-todo': this.props.newTodo,
          'edit': true,
        })}
        type="text"
        autoFocus={true}
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit} />
    )
  }
}