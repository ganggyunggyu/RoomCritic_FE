import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { darkModeClassesState, isDarkModeState } from '../recoilAtoms';
import { json } from 'react-router-dom';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(isDarkModeState);
  const [darkModeClasses, setDarkModeClasses] = useRecoilState(darkModeClassesState);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', !isDarkMode);
  };

  useEffect(() => {
    setIsDarkMode(JSON.parse(localStorage.getItem('isDarkMode')));
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      setDarkModeClasses('bg-zinc-800 text-white');
    } else {
      setDarkModeClasses('bg-white text-black');
    }
  }, [isDarkMode, darkModeClasses]);

  useEffect(() => {
    if (isDarkMode) {
      setDarkModeClasses('bg-zinc-800 text-white');
    } else {
      setDarkModeClasses('bg-white text-black');
    }
  }, [isDarkMode]);

  return { isDarkMode, darkModeClasses, toggleDarkMode };
};

export default useDarkMode;
