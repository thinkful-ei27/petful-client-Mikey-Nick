import { createStore, applyMiddleware } from 'redux';
import { adoptReducer } from './reducers/index.js'

import  thunk  from 'redux-thunk';

const store = createStore(
  adoptReducer,
  applyMiddleware(thunk)
);

export default store;