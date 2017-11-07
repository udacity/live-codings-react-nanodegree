import { createStore } from 'redux'

const initialState = {
  todos: [
    {
      id: 1,
      text: 'Lorem',
      isCompleted: true
    },
    {
      id: 2,
      text: 'Ipsum',
      isCompleted: false
    },
    {
      id: 3,
      text: 'Dolor',
      isCompleted: true
    }
  ]
}

function reducer (state = {}, action = {}) {
  return state
}

const store = createStore(reducer, initialState)

export default store
