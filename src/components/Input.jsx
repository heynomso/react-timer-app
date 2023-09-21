import React, { useState } from "react";

const Input = ({ onInputSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const selectedDate = new Date(inputValue);
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
      window.alert("Please select a date and time in the future");
    } else if (inputValue === "") {
      window.alert("Please select a date and time");
    } else {
      onInputSubmit(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="input">
      <input
        type="datetime-local"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Start Countdown</button>
    </div>
  );
};

export default Input;