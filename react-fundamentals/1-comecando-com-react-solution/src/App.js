import React, { Component } from 'react';

import ColumnList from './ColumnList';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    const tasks = JSON.parse(
      (window.localStorage.getItem('toDoListTasks') || '[]')
    );
    this.state = { tasks };
  }

  updateLocalStorage = tasks => {
    const stringified = JSON.stringify(tasks);
    window.localStorage.setItem('toDoListTasks', stringified);
  }

  updateAndSave = tasks => {
    this.updateLocalStorage(tasks);
    this.setState({ tasks });
  }

  addTask = (e) => {
    e.preventDefault();

    let { tasks } = this.state;
    const value = e.target.querySelector('input').value;
    const newTask = {
      id: tasks.length + 1,
      description: value,
      status: 'To Do'
    };
    e.target.querySelector('input').value = '';
    tasks = tasks.concat(newTask);
    this.updateAndSave(tasks);
  }

  updateTask = (target, task) => {
    let { tasks } = this.state;
    tasks = tasks.filter(t => t.id !== task.id).concat({
      ...task,
      status: target.checked ? 'Done' : 'To Do'
    });
    this.updateAndSave(tasks);
  }

  render() {
    const { tasks = [] } = this.state;
    const columns = [
      { title: 'To Do', tasks },
      { title: 'Done', tasks }
    ];

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React To-Do List</h2>
        </div>
        <div className="App-container">
          <div className="app-lists">
            {columns.map(column => (
              <ColumnList
                key={column.title}
                columnTitle={column.title}
                tasks={column.tasks}
                addTask={this.addTask}
                updateTask={this.updateTask}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
