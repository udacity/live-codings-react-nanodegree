import React from 'react'
import './ColumnList.css'
import If from './If'

const ColumnList = ({ columnTitle, tasks, addTask, updateTask }) => {
  const currentTasks = tasks.filter(task => task.status === columnTitle)
  
  return (
    <div className="column-list">
      <h3>{columnTitle}</h3>
      <If test={columnTitle === 'To Do'}>
        <form onSubmit={addTask}>
          <input placeholder="Create new task" type="text" />
          <button type="submit">
            Add Task
          </button>
        </form>
      </If>
      <ul className="list-items">
        {currentTasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              onChange={(e) => updateTask(e.target, task)}
              checked={columnTitle === 'Done'}
            />
            <span>{task.description}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ColumnList