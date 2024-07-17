import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { setInputValue } from '../redux/actions'; 

const Input = ({onInputSubmit}) => {
  const inputValue = useSelector((state) => state.inputValue);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(setInputValue(e.target.value));
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
        id="input-field"
        type="datetime-local"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button id="button" onClick={handleSubmit}>Start Countdown</button>
    </div>
  );
};

export default Input;
