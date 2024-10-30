/*
 Here's an expanded example of Redux with:
  - Multiple actions
  - Passing values with actions
  - Multiple reducers

 Counter App with User

Components:

1. Counter.js (React Component)
2. User.js (React Component)
3. actions.js (Action Creators)
4. reducers.js (Combined Reducers)
5. store.js (Redux Store)

Code:

// actions.js

export const increment = (amount) => ({ type: 'INCREMENT', payload: amount });
export const decrement = (amount) => ({ type: 'DECREMENT', payload: amount });
export const setUser = (user) => ({ type: 'SET_USER', payload: user });
export const clearUser = () => ({ type: 'CLEAR_USER' });


// reducers.js

const initialState = {
  count: 0,
  user: null,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.payload };
    case 'DECREMENT':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'CLEAR_USER':
      return { ...state, user: null };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});


// Counter.js

// jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment(5))}>
        Increment by 5
      </button>
      <button onClick={() => dispatch(decrement(2))}>
        Decrement by 2
      </button>
    </div>
  );
}

export default Counter;


// User.js

// jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, clearUser } from './actions';

function User() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.name}!</h1>
          <button onClick={() => dispatch(clearUser())}>
            Logout
          </button>
        </div>
      ) : (
        <button onClick={() => dispatch(setUser({ name: 'John Doe' }))}>
          Login
        </button>
      )}
    </div>
  );
}

export default User;


store.js

import { createStore, combineReducers } from 'redux';
import { rootReducer } from './reducers';

const store = createStore(rootReducer);

export default store;


index.js (Main Entry Point)

jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';
import User from './User';

ReactDOM.render(
  <Provider store={store}>
    <Counter />
    <User />
  </Provider>,
  document.getElementById('root')
);


// Explanation:

// 1. We define multiple actions in actions.js, including actions that pass values (e.g., increment and setUser).
// 2. We create separate reducers for counter and user in reducers.js and combine them using combineReducers.
// 3. In Counter.js and User.js, we use useSelector to access the corresponding state slices and useDispatch to dispatch actions.
// 4. We pass values with actions (e.g., dispatch(increment(5)) and dispatch(setUser({ name: 'John Doe' }))).

// This example demonstrates how to handle multiple actions, pass values with actions, and use multiple reducers in a Redux application.