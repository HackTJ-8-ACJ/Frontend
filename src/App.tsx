import React from 'react';
import './App.css';
import { parking } from './components/datatypes'
import { ParkingLot } from './components/parkingLot'

function App() {
  const data: parking[] = []


  // initialize parking
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 15; j++) {
      data.push({'point': [75 * j, 50 + 125 * i], 'direction': 0, 'occupied': false})
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <ParkingLot data={data}/>
      </header>
    </div>
  );
}

export default App;
