import Box from "../../components/Box";
import Button from "../../components/Button";
import useToggle from "./useToggle";

const ToggleComponent = () => {
  const { value, toggleValue } = useToggle();

  return (
    <Box title="useToggle Hook">
      <h2 className="text-xl">Value: {value.toString()}</h2>
      <Button onClick={() => toggleValue()}>Toggle</Button>
      <Button onClick={() => toggleValue(true)}>Set True</Button>
      <Button onClick={() => toggleValue(false)}>Set False</Button>
    </Box>
  );
};

export default ToggleComponent;
