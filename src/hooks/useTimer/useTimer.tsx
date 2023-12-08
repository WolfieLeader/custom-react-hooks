import { useState, useEffect, useRef } from "react";

const useTimer = (initialCount: number = 0, endCount: number = Infinity) => {
  const [count, setCount] = useState(initialCount);
  const [isPaused, setIsPaused] = useState(true);

  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!isPaused) {
      if (initialCount === endCount) return setCount(initialCount);
      if (initialCount < endCount) {
        if (count < endCount) {
          timeoutRef.current = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
          }, 1000);
        }
      } else {
        if (count > endCount) {
          timeoutRef.current = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
          }, 1000);
        }
      }
    }

    return () => {
      clearInterval(timeoutRef.current);
    };
  }, [count, endCount, initialCount, isPaused]);

  const start = () => {
    setIsPaused(false);
  };
  const reset = () => {
    setCount(initialCount);
    setIsPaused(true);
  };
  const pause = () => setIsPaused(true);

  return { count, start, reset, pause };
};

export default useTimer;
