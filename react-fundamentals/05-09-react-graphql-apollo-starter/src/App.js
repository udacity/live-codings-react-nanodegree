import React, { Component } from 'react';
import ColumnList from './ColumnList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.updateTask = this.updateTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  componentWillMount() {
    const toDoListItems = window.localStorage.getItem('toDoListItems') || '[]';
    this.setState({ items: JSON.parse(toDoListItems) });
  }

  updateLocalStorage(items) {
    window.localStorage.setItem('toDoListItems', JSON.stringify(items));
  }

  addTask(e) {
    e.preventDefault();
    const value = e.target.querySelector('input').value;
    this.setState(prev => {
      const { items = [] } = prev;
      const newTask = {
        id: items.length + 1,
        title: value,
        status: 'To Do'
      };
      items.push(newTask)
      this.updateLocalStorage(items);
      return { items: items };
    });
  }

  updateTask(target, task) {
    this.setState(function (state, b) {
      const { items = [] } = state;
      const s = items.filter(_ => _.id !== task.id);
      task.status = target.checked ? 'Done' : 'To Do';
      s.push(task);
      this.updateLocalStorage(s);
      return { items: s };
    });
  }

  render() {
    const { items } = this.state;
    const columns = [
      { title: 'To Do', items },
      { title: 'Done', items }
    ];

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>To Do List</h2>
        </div>
        <div className="App-container">
          <div className="app-lists">
            {columns.map(item => (
              <ColumnList
                key={item.title}
                title={item.title}
                items={item.items}
                updateTask={this.updateTask}
                addTask={this.addTask}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
