import React from 'react';
import logo from './logo.svg';
import './App.css';
import { parking } from './components/datatypes'

function App(data: parking[]) {
  return (
    <div className="App">
      <header className="App-header">
      <Graph data={data} />
      </header>
    </div>
  );
}

export default App;
