import React, { useState } from 'react';
import Countdown from './components/countdown';
import Input from './components/Input';

function App() {
  const [targetDate, setTargetDate] = useState("");

  const handleInputSubmit = (inputValue) => {
    setTargetDate(inputValue);
  };

  return (
    <div className="App">
      <Countdown targetDate={targetDate} />
      <Input onInputSubmit={handleInputSubmit} />
    </div>
  );
}

export default App;
