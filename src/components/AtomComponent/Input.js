import React from 'react';
import { cn } from '../../util/cn';
import { cva } from 'class-variance-authority';
import Button from '../AtomComponent/Button';
export const InputVariants = cva(
  // `p-2 text-sm md:text-md block rounded-md border-0 text-gray-900 shadow-sm ring-1
  // ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
  // focus:ring-violet-600 focus:bg-slate-50 transition-1s w-full`,
  `block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2
   border-white appearance-none dark:text-white dark:border-white dark:focus:border-violet-400
   focus:outline-none focus:ring-0 focus:border-violet-400 peer`,
  {
    variants: {},
  },
);

export default function Input({ label, className, alertMessage, buttonConfig, ...props }) {
  return (
    <React.Fragment>
      <div className='relative z-0 py-1 w-full'>
        <input
          id='floating_filled pt-1'
          placeholder=' '
          autoComplete='off'
          className={cn(InputVariants({ className }))}
          {...props}
        />
        {label && (
          <label
            className='absolute text-md text-white dark:white duration-300
            transform -translate-y-6 scale-75 top-3.5 left-0 -z-10 origin-[0] peer-focus:start-0 
            peer-focus:text-violet-400 peer-focus:dark:text-violet-400 peer-placeholder-shown:scale-100 
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 
            rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
            htmlFor='floating_filled'
          >
            {label}
          </label>
        )}
        {buttonConfig && (
          <Button
            className={'absolute top-3 right-0'}
            label={buttonConfig.label}
            bg={buttonConfig.bg}
            onClick={buttonConfig.onClick}
          />
        )}
      </div>
      {alertMessage && <p className='text-red-400 text-xs transition-1s'>{alertMessage}</p>}
    </React.Fragment>
  );
}
