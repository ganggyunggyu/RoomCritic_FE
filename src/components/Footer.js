import React from 'react';
import ResponsiveProvider from './WrapProvider/ResponsiveProvider';

export default function Footer() {
  return (
    <ResponsiveProvider direction={'col'} className={'gap-5 p-10 opacity-60'}>
      <p>develop by 강경규</p>
      <p className="text-xl">connect</p>
      <p>qwzx16@naver.com</p>
    </ResponsiveProvider>
  );
}
