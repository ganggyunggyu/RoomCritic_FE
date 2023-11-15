import React from 'react';
import { cn } from '../../util/cn';
import { cva } from 'class-variance-authority';
export const ButtonVariants = cva(
  `flex justify-center items-center rounded-md py-2 px-1 text-sm font-semibold transition-all shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600`,
  {
    variants: {
      bg: {
        default: `bg-slate-200`,
        red: `bg-red-400 hover:bg-red-500`,
        grey: `bg-slate-400 hover:bg-slate-500`,
      },
      text: {
        white: `text-white`,
        black: 'text-black',
      },
      size: {
        wfull: `w-full`,
        sm: `w-10 h-6`,
        md: ``,
        lg: ``,
      },
      position: {
        default: ``,
        inInput: `absolute right-3 top-1.5 w-8`,
      },
    },
    defaultVariants: {
      variants: 'default',
      size: 'default',
    },
  },
);
export default function FormButton({
  submitFunc,
  isSubmitAble,
  label,
  item,
  bg,
  text,
  size,
  position,
  ...props
}) {
  return (
    <button
      onClick={submitFunc}
      disabled={!isSubmitAble}
      type="button"
      className={cn(ButtonVariants({ bg, text, size, position }))}
      {...props}
    >
      {label ? label : ''}
      {item ? item : ''}
    </button>
  );
}
