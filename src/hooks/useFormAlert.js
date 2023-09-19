// useFormAlert V-2.0.0

import { useState, useRef } from "react";

/**
 * A hook that can be used for form alerts.
 * @param {number} duration The duration for which the alert will be displayed (in ms).
 * @param {'error'|'success'|'closed'} defaultState The default state of the alert element
 * @param {string} defaultMesssage The default message of the alert element
 * @returns {{alert: (state: 'success' | 'error', message: string) => void, state: 'error'|'success'|'closed', message: string;}} This hook returns a function that sets the alert and the current state and message of the alert.
 */
const useFormAlert = (
  duration = 3000,
  defaultState = "closed",
  defaultMesssage = ""
) => {
  const [formAlertStatus, setFormAlertStatus] = useState({
    state: defaultState,
    message: defaultMesssage,
  });

  /**
   * @type {React.MutableRefObject<any>}
   */
  const currentAlert = useRef(null);

  /**
   * @function alert
   * A function that sets a form alert.
   * @param {'success'|'error'} state The state of the alert. Can be: success | error
   * @param {string} message The message of the alert.
   */
  function alert(state, message) {
    setFormAlertStatus({
      ...formAlertStatus,
      state: state,
      message: message,
    });
    if (currentAlert) {
      clearTimeout(currentAlert?.current);
    }
    currentAlert.current = setTimeout(() => {
      setFormAlertStatus({
        ...formAlertStatus,
        state: defaultState,
        message: defaultMesssage,
      });
    }, duration);
  }

  return {
    alert,
    state: formAlertStatus.state,
    message: formAlertStatus.message,
  };
};
export default useFormAlert;
