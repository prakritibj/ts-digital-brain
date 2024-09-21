
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
    const { values, handleChange, isSubmitting } = formikProps;

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Login</h2>
                
                {/* Username */}
                <ATMTextField
                    label="Username"
                    value={values.userName}
                    onChange={handleChange}
                    placeholder="Enter your username"
                    name="userName"
                    className="mb-4" 
                />
                
                {/* Password */}
                <ATMPasswordfield
                    label="Password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    name="password"
                    className="mb-4"
                />

                {/* Button */}
                <ATMButton
                    label="Login"
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`} 
                />
                
                <div className="text-center mt-4">
                    <a href="/signin" className="text-blue-500 hover:underline">
                        sign in
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;

