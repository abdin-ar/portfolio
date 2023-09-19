// useDarkMode V-2.0.0
// DEPENDS ON: useMediaQuery V-2.0.0, useLocalStorage V-2.0.0

import { useEffect } from "react";
import useMediaQuery from "./useMediaQuery";
import useStorage from "./useStorage";

/**
 * A hook that toggles dark-mode, detects if the user prefers dark mode, and stores the dark-mode state in the local storage
 * @returns {[boolean,toggleDarkMode]} [isEnabled, toggleDarkMode]
 */
export default function useDarkMode() {
  const [darkMode, setDarkMode] = useStorage("DarkMode");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const enabled = darkMode ?? prefersDarkMode;
  /**
   * A function that toggles the dark mode or sets it to true or false
   * @param {boolean|undefined} setTo Enter a boolean to set darkmode to its value. To toggle darkmode don't enter a value
   */
  function toggleDarkMode(setTo = undefined) {
    if (setTo === true || setTo === false) {
      setDarkMode(setTo);
    } else {
      setDarkMode((prev) => (prev === undefined ? !enabled : !prev));
    }
  }

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", enabled);
  }, [enabled]);

  return [enabled, toggleDarkMode];
}
