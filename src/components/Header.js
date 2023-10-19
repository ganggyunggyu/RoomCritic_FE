/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoggedInState, userInfoState } from '../recoilAtoms';
import SerchIcon from '../icons/SerchIcon';

export default function Header() {
  const userInfo = useRecoilValue(userInfoState);
  const isLoggedIn = useRecoilValue(isLoggedInState);

  return (
    <header className='h-12 fixed top-0 left-0 right-0 p-3 flex items-center justify-center shadow-md z-10 bg-white'>
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
              <Link to={'/serch'}>
                <SerchIcon />
              </Link>
            </div>
          ) : (
            <div className='flex gap-5'>
              <div className=''>
                <Link to={'/login'}>로그인</Link>
              </div>
              <div>
                <Link to={'/join'}>회원가입</Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
