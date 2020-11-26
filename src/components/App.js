/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculateObj from '../logic/calculate';

function App() {
  const { calculate } = calculateObj;
  return (
    <div id="App">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;