import React from 'react';
import ResponsiveProvider from './WrapProvider/ResponsiveProvider';

export default function Footer() {
  return (
    <ResponsiveProvider direction={'col'} className={'gap-5 p-10 opacity-60 text-sm'}>
      <p>develop by 강경규</p>
      <p>connect</p>
      <p>qwzx16@naver.com</p>
      <a href='https://github.com/ganggyunggyu' className='text-green-300 hover:text-green-700'>
        GitHub
      </a>
      <a href='https://velog.io/@qwzx16/posts' className='text-green-300 hover:text-green-700'>
        Blog
      </a>
    </ResponsiveProvider>
  );
}
