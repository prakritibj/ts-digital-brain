
import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled: boolean
  className?: string
}

const ATMButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  className

}) => {
  return (
    <div className='flex flex-col text-left '>
      <button className={`${className}  bg-sky-500 text-white rounded w-full p-2 m-2  border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 `}
        type={type}
        onClick={onClick}
        disabled={disabled}

      >
        {label}
      </button>
    </div>
  );
};

export default ATMButton;
