import { combineReducers, Store } from 'redux';
import auth from './reducers/auth';
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const rootReducer = combineReducers({ auth });

export const getStore = (() => {
  let store: Store | null = null;

  return () => {
    if (!store) store = createStore(rootReducer, composeWithDevTools());
    return store;
  };
})();
