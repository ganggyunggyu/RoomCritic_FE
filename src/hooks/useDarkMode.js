import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { darkModeState } from '../recoilAtoms';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  useEffect(() => {
    setDarkMode(JSON.stringify(localStorage.getItem('darkMode')));
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = '#27272A';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#27272A';
    }
  }, [darkMode]);

  return { darkMode, toggleDarkMode };
};

export default useDarkMode;
