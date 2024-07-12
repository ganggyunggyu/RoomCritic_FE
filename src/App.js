import './styles/App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Join from './pages/Join';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Serch from './pages/Serch';
import Home from './pages/Home';
import ContentDetail from './pages/ContentDetail';
import Create from './pages/Create';
import ReviewDetail from './pages/ReviewDetail';
import DarkModeButton from './components/AtomComponent/DarkModeButton';
import KakaoLogin from './pages/KakaoLogin';
import useDarkMode from './hooks/useDarkMode';
import useLogin from './hooks/auth/useLogin';
import Update from './pages/Update';
import { cn } from './util/cn';

function App() {
  const { isDarkMode, darkModeClasses, toggleDarkMode } = useDarkMode();
  const { fetchLogin } = useLogin();

  React.useEffect(() => {
    fetchLogin();
  }, []);

  return (
    <div className={cn(`${darkModeClasses} transition-all`)}>
      <Header />
      <div className='mt-12 flex flex-col items-center justify-center'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mypage/:userId' element={<MyPage />} />
          <Route path='/join' element={<Join />} />
          <Route path='/login' element={<Login />} />
          <Route path='/serch' element={<Serch />} />
          <Route path='/content/:contentType/:contentId' element={<ContentDetail />} />
          <Route path='/detail/review/:userId/:reviewId' element={<ReviewDetail />} />
          <Route path='/create/:contentType/:contentId' element={<Create />} />
          <Route path='/update/:userId/:reviewId' element={<Update />} />
          <Route path='/auth' element={<KakaoLogin />} />
        </Routes>
      </div>
      <DarkModeButton darkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;
