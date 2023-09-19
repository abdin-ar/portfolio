// useIntersection V-2.0.0

import { useState, useEffect } from "react";

/**
 * A hook that makes it easier to work with intersection observers
 * @param {React.MutableRefObject<undefined|null>} ref The ref of the object to check if it is intersecting
 * @param {number} threshold The threshold of the IntersectionObserver
 * @returns {boolean} A boolean that tells whether the object is intersecting
 */
export default function useIntersection(ref, threshold = 0) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (ref.current == null) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: threshold }
    );
    observer.observe(ref.current);

    return () => {
      if (ref.current == null) return;
      observer.unobserve(ref.current);
    };
  }, [ref.current, threshold]);
  return isVisible;
}
