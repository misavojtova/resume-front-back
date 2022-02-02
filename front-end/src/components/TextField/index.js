import React from "react";
import { ErrorMessage, useField } from "formik";

function TextField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className='input-label-con'>
      <div className='form-label-con'>
        <label className='form-label' htmlFor={field.name}>
          {label}
        </label>
      </div>

      <div className='input-eye-con'>
        <input
          className={`form-input ${meta.touched && meta.error && "is-invalid"}`}
          {...field}
          {...props}
        />
      </div>

      <ErrorMessage className='input-err' name={field.name} component='span' />
    </div>
  );
}

export default TextField;
