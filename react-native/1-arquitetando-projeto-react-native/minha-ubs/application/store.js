import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import modules from '@modules'
import sagas from '@sagas'

const reducers = combineReducers({ ...modules })
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(sagas)

export default store