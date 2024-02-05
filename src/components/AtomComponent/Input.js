import React from 'react';
import { cn } from '../../util/cn';
import { cva } from 'class-variance-authority';

export const InputVariants = cva(
  `p-2 text-sm md:text-md block rounded-md border-0 text-gray-900 shadow-sm ring-1 
  ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
  focus:ring-red-600 focus:bg-slate-50 transition-1s`,
  {
    variants: {},
  },
);

export default function Input({ label, className, alertMessage, ...props }) {
  return (
    <React.Fragment>
      {label && (
        <label className='text-sm' htmlFor='input'>
          {label}
        </label>
      )}
      <input className={cn(InputVariants({ className }))} {...props} />
      {alertMessage && <p className='text-red-400 text-xs transition-1s'>{alertMessage}</p>}
    </React.Fragment>
  );
}
