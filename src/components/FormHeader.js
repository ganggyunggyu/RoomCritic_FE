import React from 'react';
import logo from '../imgs/glass.png';
export default function FormHeader({ text }) {
  return (
    <div className="p-3 md:p-10">
      <img className="mx-auto h-20 w-auto md:block hidden" src={logo} alt="Your Company" />
      <h2 className="text-center text-3xl font-bold leading-9 tracking-tight">{text}</h2>
    </div>
  );
}
