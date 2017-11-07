import { Component, h } from 'preact'
import { connect } from 'preact-redux'
import Todo from '../todo'

function mapStateToProps(state) {
  return { todos: state.todos }
}

class TodoList extends Component {
  render() {
    return (
      <div>
        {
          this.props.todos.map(todo => <Todo text={todo.text} />)
        }
      </div>
    )
  }
}

export default connect(mapStateToProps)(TodoList)
