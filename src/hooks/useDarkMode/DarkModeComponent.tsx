import Box from "../../components/Box";
import Button from "../../components/Button";
import useDarkMode from "./useDarkMode";

const DarkModeComponent = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <Box title="useDarkMode Hook">
      <h2 className="text-xl">
        Theme: <span className="text-orange-700 dark:text-orange-600 font-bold">{theme}</span>
      </h2>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
    </Box>
  );
};

export default DarkModeComponent;
