/** @format */
import './App.css';

import { Routes, Route } from 'react-router-dom';

import axiosConfig from './api/axiosConfig';
import { useEffect } from 'react';

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
import Sun from './icons/Sun';
import Moon from './icons/Moon';

function App() {
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const setUserInfo = useSetRecoilState(userInfoState);
  const setDarkMode = useSetRecoilState(darkModeState);

  const darkMode = useRecoilValue(darkModeState);
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const fetchLogin = async () => {
    try {
      const result = await axiosConfig.get('/auth/login/check', {
        withCredentials: true,
      });
      if (result.status === 200) {
        console.log(result.data.message);
        setIsLoggedIn(true);
        setUserInfo(result.data.userInfo);
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
  };

  useEffect(() => {
    fetchLogin();
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
      <button
        onClick={isDarkModeSwitch}
        className='h-12 w-12 border rounded-full flex items-center justify-center fixed bottom-8 right-8'
      >
        {darkMode ? <Sun /> : <Moon />}
      </button>
    </div>
  );
}

export default App;
