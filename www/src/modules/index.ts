import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import github from './github';
import Thunk from 'redux-thunk';
const rootReducer = combineReducers({ github });

export const getStore = () => {
  const store = createStore(rootReducer, applyMiddleware(Thunk));
  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
