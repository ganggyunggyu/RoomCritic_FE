/** @format */

import React from 'react';
import logo from '../imgs/glass.png';
export default function FormHeader({ text }) {
  return (
    <div>
      <img className='mx-auto h-10 w-auto' src={logo} alt='Your Company' />
      <h2 className='text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
        {text}
      </h2>
    </div>
  );
}
