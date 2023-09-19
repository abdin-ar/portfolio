import React from "react";
import FormRow from "../FormRow";
import Label from "../Label";
import FormInputValidation from "./FormInputValidation";
import "./form-input.css";

/**
 * @type {React.FC<{label?:string,inputClassName?:string, labelClassName?:string, isValidated?:boolean, validState?:{state:'initial'|'error'|'success',message:string}} & React.InputHTMLAttributes & React.TextareaHTMLAttributes>}
 */
const FormInput = ({
  label,
  name,
  type = "text",
  className,
  id,
  inputClassName,
  labelClassName,
  isValidated = false,
  validState,
  ...props
}) => {
  const validStateFinal = validState || { state: "initial", message: "" };
  return (
    <FormRow
      className={
        isValidated ? `form-row-validated ${validStateFinal.state}` : ""
      }
    >
      {label ? (
        <Label className={labelClassName} htmlFor={name}>
          {label}
        </Label>
      ) : null}
      {type === "textarea" ? (
        <textarea
          className={`textarea ${inputClassName}`}
          name={name}
          id={name}
          {...props}
        />
      ) : (
        <input
          className={`input ${inputClassName}`}
          type={type}
          name={name}
          id={name}
          {...props}
        />
      )}
      {isValidated ? (
        <FormInputValidation validState={validStateFinal} />
      ) : null}
    </FormRow>
  );
};

export default FormInput;
