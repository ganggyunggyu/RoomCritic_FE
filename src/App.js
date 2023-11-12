import './App.css';

import { Routes, Route } from 'react-router-dom';

import axiosConfig from './api/axiosConfig';
import { useEffect, useState } from 'react';

import { userInfoState, isLoggedInState, darkModeState } from './recoilAtoms';
import { useSetRecoilState } from 'recoil';
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
import KakaoLogin from './pages/KakaoLogin';

import useDarkMode from './hooks/useDarkMode';
import useLoginFetch from './hooks/useLoginFetch';

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { fetchLogin } = useLoginFetch();

  useEffect(() => {
    fetchLogin();
  }, []);

  return (
    <div className={`${darkMode ? 'bg-zinc-800 text-white' : ''} transition-all`}>
      <Header />
      <div className="mt-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypage/:userId" element={<MyPage />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/serch" element={<Serch />} />
          <Route path="/detail/:mediaType/:contentId" element={<Detail />} />
          <Route path="/detail/review/:userId/:reviewId" element={<DetailReview />} />
          <Route path="/create/:mediaType/:contentId" element={<Create />} />
          <Route path="/auth" element={<KakaoLogin />} />
        </Routes>
      </div>
      <Footer />
      <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;
