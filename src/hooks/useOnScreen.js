// useOnScreen V-2.0.0

import { useState, useEffect } from "react";

/**
 * A hook that makes it easier to work with intersection observers and tells if the object is visible on the screen
 * @param {React.MutableRefObject<null>} ref The ref of the object to check if it is visible
 * @param {string} rootMargin The rootMargin of the IntersectionObserver
 * @returns {boolean} A boolean that tells whether the object is visible
 */
export default function useOnScreen(ref, rootMargin = "0px") {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (ref.current == null) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(ref.current);

    return () => {
      if (ref.current == null) return;
      observer.unobserve(ref.current);
    };
  }, [ref.current, rootMargin]);
  return isVisible;
}
