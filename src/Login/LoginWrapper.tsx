import React from 'react';
import Login from './Login';
import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoginMutation } from '../Slices/AuthSlice';

// yup validation
const validationSchema = Yup.object({
  userName: Yup.string().required('Username is required').min(4).max(20),
  password: Yup.string().required('Password is required').min(8)
});

interface LoginValues {
  userName: string;
  password: string;
}
const initialValues: LoginValues = {
  userName: '',
  password: ''
};

const LoginWrapper: React.FC = () => {
  const navigate = useNavigate()
  const [login] = useLoginMutation()
  // console.log(login, 'kkkkk')
  const handleSubmit = (values: LoginValues, { setSubmitting }: FormikHelpers<LoginValues>) => {

    login(values).then((res: any) => {
      console.log(values, " value")
      console.log(res, "res")
      if (res?.data.status) {
        toast.success(res.data.msg)
        localStorage.setItem("authToken", res.data.data.token)
        navigate("/home")
      } else {
        toast.error(res.data.msg)

      }
    })
      .catch((error) => {
        console.log(error)
      })
    console.log(values);
    setTimeout(() => {
      setSubmitting(false);
    }, 2000)
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => (
        <Form>
          <Login formikProps={formikProps} />


        </Form>
      )}
    </Formik>
  );
};

export default LoginWrapper;
