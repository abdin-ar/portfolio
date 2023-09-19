import React from "react";
import FormRow from "../FormRow";
import Alert from "../../other/Alert";

/**
 * @type {React.FC<{status:'error'|'success'|'closed'} & React.AllHTMLAttributes>}
 */
const FormAlert = ({ status = "error", children, ...props }) => {
  return (
    <FormRow>
      <Alert isFormAlert={true} status={status} {...props}>
        {children}
      </Alert>
    </FormRow>
  );
};
export default FormAlert;
