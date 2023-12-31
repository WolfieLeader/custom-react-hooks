import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
}

const Button = ({ children, className, onClick, ...attributes }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "px-2 py-1 mx-1 my-1 border-2 rounded-sm border-slate-950 dark:border-slate-200 bg-blue-400/30 dark:bg-blue-600/30",
        className
      )}
      onClick={onClick}
      {...attributes}>
      {children}
    </button>
  );
};

export default Button;
