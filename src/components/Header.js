/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { darkModeState, isLoggedInState, userInfoState } from '../recoilAtoms';
import SerchIcon from '../icons/SerchIcon';
import axiosConfig from '../api/axiosConfig';

export default function Header() {
  const userInfo = useRecoilValue(userInfoState);
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const darkMode = useRecoilValue(darkModeState);

  const isLogout = async () => {
    try {
      const result = await axiosConfig.post('auth/logout');
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header
      className={`${
        darkMode ? 'bg-zinc-800' : 'bg-white'
      } h-12 fixed top-0 left-0 right-0 p-3 flex items-center justify-center shadow-lg z-10`}
    >
      <nav className='flex justify-around gap-3 w-11/12 sm:w-9/12 sm:pl-1 sm:pr-1 transition-all'>
        <div className='flex items-center justify-center'>
          <Link to={'/'}>
            <span className='text-red-400'>빨간안경</span>
            <span>쓰고..</span>
          </Link>
        </div>
        <div className='grow'></div>
        <div>
          {isLoggedIn ? (
            <div className='flex gap-3 items-center justify-center'>
              <Link to={'/mypage'}>{userInfo.displayName} 평론가</Link>
              <button onClick={isLogout} className='hover:text-red-400'>
                로그아웃
              </button>
              <Link to={'/serch'}>
                <SerchIcon />
              </Link>
            </div>
          ) : (
            <div className='flex gap-5'>
              <div className='hover:text-red-400'>
                <Link to={'/login'}>로그인</Link>
              </div>
              <div className='hover:text-red-400'>
                <Link to={'/join'}>회원가입</Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
