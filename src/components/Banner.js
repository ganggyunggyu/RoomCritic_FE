/** @format */

import React from 'react';

export default function Banner() {
  return (
    <div className='flex justify-around bg-red-400 text-slate-50 w-screen'>
      <div className='h-72 text-xl flex flex-col justify-center flex-none gap-3 transition-all'>
        <p className='text-3xl'>파란색으로도 보이고</p>
        <p>녹색으로도 보이는 그 옷처럼,</p>
        <p>미결과 영원 사이에서 사무치도록</p>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
