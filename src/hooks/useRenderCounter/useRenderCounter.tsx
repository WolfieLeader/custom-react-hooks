import { useRef } from "react";

const useRenderCounter = () => {
  const counter = useRef(0);
  counter.current++;
  return counter.current;
};

export default useRenderCounter;
