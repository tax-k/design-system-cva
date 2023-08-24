import React from 'react';
import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'destructive' | 'monochrome';
  modifier?: 'plain' | 'outline';
  size?: 'slim' | 'medium' | 'large';
  fullWidth?: boolean;
  loading?: boolean;
}

/**
 *
 * variant;
 * - default
 * - primary
 * - destructive
 * - monochrome
 *
 * modifier;
 * - outline
 * - plain
 *
 * size;
 * - slim
 * - medium (default)
 * - large
 *
 * Other states;
 * - loading
 * - disabled
 * - fullWidth
 */

const ButtonLegacy = ({
  children,
  size = 'medium',
  variant = 'default',
  fullWidth,
  disabled,
  modifier,
  loading,
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        'relative rounded-md font-sourceCodePro',
        variant === 'default' &&
          'text-text shadow-button border border-gray-400 bg-white',
        variant === 'monochrome' && 'text-text border border-gray-400 bg-white',
        variant === 'primary' && 'bg-primary text-white',
        variant === 'destructive' && 'bg-destructive text-white',

        // Modifiers
        modifier === 'outline' &&
          'border border-current bg-transparent shadow-[0_0_0_1px_currentColor]',
        modifier === 'outline' &&
          variant === 'destructive' &&
          'text-destructive',
        modifier === 'outline' && variant === 'primary' && 'text-primary',

        modifier === 'plain' &&
          'border-none bg-transparent px-2 py-1 text-sm shadow-none',
        modifier === 'plain' && variant === 'destructive' && 'text-destructive',
        modifier === 'plain' && variant === 'primary' && 'text-primary',

        // Sizes overrides
        size === 'slim' && 'text-sm',
        size === 'medium' && 'text-sm',
        size === 'large' && 'text-base',
        modifier !== 'plain' && size === 'slim' && 'px-3 py-[3px]',
        modifier !== 'plain' && size === 'medium' && 'px-4 py-2',
        modifier !== 'plain' && size === 'large' && 'px-6 py-3',
        fullWidth && 'w-full',

        // Disabled
        disabled && 'pointer-events-none opacity-50',
        disabled && variant === 'default' && ' border-borderDisabled',
      )}
    >
      <span
        className={classNames(
          'leading-[1.25rem]',
          loading && 'text-transparent',
        )}
      >
        {children}
      </span>
      {loading && (
        <span className="absolute left-1/2 top-1/2 block h-4 w-4 -translate-x-1/2 -translate-y-1/2">
          <svg
            className="animate-spin"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-current"
              d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"
            ></path>
          </svg>
          <span className="sr-only">Loading</span>
        </span>
      )}
    </button>
  );
};

export default ButtonLegacy;
