import React from 'react';
import './App.css';
import { parking } from './components/datatypes'
import { ParkingLot } from './components/parkingLot'

function App() {
  const data: parking[] = [{'point': [50, 50], 'direction': 10}]
  return (
    <div className="App">
      <header className="App-header">
        <ParkingLot data={data}/>
      </header>
    </div>
  );
}

export default App;
