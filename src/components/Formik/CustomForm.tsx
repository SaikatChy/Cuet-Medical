import { Form, Formik } from 'formik';
import React from 'react';

const CustomForm = ({ initialValues, validationSchema, onSubmit, children, ...rest }) => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {() => (
        <Form>
          <div {...rest}>

            {children}

          </div>

        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;