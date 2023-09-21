import React, { useState } from 'react';
import Countdown from './components/countdown';
import Input from './components/Input';

function App() {
  const [targetDate, setTargetDate] = useState(""); // Add state to store the target date

  const handleInputSubmit = (inputValue) => {
    // Set the target date when the user submits input
    setTargetDate(inputValue);
  };

  return (
    <div className="App">
     {/* Pass the targetDate to the Countdown component */}
       <Countdown targetDate={targetDate} />
      {/* Pass the onInputSubmit function to the Input component */}
      <Input onInputSubmit={handleInputSubmit} />

    </div>
  );
}

export default App;