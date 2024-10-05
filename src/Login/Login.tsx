
import React from 'react';
import { FormikProps } from 'formik';
import ATMTextField from '../components/Atoms/ATMTextField/ATMTextField';
import ATMPasswordfield from '../components/Atoms/ATMPasswordfield/ATMPasswordfield';
import ATMButton from '../components/Atoms/ATMButton/ATMButton';
import { Link } from 'react-router-dom';

interface LoginProps {
    formikProps: FormikProps<{
        userName: string;
        password: string;
    }>;
}

const Login: React.FC<LoginProps> = ({ formikProps }) => {
    const { values, handleChange, isSubmitting, errors, touched } = formikProps;

    return (
        <div className='flex items-center justify-center h-screen  bg-[url("https://t4.ftcdn.net/jpg/02/87/81/27/240_F_287812729_THAquCjfyjJkKOI4xE64TK5rrXYWoDQ8.jpg")] bg-cover px-4 sm:px-8 '>
            <div className="bg-white p-10 gap-4 rounded-lg shadow-md flex flex-col">
                <h2 className="text-2xl font-semibold text-center mt-4 mb-10 text-gray-600">Login</h2>

                {/* Username */}
                <div>
                    <ATMTextField
                        label="Username"
                        value={values.userName}
                        onChange={handleChange}
                        placeholder="Enter username"
                        name="userName"
                        className=""
                    />
                    {errors.userName && touched.userName && (
                        <div className="text-red-500  absolute  text-sm  ">{errors.userName}</div>
                    )}
                </div>

                {/* Password */}
                <div>
                    <ATMPasswordfield
                        label="Password"
                        value={values.password}
                        onChange={handleChange}
                        placeholder="Enter password"
                        name="password"
                        className=""
                    />
                    {errors.password && touched.password && (
                        <div className="text-red-500  absolute text-sm ">{errors.password}</div>
                    )}
                </div>

                {/* Button */}
                <div>
                    <ATMButton
                        label="Login"
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-blue-500 text-white font-semibold rounded-sm ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    />
                </div>
                <p className="mt-8 text-center text-gray-600">Don't have an account? <Link to={'/registration'}> Create Account</Link> </p>
                </div>

        </div>
    );
}

export default Login;
