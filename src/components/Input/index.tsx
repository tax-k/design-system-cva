import * as React from 'react';
import { InputProps, BaseInputVariants } from './Input.types';
import { tailwind } from '../../utils';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={tailwind.cn(
          BaseInputVariants({
            className,
          }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export default Input;
