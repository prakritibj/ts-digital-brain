// import React from 'react';

// interface ATMTextFieldProps {
//   label: string;
//   value: string;
//   placeholder: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   name: string;
//   error?: string;
//   onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
//   touched?: boolean;
//   className?: string;
// }

// const ATMTextField: React.FC<ATMTextFieldProps> = ({
//   label,
//   value,
//   onChange,
//   placeholder,
//   name,
//   error,
//   onBlur,
//   touched,
//   className,
// }) => {
//   return (
//     <div className="flex flex-col text-left m-3">
//       <label className="text-slate-700 font-semibold">{label}</label>
//       <input
//         className={`${className} w-full p-1 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500`}
//         name={name}
//         value={value}
//         onChange={onChange}
//         onBlur={onBlur}
//         placeholder={placeholder}
//       />
//       {error && touched && <div className="text-red-500 text-xs mt-1">{error}</div>}
//     </div>
//   );
// };

// export default ATMTextField;

// =========================================================================


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
    <div className="flex flex-col text-left m-3">
      <label className="text-slate-700 font-medium">{label}</label>
      <input
        type="password"
        className={`${className} w-full p-2 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500`}
        name={name}
        value={value}     
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default ATMPasswordField

