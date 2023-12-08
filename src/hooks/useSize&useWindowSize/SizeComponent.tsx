import { useRef } from "react";
import Box from "../../components/Box";
import useSize from "./useSize";
import useWindowSize from "./useWindowSize";

const SizeComponent = () => {
  const boxRef = useRef(null);
  const { height, width, x, y } = useSize(boxRef);
  const { height: windowHeight, width: windowWidth } = useWindowSize();
  return (
    <Box title="useSize & useWindowSize Hooks" ref={boxRef}>
      <h2>
        Box Size:
        <span className="text-orange-700 dark:text-orange-600 font-bold">{height}px</span> X{" "}
        <span className="text-orange-700 dark:text-orange-600 font-bold">{width}px</span>
      </h2>
      <h2>
        Box Position: top: <span className="text-orange-700 dark:text-orange-600 font-bold">{x}</span>, left:{" "}
        <span className="text-orange-700 dark:text-orange-600 font-bold">{y}</span>
      </h2>
      <h2>
        Window Size: <span className="text-orange-700 dark:text-orange-600 font-bold">{windowHeight}px</span> X{" "}
        <span className="text-orange-700 dark:text-orange-600 font-bold">{windowWidth}px</span>
      </h2>
    </Box>
  );
};

export default SizeComponent;
