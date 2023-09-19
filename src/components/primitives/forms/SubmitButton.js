import React from "react";
import FormRow from "./FormRow";
import Button from "../buttons/Button";

/**
 * @type {React.FC<{isFullWidth?:boolean} & React.ButtonHTMLAttributes>}
 */
const SubmitButton = ({ type, className, children, ...props }) => {
  return (
    <FormRow>
      <Button
        type="submit"
        variant="primary"
        className={`submit-btn ${className}`}
        {...props}
      >
        {children}
      </Button>
    </FormRow>
  );
};
export default SubmitButton;
