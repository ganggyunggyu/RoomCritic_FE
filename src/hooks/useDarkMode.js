import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { darkModeClassesState, isDarkModeState } from '../recoilAtoms';

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
      document.body.style.backgroundColor = '#27272A';
      document.body.style.color = 'white';
    } else {
      setDarkModeClasses('bg-white text-black');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#27272A';
    }
  }, [isDarkMode, darkModeClasses]);

  useEffect(() => {
    if (isDarkMode) {
      setDarkModeClasses('bg-zinc-800 text-white');
      document.body.style.backgroundColor = '#27272A';
      document.body.style.color = 'white';
    } else {
      setDarkModeClasses('bg-white text-black');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#27272A';
    }
  }, [isDarkMode]);

  return { isDarkMode, darkModeClasses, toggleDarkMode };
};

export default useDarkMode;
