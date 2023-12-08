import { useState, useEffect } from "react";

interface useDarkModeReturn {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const useDarkMode = (): useDarkModeReturn => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  //On mount
  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light";
    const localTheme = localStorage.getItem("theme");

    if (localTheme && (localTheme === "dark" || localTheme === "light")) {
      //if local theme has been set and is either dark or light
      setTheme(localTheme);
    } else if (systemTheme) {
      //if local theme has not been set, but system theme has
      localStorage.setItem("theme", systemTheme);
      setTheme(systemTheme);
    } else {
      //if local theme has not been set and system theme has not been set
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.getElementById("root")?.classList.add("dark");
    } else {
      document.getElementById("root")?.classList.remove("dark");
    }
  }, [theme]);

  return { theme, toggleTheme } as const;
};

export default useDarkMode;
