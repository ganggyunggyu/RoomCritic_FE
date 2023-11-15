import React from 'react';
import { cn } from '../../util/cn';
import { cva } from 'class-variance-authority';
import Button from './Button';
import SerchIcon from '../../icons/SerchIcon';

import { inputHandler, phoneNumberHandler } from '../../util/inputValue';

export const InputVariants = cva(
  `p-2 text-sm md:text-md block rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600`,
  {
    variants: {
      size: {
        wfull: 'w-full',
      },
    },
  },
);

export default function Input({
  value,
  setValue,
  type,
  placeholder,
  name,
  size,
  btn_label,
  btn_func,
  ...props
}) {
  const emailCheck = () => {
    console.log('이메일 인증');
  };
  return (
    <div>
      <div className="relative">
        {name === 'phoneNumber' ? (
          <input
            onChange={(e) => {
              phoneNumberHandler(e, setValue);
            }}
            maxLength={13}
            value={value}
            type={type}
            placeholder={placeholder}
            required
            className={cn(InputVariants({ size }))}
            {...props}
          />
        ) : (
          <input
            onChange={(e) => {
              inputHandler(e, setValue);
            }}
            value={value}
            type={type}
            placeholder={placeholder}
            required
            className={cn(InputVariants({ size }))}
          />
        )}
        {name === 'email' ? (
          <Button
            submitFunc={emailCheck}
            label={'인증'}
            position={'inInput'}
            size={'sm'}
            bg={'red'}
            text={'white'}
          />
        ) : (
          ''
        )}
        {name === 'search' ? (
          <Button
            submitFunc={btn_func}
            item={<SerchIcon />}
            position={'inInput'}
            size={'sm'}
            bg={'red'}
            isSubmitAble={true}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
