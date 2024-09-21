
import React from 'react'

interface ATMPasswordfieldProps{
    label : string,
    value : string,
    placeholder : string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name : string
     className? : string
}

const ATMPasswordfield : React.FC<ATMPasswordfieldProps>  = ({label, value, onChange, placeholder,name, className}) => {
  return (
     <div className='flex flex-col text-left m-3'>
    <label className='text-slate-700 font-semibold'>{label}</label>
    <input className={`${className} p-2 ml-2 border-gray-200 rounded outline outline-slate-300`}
    name = {name}
     value={value}
     onChange={onChange}
     placeholder={placeholder}
   />
</div>
  )
}

export default ATMPasswordfield

