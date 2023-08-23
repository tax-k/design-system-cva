import { VariantProps, cva } from 'class-variance-authority';

export const BaseInputVariants = cva(
  'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 font-sourceCodePro text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof BaseInputVariants> {}
