
import React from 'react'
import { FormikProps } from 'formik'
import ATMTextField from '../components/Atoms/ATMTextField/ATMTextField'
import ATMPasswordfield from '../components/Atoms/ATMPasswordfield/ATMPasswordfield'
import ATMButton from '../components/Atoms/ATMButton/ATMButton'

interface LoginProps {
    formikProps: FormikProps<{
        userName: string
        password: string
    }>
}

const Login: React.FC<LoginProps> = ({ formikProps }) => {
    const { values, handleChange, isSubmitting } = formikProps

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center text-gray-600">Login</h2>
                
                {/* Username */}
                <ATMTextField
                    label="Username"
                    value={values.userName}
                    onChange={handleChange}
                    placeholder="Enter username"
                    name="userName"
                    className="" 
                />
                
                {/* Password */}
                <ATMPasswordfield
                    label="Password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    name="password"
                    className=""
                />

                {/* Button */}
                <ATMButton
                    label="Login"
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-blue-500 text-white font-semibold rounded-sm ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`} 
                />
            
            </div>
        </div>
    )
}

export default Login

