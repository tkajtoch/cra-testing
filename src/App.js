import React from 'react';
import logo from './logo.svg';
import { Authenticate } from './Authenticate';
import { User } from './User';
import './App.css';

export function App() {
  return (
    <div className="App">
      <Authenticate />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <User />
      </header>
    </div>
  );
}
