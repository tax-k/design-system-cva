import React, { useMemo } from 'react';
import { ButtonProps, BaseButtonVariants } from './Button.types';
import { tailwind } from '../../utils';

/**
 * Button component using tawilwindcss + Class Variance Authority
 */
const Button: React.FC<ButtonProps> = ({
  className,
  size,
  variant,
  leftIcon,
  rightIcon,
  isLoading,
  ...props
}) => {
  const { icon, iconPlacement } = useMemo(() => {
    let icon = rightIcon ? rightIcon : leftIcon;

    // if (isLoading) {
    //   icon = <;
    // }

    return {
      icon,
      iconPlacement: rightIcon ? ('right' as const) : ('left' as const),
    };
  }, [isLoading, leftIcon, rightIcon]);

  return (
    <button
      className={tailwind.cn(
        BaseButtonVariants({
          size,
          variant,
          className,
          isLoading,
        }),
      )}
      {...props}
    >
      {icon && iconPlacement === 'left' ? (
        <span
          className={tailwind.cn(
            { 'mr-2': !!props.children },
            'inline-flex shrink-0 self-center',
          )}
        >
          {icon}
        </span>
      ) : null}
      {props.children}
      {icon && iconPlacement === 'right' ? (
        <span
          className={tailwind.cn(
            { 'ml-2': !!props.children },
            'inline-flex shrink-0 self-center',
          )}
        >
          {icon}
        </span>
      ) : null}
    </button>
  );
};

export default Button;
