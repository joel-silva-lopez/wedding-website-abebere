import { useEffect, useState } from "react";
import "./Cronometro.css";

export function Cronometro({ targetDate = new Date().setHours(48) }) {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setseconds] = useState("00");

  useEffect(() => {
    const interval = setInterval(() => {
      let timer = updateCountdown(targetDate);

      setDays(timer.days);
      setHours(timer.hours);
      setMinutes(timer.minutes);
      setseconds(timer.seconds);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id="cronometro">
        <div id="timer">
          <div className="timer-section">
            <span>{days}</span>
            <span className="timer-label">DIAS</span>
          </div>
          <span>:</span>
          <div className="timer-section">
            <span>{hours}</span>
            <span className="timer-label">HORAS</span>
          </div>
          <span>:</span>
          <div className="timer-section">
            <span>{minutes}</span>
            <span className="timer-label">MIN</span>
          </div>
          <span>:</span>
          <div className="timer-section">
            <span>{seconds}</span>
            <span className="timer-label">SEG</span>
          </div>
        </div>
      </div>
    </>
  );
}

function updateCountdown(targetDate) {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  if (timeDifference <= 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  } else {
    let days = timeDifference / (1000 * 60 * 60 * 24);
    let hours = (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
    let minutes = (timeDifference % (1000 * 60 * 60)) / (1000 * 60);
    let seconds = (timeDifference % (1000 * 60)) / 1000;

    return {
      days: format(days),
      hours: format(hours),
      minutes: format(minutes),
      seconds: format(seconds),
    };
  }
}

function format(value) {
  return Math.floor(value).toString().padStart(2, "0");
}
