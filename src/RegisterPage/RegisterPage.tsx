
import { ErrorMessage, FormikProps } from "formik";

import { Link } from "react-router-dom";
import ATMTextField from "../components/Atoms/ATMTextField/ATMTextField";
import ATMPasswordField from "../components/Atoms/ATMPasswordfield/ATMPasswordfield";

type Props = {formikProps: FormikProps<any>};

const RegisterPage = ({formikProps}: Props) => {
    const {values, handleChange, isSubmitting } = formikProps
    console.log(values, "val")

  return (
    <div className='h-screen flex justify-center items-center flex-col gap-3 m-auto bg-[url("https://t4.ftcdn.net/jpg/02/87/81/27/240_F_287812729_THAquCjfyjJkKOI4xE64TK5rrXYWoDQ8.jpg")] bg-cover px-4 sm:px-8'>
      
      {/* Registration container */}
      <div className='bg-white rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl p-8 sm:p-12'>
        
        <h1 className="text-center text-xl sm:text-2xl text-gray-700 mb-2 font-bold">Create Account</h1>
        <hr className="mb-7" />

        {/* Name Field */}
        <div>
            {/*  */}
            <ATMTextField 
            label="Name"
            className='p-2 border-2 border-gray-300 rounded w-full'
            placeholder='Name'
            name="name"
            value={values.name}
            onChange={handleChange}/>
            {/*  */}

        </div>

        {/* Username Field */}
        <div>

                 {/*  */}
                 <ATMTextField 
            label="Username"
            className='p-2 border-2 border-gray-300 rounded w-full'
            placeholder='User Name'
            name="userName"
            value={values.userName}
            onChange={handleChange}/>
          <p className="text-red-500"><ErrorMessage name="userName"/></p>
        </div>

        {/* Password Field */}
        <div>
        <ATMPasswordField 
          label="password"
         className='border-2 border-gray-300 rounded p-2 w-full'
         placeholder='Password'
         name="password"
         value={values.password}
         onChange={handleChange}/>
          <p className="text-red-500"><ErrorMessage name="password"/></p>
        </div>

        {/* Confirm Password Field */}
        <div>

        <ATMPasswordField 
          label=" Confirm Password"
         className='border-2 border-gray-300 rounded p-2 w-full'
         placeholder='Confirm Password'
         name="confirmPassword"
         value={values.confirmPassword}
         onChange={handleChange}/>
          <p className="text-red-500"><ErrorMessage name="confirmPassword"/></p> 
        </div>

        {/* Register Button */}
        <div>
          <button
            className='border rounded-lg bg-blue-500 hover:bg-blue-600 text-white mt-4 w-full p-2 transition-colors'
            disabled={isSubmitting}
          >
            Create Account
          </button>
        </div>

        <p className="mt-8 text-center text-gray-600">Already have an account? <Link to={'/login'}> Login</Link>  </p>
      </div>

      <p className="text-center text-white mt-4 font-semibold sm:mt-8">The journey of a thousand miles begins with one step.</p>
    </div>
  );
};



export default RegisterPage