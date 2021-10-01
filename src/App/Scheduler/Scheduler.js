import { useState, useEffect } from "react";

const Scheduler = ({ delay, callback }) => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setTime(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
        callback(time);
      }, delay);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <div>
      <div>{time}</div>
      <div>
        <button onClick={toggle}>{isActive ? "Pause" : "Start"}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Scheduler;
