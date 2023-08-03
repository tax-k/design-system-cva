import React from 'react';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  text,
  onClick,
  ...props
}) => {
  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      {...props}
      className={'bg-red-500'}>
      {text}
    </button>
  );
};

export default Button;
