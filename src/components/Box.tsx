interface BoxProps {
  title: string;
  children: React.ReactNode;
}
const Box = ({ title, children }: BoxProps) => {
  return (
    <div className="p-3 mb-3 text-lg border-2 rounded-sm border-slate-950 dark:border-slate-200">
      <h1 className="text-2xl underline">{title}</h1>
      {children}
    </div>
  );
};

export default Box;
