import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoggedInState, userInfoState } from '../recoilAtoms';
import axiosConfig from '../api/axiosConfig';
import useDarkMode from '../hooks/useDarkMode';

export default function Header() {
  const navigator = useNavigate();
  const userInfo = useRecoilValue(userInfoState);
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const { darkModeClasses } = useDarkMode();

  const submitLogout = async () => {
    try {
      const result = await axiosConfig.get('auth/logout');
      if (result.status === 200) {
        navigator('/');
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header
      className={`h-12 fixed top-0 left-0 right-0 p-3 flex items-center justify-center shadow-lg z-20 ${darkModeClasses}`}
    >
      <nav className='flex justify-around gap-3 md:w-7/12 w-10/12 transition-all'>
        <div className='hover:text-violet-400 transition-all'>
          <Link to={'/'}>
            <h1 className='text-md'>ROOM CRITIC</h1>
          </Link>
        </div>
        <div className='grow'></div>
        <div>
          {isLoggedIn ? (
            <div className='flex gap-3 items-center justify-center'>
              <div className='hover:text-violet-400 transition-all'>
                <Link to={`/mypage/${userInfo._id}`}>{userInfo.displayName} 평론가</Link>
              </div>
              <button onClick={submitLogout} className='hover:text-violet-400'>
                로그아웃
              </button>
              <div className='hover:text-violet-400 transition-all'>
                <Link to={'/serch'}>검색</Link>
              </div>
            </div>
          ) : (
            <div className='flex gap-5'>
              <div className='hover:text-violet-400 transition-all'>
                <Link to={'/login'}>로그인</Link>
              </div>
              <div className='hover:text-violet-400 transition-all'>
                <Link to={'/join'}>회원가입</Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
