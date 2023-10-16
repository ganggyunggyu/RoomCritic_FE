/** @format */

import React from 'react';

export default function FormHeader({ text }) {
  return (
    <div>
      <img
        className='mx-auto h-10 w-auto'
        src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
        alt='Your Company'
      />
      <h2 className='mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
        {text}
      </h2>
    </div>
  );
}
