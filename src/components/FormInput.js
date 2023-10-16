/** @format */

import React from 'react';

export default function FormInput({
  value,
  setValue,
  type,
  placeholder,
  name,
}) {
  return (
    <div>
      <div className='mt-2'>
        {name === 'phoneNumber' ? (
          <input
            onChange={(e) => {
              setValue(
                e.target.value
                  .replace(/[^0-9]/g, '')
                  .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
                  .replace(/(\-{1,2})$/g, '')
              );
            }}
            maxLength={13}
            value={value}
            type={type}
            placeholder={placeholder}
            required
            className='p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        ) : (
          <input
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
            type={type}
            placeholder={placeholder}
            required
            className='p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        )}
        {name === 'email' ? (
          <button className='absolute'>메일 인증</button>
        ) : (
          ''
        )}
        {name === 'phoneNumber' ? <button>번호 인증</button> : ''}
      </div>
    </div>
  );
}
