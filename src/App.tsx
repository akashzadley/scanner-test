import React, { useState } from 'react';
import { CodeScanner } from 'react-smart-scanner';
import 'react-smart-scanner/dist/index.esm.css';
import './App.css';

function App() {
  const [scannedValue, setScannedValue] = useState<string>('');

  const handleScan = (value: string) => {
    setScannedValue(value);
    console.log('Scanned:', value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="scanner-container">
          <CodeScanner onScan={handleScan} />
        </div>
      </header>
    </div>
  );
}

export default App;
