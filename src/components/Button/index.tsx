import React from 'react';
import { ButtonProps, ButtonVariants } from './Button.types';

const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => {
  return (
    <button
      className={ButtonVariants({
        intent,
        size,
        className,
      })}>
      {props.children}
    </button>
  );
};

export default Button;
