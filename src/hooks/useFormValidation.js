// useFormValidation V-2.0.0
// DEPENDS ON: validator V-2.0.0

import { useEffect, useState } from "react";
import validator from "../utils/validator";

/**
 * A function that gets the default state of the form
 * @param {import('../utils/validator').formFields} fields
 */
const getDefaultState = (fields) => {
  /**
   * @type {import('../utils/validator').formFields}
   */
  const defaultState = {};
  for (const field in fields) {
    defaultState[field] = {
      value: fields[field].value,
      state: "initial",
      message: "Error Message",
      validation: fields[field].validation,
    };
  }
  return defaultState;
};

/**
 * A custom hook that can be used for controlled forms and their validation.
 * @param {import('../utils/validator').formFields} fields Contains the form fields and their validation rules.

 * @returns {{
    formData: {[x:string]:any};
    handleChange: (e: React.ChangeEvent<React.InputHTMLAttributes>, type?: 'text' | 'checkbox') => void;
    validate: () => number;
    resetForm: () => void;
    getFormValues: () => {[x:string]:any};
    setFormValues: (newValues: {}) => void;
    resetFormValidation: () => void;
}}
 */
const useFormValidation = (fields) => {
  /**
   * @type {import('../utils/validator').formFields}
   */
  let defaultState;
  useEffect(() => {
    defaultState = getDefaultState(fields);
    setFormData(defaultState);
  }, []);

  const [formData, setFormData] = useState(fields);

  /**
   * @function handleChange A function that handles the onChange event on controlled inputs.
   * @param {React.ChangeEvent<React.InputHTMLAttributes>} e The onChange event of the input field.
   * @param {'text'|'checkbox'} type The type of the input field.
   */
  const handleChange = (e, type = "text") => {
    if (!e.target) return;
    if (type === "text") {
      const value = e.target.value;
      const name = e.target.name;
      if (!name || value === undefined) return;
      setFormData((prev) => {
        const field = prev[name];
        field.value = value;
        if (field.state !== "initial") {
          field.state = "initial";
          field.message = "Error Message";
        }
        return { ...prev, [name]: field };
      });
      return;
    }
    if (type === "checkbox") {
      const value = e.target.checked;
      const name = e.target.name;
      if (!name || value === undefined) return;
      setFormData((prev) => {
        const field = prev[name];
        field.value = value;
        if (field.state !== "initial") {
          field.state = "initial";
          field.message = "Error Message";
        }
        return { ...prev, [name]: field };
      });
      return;
    }
  };

  /**
   * @function validate A function that validates the fields and sets the validation status and returns the number of fields with errors.
   * @returns {Number} The number of fields with errors.
   */
  function validate() {
    const newFormData = { ...formData };
    for (const field in newFormData) {
      const currentField = newFormData[field];
      if (currentField?.validation) {
        currentField.validation.forEach((condition, index) => {
          if (
            (currentField.state !== "error" || index === 0) &&
            validator[condition?.type]
          ) {
            const fieldStatus = validator[condition.type](
              currentField.value,
              condition?.message || "Error Message",
              // @ts-ignore
              condition?.limit || null
            );
            currentField.state = fieldStatus.state;
            currentField.message = fieldStatus.message;
          }
        });
      }
    }
    setFormData(newFormData);
    return validator.getErrorCount(newFormData);
  }

  /**
   * @function resetForm A function that resets the form to its defaults
   */
  const resetForm = () => {
    setFormData(getDefaultState(fields));
  };

  /**
   * @function getFormValues A function that returns the form values to submit.
   * @returns {{[x:string]:any}} Returns the form values to submit.
   */
  const getFormValues = () => {
    const newFormData = {};
    for (const field in formData) {
      newFormData[field] = formData[field].value;
    }
    return newFormData;
  };

  /**
   * A function that sets new values to the form.
   * @param {{}} newValues The new form values to set.
   */
  const setFormValues = (newValues) => {
    const newFormData = { ...formData };
    for (const field in newValues) {
      if (newFormData.hasOwnProperty(field)) {
        newFormData[field].value = newValues[field];
      }
    }
    setFormData((prev) => {
      return { ...prev, ...newFormData };
    });
  };

  /**
   * A function that resets the validation state of the form.
   */
  const resetFormValidation = () => {
    setFormData((prev) => {
      const newFormData = { ...prev };
      for (const field in newFormData) {
        newFormData[field].state = "initial";
        newFormData[field].message = "Error Message";
      }
      return { ...prev, ...newFormData };
    });
  };

  return {
    formData,
    handleChange,
    validate,
    resetForm,
    getFormValues,
    setFormValues,
    resetFormValidation,
  };
};

export default useFormValidation;
