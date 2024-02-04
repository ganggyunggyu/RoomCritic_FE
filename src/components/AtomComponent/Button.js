import React from 'react';
import { cn } from '../../util/cn';
import { cva } from 'class-variance-authority';

export const ButtonVariants = cva(
  `flex justify-center items-center rounded-md p-2 text-sm text-white font-semibold transition-all shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600`,
  {
    variants: {
      bg: {
        default: `bg-slate-200`,
        main: `bg-red-400 hover:bg-red-500`,
        disable: `bg-slate-400 hover:bg-slate-500`,
      },
      text: {
        white: `text-white`,
        black: 'text-black',
      },
    },
  },
);
export default function FormButton({ label, item, bg, text, className, ...props }) {
  return (
    <button type="button" className={cn(ButtonVariants({ bg, text, className }))} {...props}>
      {label && label}
      {item && item}
    </button>
  );
}
