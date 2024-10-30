// configureStore.js
import { createStore, combineReducers } from 'redux';
import counterReducer from '../reducers/counterReducer';
import userReducer from '../reducers/userReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
