import { combineReducers } from 'redux';

import exampleReducer from './example';

const rootReducer = combineReducers({
  exampleReducer,
});

export default rootReducer;
