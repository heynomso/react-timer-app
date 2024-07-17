import React, { useState, useEffect } from "react";
import "../scss/styles.scss";
import alarmSound from "../assets/alarm.mp3"; 


const Countdown = ({ targetDate }) => {
  const COUNTDOWN_TARGET = new Date(targetDate);

  const getTimeLeft = () => {
    const totalTimeLeft = COUNTDOWN_TARGET - new Date();
    const days = Math.max(Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24)), 0);
    const hours = Math.max(Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24), 0);
    const minutes = Math.max(Math.floor((totalTimeLeft / (1000 * 60)) % 60), 0);
    const seconds = Math.max(Math.floor((totalTimeLeft / 1000) % 60), 0);
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());
  const [isTimeUp, setIsTimeUp] = useState(false);

  const playAudio = () => {
    const audio = new Audio(alarmSound);
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
          
          document.getElementById("input-field").value = "";
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
      <h2>{isTimeUp ? <span id = "timered">Time's Up!</span> : "Countdown"}</h2>
      <div className="content">
        <div className="box">
          <div className="value">
            <span>{timeLeft.days || 0}</span>
          </div>
          <span className="label">Days</span>
        </div>

        <div className="box">
          <div className="value">
            <span>{timeLeft.hours || 0}</span>
          </div>
          <span className="label">Hours</span>
        </div>

        <div className="box">
          <div className="value">
            <span>{timeLeft.minutes || 0}</span>
          </div>
          <span className="label">Minutes</span>
        </div>

        <div className="box">
          <div className="value">
            <span>{timeLeft.seconds || 0}</span>
          </div>
          <span className="label">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
