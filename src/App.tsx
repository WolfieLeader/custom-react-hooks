import "./styles/default.css";
import DarkModeComponent from "./hooks/useDarkMode/DarkModeComponent";
import ToggleComponent from "./hooks/useToggle/ToggleComponent";
import UserDataComponent from "./hooks/useUserData/UserDataComponent";
import RenderCounterComponent from "./hooks/useRenderCounter/RenderCounterComponent";
import CopyToClipboardComponent from "./hooks/useCopyToClipboard/CopyToClipboardComponent";
import SizeComponent from "./hooks/useSize/SizeComponent";

const App = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full h-full px-10 py-6 text-slate-950 bg-slate-200 dark:text-slate-200 dark:bg-slate-950">
      <DarkModeComponent />
      <ToggleComponent />
      <UserDataComponent />
      <RenderCounterComponent />
      <CopyToClipboardComponent />
      <SizeComponent />
    </div>
  );
};

export default App;
