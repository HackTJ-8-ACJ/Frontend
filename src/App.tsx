import React from 'react';
import './App.css';
import { parking } from './components/datatypes'
import { ParkingLot } from './components/parkingLot'

function App() {
  const data: parking[] = []


  // initialize parking
  for (let k = 0; k < 2; k++) {
    for (let i = 0; i < 2; i++ ) {
      for (let j = 0; j < 15; j++) {
        if (i % 2 === 0) {
          data.push({'point': [50 + 70 * j, 250 + 350*k], 'direction': 0, 'occupied': false})
        }
        else {
          data.push({'point': [50 + 75 + 70 * j, 250 + 350*k], 'direction': 180, 'occupied': false})
        }
      }
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
