/** @format */

import React from 'react';

export default function FormButton({ submitFunc, text, isSubmitAble }) {
  return (
    <button
      onClick={submitFunc}
      type='button'
      disabled={!isSubmitAble}
      className='flex w-full justify-center rounded-md bg-indigo-600 mt-3 p-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
    >
      {text}
    </button>
  );
}
