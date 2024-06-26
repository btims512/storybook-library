import React, { useEffect, useState } from "react";
import "./ThemeSwitcher.css";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <span className="slider"></span>
    </label>
  );
};

export default ThemeSwitcher;
