// validator V-2.0.0

/**
 * @exports @typedef {{ state: "success" | "error", message: string }} validationStatus
 */

/**
 * @typedef {{ type: 'notEmpty'|'hasValue'|'isEmail', message: string }|{ type: 'maxLength'|'minLength'|'maxValue'|'minValue', message: string, limit?:number }} validators
 */

/**
 * @exports @typedef {{[x:string]:{value:string|number|boolean|readonly string[],validation?:validators[], state?: "success" | "error" | "initial", message?: string}}} formFields
 */

/**
 * A function that checks whether the input is empty string
 * @param {string|number|boolean|readonly string[]} value The input value
 * @param {string} message The error message
 * @returns {validationStatus} { state: "success" | "error", message: string }
 */
const notEmpty = (value, message) => {
  if (typeof value !== "string") {
    return { state: "error", message: "Value should be a string" };
  }
  if (value.trim() === "") {
    return {
      state: "error",
      message: message,
    };
  } else {
    return { state: "success", message: "Success Message" };
  }
};

/**
 * A function that checks whether a string is a valid email
 * @param {string} email The string to check
 */
function validateEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

/**
 * A function that checks whether the input is a valid email
 * @param {string|number|boolean|readonly string[]} value The input value
 * @param {string} message The error message
 * @returns {validationStatus} { state: "success" | "error", message: string }
 */
const isEmail = (value, message) => {
  if (typeof value !== "string") {
    return { state: "error", message: "Value should be a string" };
  }
  if (validateEmail(value) === false) {
    return { state: "error", message: message };
  } else {
    return { state: "success", message: "Success Message" };
  }
};

/**
 * A function that checks whether the input length is less than a maximum length
 * @param {string|number|boolean|readonly string[]} value The input value
 * @param {string} message The error message
 * @param {number} limit The maximum allowed length
 * @returns {validationStatus} { state: "success" | "error", message: string }
 */
const maxLength = (value, message, limit) => {
  if (typeof value === "number") {
    value = value.toString();
  }
  if (typeof value !== "string") {
    return { state: "error", message: "Value should be a string or a number" };
  }
  if (value.length > limit) {
    return {
      state: "error",
      message: message,
    };
  } else {
    return { state: "success", message: "Success Message" };
  }
};

/**
 * A function that checks whether the input length is more than a minimum length
 * @param {string|number|boolean|readonly string[]} value The input value
 * @param {string} message The error message
 * @param {number} limit The minimum allowed length
 * @returns {validationStatus} { state: "success" | "error", message: string }
 */
const minLength = (value, message, limit) => {
  if (typeof value === "number") {
    value = value.toString();
  }
  if (typeof value !== "string") {
    return { state: "error", message: "Value should be a string or a number" };
  }
  if (value.length < limit) {
    return {
      state: "error",
      message: message,
    };
  } else {
    return { state: "success", message: "Success Message" };
  }
};

/**
 * A function that checks whether the input is less than a maximum value
 * @param {string|number|boolean|readonly string[]} value The input value
 * @param {string} message The error message
 * @param {number} limit The maximum allowed value
 * @returns {validationStatus} { state: "success" | "error", message: string }
 */
const maxValue = (value, message, limit) => {
  if (typeof value === "string") {
    value = Number(value);
  }
  if (typeof value !== "number") {
    return { state: "error", message: "Value should be a number or a string" };
  }
  if (value > limit) {
    return {
      state: "error",
      message: message,
    };
  } else {
    return { state: "success", message: "Success Message" };
  }
};

/**
 * A function that checks whether the input is more than a minimum value
 * @param {string|number|boolean|readonly string[]} value The input value
 * @param {string} message The error message
 * @param {number} limit The minimum allowed value
 * @returns {validationStatus} { state: "success" | "error", message: string }
 */
const minValue = (value, message, limit) => {
  if (typeof value === "string") {
    value = Number(value);
  }
  if (typeof value !== "number") {
    return {
      state: "error",
      message: "Value should be a number or a string",
    };
  }
  if (value < limit) {
    return {
      state: "error",
      message: message,
    };
  } else {
    return { state: "success", message: "Success Message" };
  }
};

/**
 * A function that checks whether the input has a value
 * @param {string|number|boolean|readonly string[]} value The input value
 * @param {string} message The error message
 * @returns {validationStatus} { state: "success" | "error", message: string }
 */
const hasValue = (value, message) => {
  if (value === undefined || value === null) {
    return {
      state: "error",
      message: message,
    };
  } else {
    return { state: "success", message: "Success Message" };
  }
};

/**
 * A function that counts the number of errors in a form data
 * @param {{[x:string]:any}} status
 * @returns The number of errors
 */
const getErrorCount = (status) => {
  let errorCount = 0;
  for (const item in status) {
    if (status[item].state === "error") {
      errorCount++;
    }
  }

  return errorCount;
};

const validator = {
  notEmpty,
  isEmail,
  maxLength,
  minLength,
  maxValue,
  minValue,
  hasValue,
  getErrorCount,
};

export default validator;
