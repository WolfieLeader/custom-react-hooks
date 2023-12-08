import { useState } from "react";

const useToggle = (defaultValue = false) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (value?: boolean) => {
    setValue((preValue) => value ?? !preValue);
  };

  return { value, toggleValue } as const;
};

export default useToggle;
