import { combineReducers } from 'redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import github from './github';
import portfolio from './portfolio';
import session from './session';
import Thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({ github, portfolio, session });

export const getStore = () => {
  const store = createStore(
    rootReducer,
    // composeWithDevTools(applyMiddleware(Thunk)),
  );
  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
