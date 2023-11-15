import React from 'react';
import WrapProvider from '../components/wraper-components/WrapProvider';

export default function Footer() {
  return (
    <WrapProvider type={'wrap'} className={'h-auto py-10 gap-10'}>
      <p>develop by 강경규</p>
      <p className="text-xl">connect</p>
      <p>qwzx16@naver.com</p>
    </WrapProvider>
  );
}
