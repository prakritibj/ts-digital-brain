import React from 'react'

interface ATMTextFieldProps {
    label : string,
    value : string,
    placeholder : string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name : string
    error ?: string
    onBlur ?:  (e: React.ChangeEvent<HTMLInputElement>) => void;
    touched ?: boolean
    className? : string
}

const ATMTextField : React.FC<ATMTextFieldProps>  = ({label, value, onChange, placeholder,name,  className}) => {
  return (
     <div className='flex flex-col text-left m-3 '>
    <label className='text-slate-700 font-semibold'>{label}</label>
    <input className= {`${className}w-full p-2 m-2 border-gray-50 rounded-sm border-2 outline outline-1 outline-slate-400`}
    name = {name}
     value={value}
     onChange={onChange}
     placeholder={placeholder}
    />
    
</div>
  )
}

export default ATMTextField

