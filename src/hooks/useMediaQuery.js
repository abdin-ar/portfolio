// useMediaQuery V-2.0.0
// DEPENDS ON: useEventListener V-2.0.0

import { useState, useEffect } from "react";
import useEventListener from "./useEventListener";

/**
 * A function that gets the media query
 * @param {string} mediaQuery The media query to be checked
 */
function getMediaQueryList(mediaQuery) {
  return window.matchMedia(mediaQuery);
}

/**
 * A hook that helps in using media queries in react
 * @param {string} mediaQuery The media query to be checked
 * @returns {boolean} A boolean that tells whether there is a match
 */
export default function useMediaQuery(mediaQuery) {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    setIsMatch(getMediaQueryList(mediaQuery).matches);
  }, [mediaQuery]);

  useEventListener(
    "change",
    (e) => {
      console.log(e);
      setIsMatch(e.matches);
    },
    getMediaQueryList(mediaQuery)
  );
  return isMatch;
}
