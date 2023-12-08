import Box from "../../components/Box";
import Button from "../../components/Button";
import useToggle from "../useToggle/useToggle";
import useRenderCounter from "./useRenderCounter";

const RenderCounterComponent = () => {
  const renderCount = useRenderCounter();
  const { value, toggleValue } = useToggle();
  return (
    <Box title="useRenderCounter Hook">
      <h2>Render Counter: {renderCount}</h2>
      <div hidden>{value}</div>
      <Button onClick={() => toggleValue()}>Cause Render</Button>
    </Box>
  );
};

export default RenderCounterComponent;
