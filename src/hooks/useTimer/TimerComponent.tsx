import React from "react";
import Box from "../../components/Box";
import useTimer from "./useTimer";
import Button from "../../components/Button";
import NumberInput from "../../components/NumberInput";

const TimerComponent = () => {
  const [initialCount, setInitialCount] = React.useState(0);
  const [endCount, setEndCount] = React.useState(10);

  const { count, start, reset, pause } = useTimer(initialCount, endCount);
  return (
    <Box title="useTimer Hook">
      <h2>Timer: {count} seconds</h2>
      <div>
        <h3>
          Initial count: <NumberInput value={initialCount} setValue={setInitialCount} />
        </h3>
        <h3>
          End count: <NumberInput value={endCount} setValue={setEndCount} />
        </h3>
      </div>
      <div>
        <Button onClick={() => start()}>Start</Button>
        <Button onClick={() => reset()}>Reset</Button>
        <Button onClick={() => pause()}>Pause</Button>
      </div>
    </Box>
  );
};

export default TimerComponent;
