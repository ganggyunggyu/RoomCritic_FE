/** @format */
import './App.css';

import { Routes, Route } from 'react-router-dom';

import axiosConfig from './api/axiosConfig';
import { useEffect, useState } from 'react';

import { userInfoState, isLoggedInState, darkModeState } from './recoilAtoms';
import { useRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';

import Header from './components/Header';
import Join from './pages/Join';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Serch from './pages/Serch';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Create from './pages/Create';
import DetailReview from './pages/DetailReview';
import Footer from './components/Footer';
import DarkModeButton from './components/DarkModeButton';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  const fetchLogin = async () => {
    try {
      const result = await axiosConfig.get('/auth/login/check', {
        withCredentials: true,
      });
      console.log(result);
      if (result.status === 200) {
        setIsLoggedIn(true);
        setUserInfo(result.data.userInfo.user);
        console.log('userInfo : ', userInfo);
      }
      if (result.status === 201) {
        console.log(result.data.message);
        setIsLoggedIn(false);
        setUserInfo({});
      }
    } catch (err) {
      console('fetchLoginERROR !!', err);
    }
  };
  const isDarkModeSwitch = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', darkMode);
  };

  useEffect(() => {
    console.log(localStorage.getItem('darkMode'));
    setDarkMode(localStorage.getItem('darkMode'));
    fetchLogin();
    console.log(darkMode);
  }, []);

  return (
    <div
      className={`${darkMode ? 'bg-zinc-800 text-white' : ''} transition-all`}
    >
      <Header />
      <div className='mt-12'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mypage' element={<MyPage />} />
          <Route path='/join' element={<Join />} />
          <Route path='/login' element={<Login />} />
          <Route path='/serch' element={<Serch />} />
          <Route path='/detail/:mediaType/:contentId' element={<Detail />} />
          <Route
            path='/detail/review/:userId/:reviewId'
            element={<DetailReview />}
          />
          <Route path='/create/:mediaType/:contentId' element={<Create />} />
        </Routes>
      </div>
      <Footer />
      <DarkModeButton darkMode={darkMode} isDarkModeSwitch={isDarkModeSwitch} />
    </div>
  );
}

export default App;
