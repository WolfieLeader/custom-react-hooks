import "./styles/default.css";
import DarkModeComponent from "./hooks/useDarkMode/DarkModeComponent";
import ToggleComponent from "./hooks/useToggle/ToggleComponent";

const App = () => {
  return (
    <div className="flex flex-col w-full h-full px-10 py-6 text-slate-950 bg-slate-200 dark:text-slate-200 dark:bg-slate-950">
      <DarkModeComponent />
      <ToggleComponent />
    </div>
  );
};

export default App;
