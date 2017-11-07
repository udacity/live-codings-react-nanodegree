import { Component, h } from 'preact'

class Todo extends Component {
  render() {
    return (
      <div>
        <input type="checkbox" />
        <span>{this.props.text}</span>
      </div>
    )
  }
}

export default Todo
