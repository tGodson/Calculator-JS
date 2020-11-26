/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculateObj from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }
}

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