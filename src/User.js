import React from 'react';
import { connect } from 'react-redux';
import { actions } from './actions';

function _User({ user, incrementNumber }) {
  return (
    <>
      <h1>Hello, {user.username}</h1>
      <h3>Your number is: {user.number}</h3>
      <button onClick={incrementNumber}>Increment number</button>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  incrementNumber: actions.increment,
};

export const User = connect(mapStateToProps, mapDispatchToProps)(_User);

