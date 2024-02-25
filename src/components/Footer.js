import React from 'react';
import ResponsiveProvider from './WrapProvider/ResponsiveProvider';
import useDarkMode from '../hooks/useDarkMode';
export default function Footer() {
  const { isDarkMode } = useDarkMode();
  return (
    <ResponsiveProvider direction={'col'} className={'gap-5 p-10 opacity-60 text-sm'}>
      <p>develop by 강경규</p>
      <p>connect</p>
      <p>qwzx16@naver.com</p>
      <a
        href='https://github.com/ganggyunggyu'
        className={`text-green-500 hover:text-green-700 ${isDarkMode && 'text-green-300'}`}
      >
        GitHub
      </a>
      <a
        href='https://velog.io/@qwzx16/posts'
        className={`text-green-500 hover:text-green-700 ${isDarkMode && 'text-green-300'}`}
      >
        Blog
      </a>
    </ResponsiveProvider>
  );
}
