import React from 'react';
import * as Yup from 'yup'; // Import Yup for validation
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import React Toastify CSS
import { useRegisterMutation } from '../Slices/AuthSlice';
import RegisterPage from './RegisterPage';
import { Form, Formik } from 'formik';

const RegistrationWrapper = () => {
     const [ register] = useRegisterMutation()
   console.log(register, "rehj")
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    userName: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(2).required('Name is required'),
    userName: Yup.string().min(3).max(20).matches(/^[a-zA-Z0-9_]+$/).required('Username is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handleSubmit = (values, actions) => {
   register(values)
   console.log(values ,"vakl")
      .then((res) => {
        actions.resetForm();
        const authToken = res.data.token;
        localStorage.setItem("authToken", authToken);

        if (authToken) {
          toast.success('Registration successful! Redirecting...');
          navigate("/home");
        }
      })
      .catch((error) => {
        toast.error('Registration failed. Please try again.');
        console.error('Registration failed:', error);
      });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
          <Form>
            {/* <Registration formikProps={formikProps} /> */}
            <RegisterPage formikProps={formikProps} />
          </Form>
        )}
      </Formik>
      <ToastContainer /> 
    </>
  );
};

export default RegistrationWrapper;