import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import github from './github';
import portfolio from './portfolio';
import Thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({ github, portfolio });

export const getStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(Thunk)),
  );
  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
