import { useState } from "react";

const useCopyToClipboard = () => {
  const [copiedValue, setCopiedValue] = useState("");

  const copyToClipboard = (value: string) => {
    if (value.length === 0 || value === copiedValue) return;
    navigator.clipboard.writeText(value);
    setCopiedValue(value);
  };

  return { copiedValue, copyToClipboard };
};

export default useCopyToClipboard;
