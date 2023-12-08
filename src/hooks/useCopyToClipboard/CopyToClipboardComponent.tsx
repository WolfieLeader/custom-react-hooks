import { useState } from "react";
import Box from "../../components/Box";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import useCopyToClipboard from "./useCopyToClipboard";

const CopyToClipboardComponent = () => {
  const { copiedValue, copyToClipboard } = useCopyToClipboard();
  const [text, setText] = useState("");

  return (
    <Box title="useCopyToClipboard Hook">
      <h2>Type In Something</h2>
      <TextInput value={text} setValue={setText} />
      <h2>You copied: {copiedValue}</h2>
      <Button onClick={() => copyToClipboard(text)}>Copy</Button>
    </Box>
  );
};

export default CopyToClipboardComponent;
