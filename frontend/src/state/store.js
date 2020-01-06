import { createStore, combineReducers, applyMiddleware } from 'redux'

import thunkMiddleware from 'redux-thunk'

import natural from './reducer'

export default () =>
  createStore(combineReducers({ natural }), applyMiddleware(thunkMiddleware))
