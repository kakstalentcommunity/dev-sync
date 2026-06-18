import { useContext } from "react";

import {
  FaMoon,
  FaSun
} from "react-icons/fa";

import { ThemeContext }
from "../../context/ThemeContext";

const ThemeToggle = () => {

  const {
    darkMode,
    toggleTheme
  } = useContext(ThemeContext);

  return (
    <button
      type="button"
      className={
        darkMode
          ? "theme-toggle theme-toggle-dark"
          : "theme-toggle"
      }
      onClick={toggleTheme}
      aria-pressed={darkMode}
      aria-label={
        darkMode
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
    >

      <span className="theme-toggle-icon">
        {darkMode
          ? <FaMoon />
          : <FaSun />}
      </span>

      <span className="theme-toggle-text">
        {darkMode
          ? "Dark"
          : "Light"}
      </span>

      <span
        className="theme-toggle-track"
        aria-hidden="true"
      >
        <span className="theme-toggle-thumb" />
      </span>

    </button>
  );
};

export default ThemeToggle;
