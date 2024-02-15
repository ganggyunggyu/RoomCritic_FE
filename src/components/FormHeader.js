import React from 'react';
import logo from '../imgs/그로밍.png';
export default function FormHeader({ text }) {
  return (
    <div className='w-full p-3 md:p-10 '>
      <img className='rounded-md shadow-lg mb-10' src={logo} alt='Your Company' />
      <h2 className='text-center text-3xl font-bold leading-9 tracking-tight'>{text}</h2>
    </div>
  );
}
