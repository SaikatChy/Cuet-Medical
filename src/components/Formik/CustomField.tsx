// CustomField.js
import { ErrorMessage, Field as FormikField } from "formik";
import React from "react";

const CustomField = ({ name, labelText, ...rest }) => {
  // Generate an ID based on the field name

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{labelText}</span>
      </label>
      <FormikField id={name} name={name} {...rest} />
      <ErrorMessage
        name={name}
        component="div"
        className="my-1 text-[700] text-xs text-[red] text-left"
      />
    </div>
  );
};

export default CustomField;