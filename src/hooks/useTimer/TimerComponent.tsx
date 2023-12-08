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
      <h2>
        Timer: <span className="text-orange-700 dark:text-orange-600 font-bold">{count} seconds</span>
      </h2>
      <div>
        <h3>
          Initial count: <NumberInput value={initialCount} setValue={setInitialCount} />, End count:{" "}
          <NumberInput value={endCount} setValue={setEndCount} />
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
