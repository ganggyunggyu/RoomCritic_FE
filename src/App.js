/** @format */
import './App.css';

import { Routes, Route } from 'react-router-dom';

import axiosConfig from './api/axiosConfig';
import { useEffect } from 'react';

import { userInfoState, isLoggedInState } from './recoilAtoms';
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

function App() {
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const setUserInfo = useSetRecoilState(userInfoState);
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const fetchLogin = async () => {
    const result = await axiosConfig.get('/auth/login/check', {
      withCredentials: true,
    });
    try {
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
  useEffect(() => {
    fetchLogin();
  }, []);
  return (
    <div>
      <Header />
      <div className='mt-12'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mypage' element={<MyPage />} />
          <Route path='/join' element={<Join />} />
          <Route path='/login' element={<Login />} />
          <Route path='/serch' element={<Serch />} />
          <Route path='/detail/:mediaType/:contentId' element={<Detail />} />
          <Route path='/detail/review/:reviewId' />
          <Route path='/create/:mediaType/:contentId' element={<Create />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
