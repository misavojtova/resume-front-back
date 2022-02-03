import React from "react";
import { Formik, Form } from "formik";
// import { useNavigate } from "react-router-dom";
import { initialValues, validationSchema, inputFields } from "../../data/index";
import axios from "axios";
import TextField from "../TextField";

import "./index.css";

function FormUpdate({ setActive, getProjects }) {
  const onSubmit = async (data, { resetForm }) => {
    try {
      const res = await axios.post("http://localhost:5000/api/projects", data);
      if (res.status === 200) {
        resetForm();
        getProjects();
        setActive(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className='form-wrap'>
          <button type='button' onClick={() => setActive(false)}>
            Close Input
          </button>
          <div className='input-wrap'>
            {inputFields.map((field, i) => {
              return (
                <TextField
                  label={field.label}
                  placeholder={field.placeholder}
                  name={field.name}
                  type={field.type}
                  key={i}
                />
              );
            })}
          </div>

          <button type='submit' className='add-project'>
            Add Project
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormUpdate;
