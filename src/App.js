/** @format */
import './App.css';

import { Routes, Route, Link } from 'react-router-dom';

import Join from './pages/Join';
import Login from './pages/Login';
import axios from './api/axios';
import { useEffect, useState } from 'react';

function App() {
  const [isLoined, setIsLogied] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const fetchLogin = async () => {
    const result = await axios.get('/auth/login/check', {
      withCredentials: true,
    });
    console.log(result);
    try {
      if (result.status === 200) {
        console.log(result.data.message);
        setIsLogied(true);
        setUserInfo(result.data.userInfo);
      }
      if (result.status === 201) {
        console.log(result.data.message);
        setIsLogied(false);
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
    <div className='App'>
      <div className='fixed flex gap-5 p-3'>
        <div>
          <Link to={'/'}>홈</Link>
        </div>
        <div>
          <Link to={'/join'}>회원가입</Link>
        </div>

        <div>
          {isLoined ? (
            <button onClick={fetchLogin}>로그아웃</button>
          ) : (
            <Link to={'/login'}>로그인</Link>
          )}
        </div>
      </div>
      <Routes>
        <Route path='/join' element={<Join />} />
        <Route
          path='/login'
          element={
            <Login setUserInfo={setUserInfo} setIsLogied={setIsLogied} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
