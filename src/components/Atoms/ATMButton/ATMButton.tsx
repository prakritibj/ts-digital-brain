
import React from 'react';

interface ButtonProps {
  label: string;                       
  onClick?: () => void;                
  type?: 'button' | 'submit' | 'reset'; 
  disabled : boolean
  className?: string
}

const ATMButton: React.FC<ButtonProps> = ({
     label,
      onClick,
       type ="button",
       disabled = false,
       className 
       
    }) => {
  return (
    <button className = { `${className }  bg-sky-500 text-white border-gray-50 rounded `}
      type={type}
      onClick={onClick}
      disabled = {disabled}
      
    >
      {label}
    </button>
  );
};

export default ATMButton;
