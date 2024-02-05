import React from 'react';
import ResponsiveProvider from './WrapProvider/ResponsiveProvider';

export default function Footer() {
  return (
    <ResponsiveProvider direction={'row'} className={'gap-5 p-10 opacity-60 text-sm'}>
      <div className='flex flex-col gap-5 items-center justify-center'>
        <p>develop by 강경규</p>
        <p>connect</p>
        <p>qwzx16@naver.com</p>
        <a href='https://github.com/ganggyunggyu' className='text-green-300 hover:text-green-700'>
          GitHub
        </a>
        <a href='https://velog.io/@qwzx16/posts' className='text-green-300 hover:text-green-700'>
          Blog
        </a>
      </div>
    </ResponsiveProvider>
  );
}
