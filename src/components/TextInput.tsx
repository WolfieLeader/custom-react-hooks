import React from "react";

interface TextInputProps extends React.HTMLAttributes<HTMLInputElement> {
  value: string;
  setValue: (value: string) => void;
  className?: string;
  placeholder?: string;
}

const TextInput = ({ value, setValue, className, placeholder = "Enter Text", ...attributes }: TextInputProps) => {
  return (
    <input
      className={`px-2 py-1 mx-1 border-2 rounded-sm border-slate-950 bg-slate-200 dark:border-slate-200 dark:bg-slate-950 ${className}`}
      value={value}
      placeholder={placeholder}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      {...attributes}
    />
  );
};

export default TextInput;
