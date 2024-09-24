
import React from 'react';
import { FormikProps } from 'formik';
import ATMTextField from '../components/Atoms/ATMTextField/ATMTextField';
import ATMPasswordfield from '../components/Atoms/ATMPasswordfield/ATMPasswordfield';
import ATMButton from '../components/Atoms/ATMButton/ATMButton';

interface LoginProps {
    formikProps: FormikProps<{
        userName: string;
        password: string;
    }>;
}

const Login: React.FC<LoginProps> = ({ formikProps }) => {
    const { values, handleChange, isSubmitting, errors, touched } = formikProps;

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="bg-white p-10 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center mt-4 mb-10 text-gray-600">Login</h2>
                
                {/* Username */}
                <ATMTextField
                    label="Username"
                    value={values.userName}
                    onChange={handleChange}
                    placeholder="Enter username"
                    name="userName"
                    className=""
                />
                {errors.userName && touched.userName && (
                    <div className="text-red-500 text-sm mt-1 ml-5">{errors.userName}</div>
                )}
                
                {/* Password */}
                <ATMPasswordfield
                    label="Password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    name="password"
                    className=""
                />
                {errors.password && touched.password && (
                    <div className="text-red-500 text-sm ml-5">{errors.password}</div>
                )}

                {/* Button */}
                <ATMButton
                    label="Login"
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-blue-500 text-white font-semibold rounded-sm ${

                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                />
                <p className='ml-14 text-sm'> create a new account</p>
            </div>                                                                                                                                               
            
        </div>
    );
}

export default Login;
