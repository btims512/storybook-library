// src/components/ThemeSwitcher.js
import { useEffect } from "react";

const ThemeSwitcher = ({ theme }) => {
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return null;
};

export default ThemeSwitcher;
