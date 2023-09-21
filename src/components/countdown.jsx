import React, { useState, useEffect } from "react";
import "../scss/styles.scss";

const Countdown = ({ targetDate }) => {
  const COUNTDOWN_TARGET = new Date(targetDate);

  const getTimeLeft = () => {
    const totalTimeLeft = COUNTDOWN_TARGET - new Date();
    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((totalTimeLeft / 1000) % 60);
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());
  const [isTimeUp, setIsTimeUp] = useState(false);

  const playAudio = () => {
    const audio = new Audio("src/assets/alarm.mp3"); 
    audio.play();
  };

  useEffect(() => {
    let timer;

    const updateCountdown = () => {
      const updatedTimeLeft = getTimeLeft();
      setTimeLeft(updatedTimeLeft);

      if (
        updatedTimeLeft.days === 0 &&
        updatedTimeLeft.hours === 0 &&
        updatedTimeLeft.minutes === 0 &&
        updatedTimeLeft.seconds === 0
      ) {
        clearInterval(timer); 
        setIsTimeUp(true); 
        playAudio(); 

        
        setTimeout(() => {
          setIsTimeUp(false); 
        }, 5000);
      }
    };

    timer = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(timer); 
    };
  }, [targetDate]);

  return (
    <div className="countdown">
      <h2>{isTimeUp ? "Time's Up" : "Countdown"}</h2>
      <div className="content">
        <div className="box">
          <div className="value">
            <span>{timeLeft.days}</span>
          </div>
          <span className="label">Days</span>
        </div>

        <div className="box">
          <div className="value">
            <span>{timeLeft.hours}</span>
          </div>
          <span className="label">Hours</span>
        </div>

        <div className="box">
          <div className="value">
            <span>{timeLeft.minutes}</span>
          </div>
          <span className="label">Minutes</span>
        </div>

        <div className="box">
          <div className="value">
            <span>{timeLeft.seconds}</span>
          </div>
          <span className="label">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;