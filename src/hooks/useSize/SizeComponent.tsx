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
        Box Size: {height}px X {width}px
      </h2>
      <h2>
        Box Position: x:{x}, y:{y}
      </h2>
      <h2>
        Window Size: {windowHeight}px X {windowWidth}px
      </h2>
    </Box>
  );
};

export default SizeComponent;
