import React from 'react';
import If from './If';
import './ColumnList.css';

const ColumnList = ({ title, items = [], updateTask, addTask }) => {
  const currentItems = items.filter(_ => _.status === title);

  return (
    <div className="column-list">
      <h3>{title}</h3>
      <If test={title === 'To Do'}>
        <form onSubmit={addTask}>
          <input placeholder="Create new task" type="text" />
          <button type="submit">
            Add Task
          </button>
        </form>
      </If>
      <ul className="list-items">
        {currentItems.map(item => (
          <li key={item.id}>
            <input
              type="checkbox"
              onChange={(e) => updateTask(e.target, item)}
              checked={title === 'Done'}
            />
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColumnList;

