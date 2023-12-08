import { useEffect, useRef, useState } from "react";

const useThrottle = (value: string, delay = 1000) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRan = useRef(Date.now());

  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const timeSinceRan = Date.now() - lastRan.current;

    if (timeSinceRan >= delay) {
      setThrottledValue(value);
      lastRan.current = Date.now();
    } else {
      const timeUntilNextRan = delay - timeSinceRan;
      timeoutRef.current = setTimeout(() => {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }, timeUntilNextRan);
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [value, throttledValue, delay]);

  return throttledValue;
};

export default useThrottle;
