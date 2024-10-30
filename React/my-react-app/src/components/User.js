
// User.js
import React from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions/userActions';

const User = ({ user, setUser }) => {
  return (
    <div>
      <h2>User: {user}</h2>
      <button onClick={() => setUser('John')}>Set User</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  };
};

const mapDispatchToProps = {
  setUser
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
