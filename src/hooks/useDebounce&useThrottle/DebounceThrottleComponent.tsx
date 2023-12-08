import React from "react";
import Box from "../../components/Box";
import TextInput from "../../components/TextInput";
import useDebounce from "./useDebounce";
import useThrottle from "./useThrottle";

const DebounceThrottleComponent = () => {
  const [text, setText] = React.useState("");
  const debouncedValue = useDebounce(text);
  const throttledValue = useThrottle(text);
  return (
    <Box title="useDebounce & useThrottle Hook">
      <div>
        <h2>Debounce: {debouncedValue}</h2>
        <h2>Throttle: {throttledValue}</h2>
        <h3>
          Type Something: <TextInput value={text} setValue={setText} />
        </h3>
      </div>
    </Box>
  );
};

export default DebounceThrottleComponent;
