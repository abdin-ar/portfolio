import React from "react";
import useDarkMode from "../../../hooks/useDarkMode";
import NavButton from "../navbar/NavButton";

/**
 * @type {React.FC<{as?:React.ElementType<any> | keyof JSX.IntrinsicElements,isFullWidth?: boolean} & React.ButtonHTMLAttributes>}
 */
const DarkModeToggleSaved = ({ title, onClick, ...props }) => {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <NavButton
      title={darkMode ? "Light Mode" : "Dark Mode"}
      onClick={() => toggleDarkMode()}
      aria-label="Toggle dark mode"
      {...props}
    >
      {darkMode ? (
        <i className="fas fa-sun"></i>
      ) : (
        <i className="fas fa-moon"></i>
      )}
    </NavButton>
  );
};

export default DarkModeToggleSaved;
