import React from 'react';
import { connect } from 'react-redux';
import { actions } from './actions';

function _Authenticate({ user, login, logout }) {
  if (user.isLoggedIn) {
    return (
      <button onClick={logout}>Logout</button>
    );
  }

  return (
    <>
      <button onClick={() => login('Tomek', 'Poland')}>Login as Tomek</button>
      <button onClick={() => login('Bartek', 'ZSRR')}>Login as Bartek</button>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  login: actions.login,
  logout: actions.logout,
};

// store.dispatch(login)
export const Authenticate = connect(mapStateToProps, mapDispatchToProps)(_Authenticate);
