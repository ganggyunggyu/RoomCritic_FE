import './styles/App.css';

import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import Header from './components/Header';
import Join from './pages/Join';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Serch from './pages/Serch';
import Home from './pages/Home';
import ContentDetail from './pages/ContentDetail';
import Create from './pages/Create';
import ReviewDetail from './pages/ReviewDetail';
import DarkModeButton from './components/DarkModeButton';
import KakaoLogin from './pages/KakaoLogin';
import useDarkMode from './hooks/useDarkMode';
import useLogin from './hooks/useLogin';
import useContentFetch from './hooks/useContentFetch';

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { fetchLogin } = useLogin();
  const { fetchReview } = useContentFetch();

  useEffect(() => {
    fetchLogin();
    fetchReview();
  }, []);

  return (
    <div className={`${darkMode ? 'bg-zinc-800 text-white' : ''} transition-all `}>
      <Header />
      <div className="mt-12 flex flex-col items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypage/:userId" element={<MyPage />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/serch" element={<Serch />} />
          <Route path="/detail/:mediaType/:contentId" element={<ContentDetail />} />
          <Route path="/detail/review/:userId/:reviewId" element={<ReviewDetail />} />
          <Route path="/create/:mediaType/:contentId" element={<Create />} />
          <Route path="/auth" element={<KakaoLogin />} />
        </Routes>
      </div>
      <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;
