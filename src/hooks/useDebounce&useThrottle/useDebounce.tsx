import { useEffect, useRef, useState } from "react";

const useDebounce = (value: string, delay = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [value, debouncedValue, delay]);

  return debouncedValue;
};

export default useDebounce;
