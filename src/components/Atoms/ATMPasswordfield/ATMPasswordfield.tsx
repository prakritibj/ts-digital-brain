import React from 'react';

interface ATMPasswordFieldProps {
  label: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  className?: string;
}

const ATMPasswordField: React.FC<ATMPasswordFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
  name,
  className,
}) => {
  return (
    <div className="flex flex-col text-left ">
      <label className="text-slate-700 font-medium">{label}</label>
      <input
        type="password"
        className={`${className} w-full p-2 m-2 border-gray-50 rounded-sm border-2 outline outline-1 outline-slate-400`}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default ATMPasswordField

