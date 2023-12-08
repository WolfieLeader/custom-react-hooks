import React from "react";
import Box from "../../components/Box";
import TextInput from "../../components/TextInput";
import useDebounce from "./useDebounce";
import useThrottle from "./useThrottle";

const DebounceThrottleComponent = () => {
  const [text, setText] = React.useState("Ice Cream");
  const debouncedValue = useDebounce(text);
  const throttledValue = useThrottle(text);
  return (
    <Box title="useDebounce & useThrottle Hook">
      <div>
        <h3>
          Type Something: <TextInput value={text} setValue={setText} />
        </h3>
        <h2>
          Debounce: <span className="text-orange-700 dark:text-orange-600 font-bold">{debouncedValue}</span>
        </h2>
        <h2>
          Throttle: <span className="text-orange-700 dark:text-orange-600 font-bold">{throttledValue}</span>
        </h2>
      </div>
    </Box>
  );
};

export default DebounceThrottleComponent;
