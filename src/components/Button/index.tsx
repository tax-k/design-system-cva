import React from 'react';
import { ButtonProps, BaseButtonVariants } from './Button.types';
import { cn } from '@utils';

/**
 * Button component using tawilwindcss + Class Variance Authority
 */
const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  rounded,
  ...props
}) => {
  return (
    <button
      className={cn(
        BaseButtonVariants({
          intent,
          size,
          rounded,
          className,
        }),
      )}
      {...props}>
      {props.children}
    </button>
  );
};

export default Button;
