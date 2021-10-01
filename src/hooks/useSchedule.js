import { useState, useEffect } from "react";

const useSchedule = (delay) => {
  const [time, setTime] = useState(0);
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

  const reset = () => {
    setTime(0);
    setActive(false);
  };

  useEffect(() => {
    let interval = null;
    if (active) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
        callback(time);
      }, delay);
    } else if (!active && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [active, time]);

  return { time, toggle, reset };
};

export default useSchedule;
