// Counter.js
import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../actions/counterActions';

const Counter = ({ count, increment }) => {
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  };
};

const mapDispatchToProps = {
  increment
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
