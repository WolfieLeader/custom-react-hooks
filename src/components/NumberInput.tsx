import React from "react";

interface NumberInputProps extends React.HTMLAttributes<HTMLInputElement> {
  value: number;
  setValue: (value: number) => void;
  className?: string;
  placeholder?: string;
}

const NumberInput = ({ value, setValue, className, placeholder = "Enter Number", ...attributes }: NumberInputProps) => {
  return (
    <input
      type="number"
      className={`px-2 py-1 mx-1 my-1 w-16 border-2 rounded-sm border-slate-950 bg-slate-200 dark:border-slate-200 dark:bg-slate-950 ${className}`}
      value={value}
      placeholder={placeholder}
      onChange={(e) => {
        setValue(Number(e.target.value));
      }}
      {...attributes}
    />
  );
};

export default NumberInput;
