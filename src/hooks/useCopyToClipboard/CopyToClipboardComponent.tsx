import { useState } from "react";
import Box from "../../components/Box";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import useCopyToClipboard from "./useCopyToClipboard";

const CopyToClipboardComponent = () => {
  const { copiedValue, copyToClipboard } = useCopyToClipboard();
  const [text, setText] = useState("Wolfie");

  return (
    <Box title="useCopyToClipboard Hook">
      <h2>
        Copy The Input: <TextInput value={text} setValue={setText} />
      </h2>
      <h3>
        You copied: <span className="text-orange-700 dark:text-orange-600 font-bold">{copiedValue}</span>
      </h3>
      <Button onClick={() => copyToClipboard(text)}>Copy</Button>
    </Box>
  );
};

export default CopyToClipboardComponent;
