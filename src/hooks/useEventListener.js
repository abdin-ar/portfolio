// useEventListener V-2.0.0

import { useRef, useEffect } from "react";

/**
 * This hooks makes adding event listeners in react very easy
 * @param {keyof GlobalEventHandlersEventMap} eventType
 * @param {Function} callback
 * @param {EventTarget} element
 */
export default function useEventListener(
  eventType,
  callback,
  element = window
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (e) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => {
      element.removeEventListener(eventType, handler);
    };
  }, [eventType, element]);
}
