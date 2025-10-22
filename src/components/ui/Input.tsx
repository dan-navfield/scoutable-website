import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      label,
      error,
      helperText,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      fullWidth = false,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    
    const baseStyles = 'flex h-10 rounded-md border border-secondary-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-secondary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-secondary-600 dark:bg-secondary-800 dark:ring-offset-secondary-900 dark:placeholder:text-secondary-400 dark:focus:ring-primary-400';
    
    const errorStyles = error
      ? 'border-error-500 focus:ring-error-500 dark:border-error-400 dark:focus:ring-error-400'
      : '';
    
    const iconStyles = (LeftIcon || RightIcon) ? 'relative' : '';
    
    return (
      <div className={cn('space-y-2', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium leading-none text-secondary-900 dark:text-secondary-100 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
        
        <div className={cn('relative', fullWidth && 'w-full')}>
          {LeftIcon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <LeftIcon className="h-4 w-4 text-secondary-500 dark:text-secondary-400" />
            </div>
          )}
          
          <input
            type={type}
            id={inputId}
            className={cn(
              baseStyles,
              errorStyles,
              LeftIcon && 'pl-10',
              RightIcon && 'pr-10',
              fullWidth && 'w-full',
              className
            )}
            ref={ref}
            {...props}
          />
          
          {RightIcon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <RightIcon className="h-4 w-4 text-secondary-500 dark:text-secondary-400" />
            </div>
          )}
        </div>
        
        {(error || helperText) && (
          <p className={cn(
            'text-sm',
            error
              ? 'text-error-600 dark:text-error-400'
              : 'text-secondary-600 dark:text-secondary-400'
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
