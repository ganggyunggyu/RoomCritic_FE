import React from 'react';
export default function FormHeader({ text }) {
  return (
    <div className='w-full p-3 md:p-10 '>
      <h2 className='text-center text-3xl font-bold leading-9 tracking-tight'>{text}</h2>
    </div>
  );
}
