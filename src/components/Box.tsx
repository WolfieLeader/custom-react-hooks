import { forwardRef } from "react";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
}
const Box = forwardRef<HTMLDivElement, BoxProps>(({ title, children, ...attributes }: BoxProps, ref) => {
  return (
    <div
      className="p-3 text-lg border-2 rounded-sm border-slate-950 dark:border-slate-200 bg-slate-200 dark:bg-slate-950"
      {...attributes}
      ref={ref}>
      <h1 className="text-2xl font-black text-blue-700 dark:text-blue-600">{title}</h1>
      {children}
    </div>
  );
});

export default Box;
