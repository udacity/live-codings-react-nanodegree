import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ColumnList from './ColumnList'

class App extends Component {
  state = {
    tasks: []
  }

  componentWillMount() {
    const toDoListTasks = window.localStorage.getItem('toDoListTasks') || '[]'
    this.setState({ tasks: JSON.parse(toDoListTasks) })
  }

  updateLocalStorage(tasks) {
    const stringfiedTasks = JSON.stringify(tasks)
    window.localStorage.setItem('toDoListTasks', stringfiedTasks)
  }

  updateAndSave(tasks) {
    this.updateLocalStorage(tasks)
    this.setState({ tasks })
  }

  addTask(e){
    e.preventDefault()

    let { tasks } = this.state
    const value = e.target.querySelector('input').value
    const newTask = {
      id: tasks.length + 1,
      description: value,
      status: 'To Do'
    }
    tasks = tasks.concat(newTask)
    this.updateAndSave(tasks)
  }

  updateTask(target, task){
    let { tasks } = this.state
    tasks = tasks.filter(t => t.id !== task.id).concat({
      ...task,
      status: target.checked ? 'Done' : 'To Do'
    })
    this.updateAndSave(tasks)
  }

  render() {
    const { tasks } = this.state
    const columns = [
      { title: 'To Do', tasks },
      { title: 'Done', tasks }
    ]
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>To Do List</h2>
        </div>
        <div className="App-container">

          <div className="app-lists">
            {columns.map(column => (
              <ColumnList
                key={column.title}
                columnTitle={column.title}
                tasks={column.tasks}
                addTask={(e) => this.addTask(e)}
                updateTask={(target, task) => this.updateTask(target, task)}
               />
            ))}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
