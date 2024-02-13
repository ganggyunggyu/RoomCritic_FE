import React from 'react';
import { cn } from '../../util/cn';
import { cva } from 'class-variance-authority';

export const InputVariants = cva(
  `p-2 text-sm md:text-md block rounded-md border-0 text-gray-900 shadow-sm ring-1 
  ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
  focus:ring-violet-600 focus:bg-slate-50 transition-1s w-full`,
  {
    variants: {},
  },
);

export default function Input({ label, className, alertMessage, button, ...props }) {
  return (
    <figure className='flex flex-col gap-3'>
      {label && (
        <label className='text-sm' htmlFor='input'>
          {label}
        </label>
      )}
      <div className='flex relative'>
        <input className={cn(InputVariants({ className }))} {...props} />
        {button && (
          <button
            className='absolute text-black right-2 top-0 bottom-0'
            type='button'
            onClick={button.onClick}
          >
            {button.lable || button.icon}
          </button>
        )}
      </div>
      {alertMessage && <p className='text-red-400 text-xs transition-1s'>{alertMessage}</p>}
    </figure>
  );
}
