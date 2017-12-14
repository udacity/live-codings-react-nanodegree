import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

import './index.css'
import AppContainer from './AppContainer'

const store = createStore(rootReducer, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, 
  document.getElementById('root')
)