import { VariantProps, cva } from 'class-variance-authority';
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof BaseButtonVariants> {}

export const BaseButtonVariants = cva(
  [
    'font-semibold',
    'border',
    'rounded',
    'disabled:bg-gray-300 disabled:cursor-not-allowed',
  ],
  {
    variants: {
      intent: {
        primary: [
          'bg-blue-500',
          'text-white',
          'border-transparent',
          'hover:bg-blue-600',
        ],
        secondary: [
          'bg-white',
          'text-gray-800',
          'border-gray-400',
          'hover:bg-gray-100',
        ],
      },
      size: {
        small: ['text-sm', 'py-1', 'px-2'],
        medium: ['text-base', 'py-2', 'px-4'],
      },
      rounded: {
        none: 'rounded-none',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    compoundVariants: [
      {
        intent: 'primary',
        size: 'medium',
        className: 'uppercase',
      },
    ],
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  },
);
